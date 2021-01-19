package com.swimmingsprite.ems.service.employee;

import com.swimmingsprite.ems.dto.LateDTO;
import com.swimmingsprite.ems.entity.Late;
import com.swimmingsprite.ems.repository.employeerepository.LateRepository;
import com.swimmingsprite.ems.repository.entityrepository.PlaceRepository;
import com.swimmingsprite.ems.util.InstantProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Duration;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class LateService {
    @Autowired
    private LateRepository lateRepository;

    @Autowired
    PlaceRepository placeRepository;

    public List<LateDTO> getAllLatesToday(int placeId, Integer minutesOffset) {
        return getAllLatesByDate(LocalDate.now(), minutesOffset, placeId);
    }

    public List<LateDTO> getAllLatesByDate(LocalDate localDate, Integer minutesOffset, int placeId) {

        if (!placeRepository.existsById(placeId)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Place with id "+placeId+" not found!");

        InstantProvider.checkMinutesOffset(minutesOffset);
        List<Late> lates = lateRepository.findAllByDateAndPlace(
                InstantProvider.startByDate(localDate, minutesOffset),
                InstantProvider.endByDate(localDate, minutesOffset),
                placeId
        );

        return latesToDTO(lates, minutesOffset);
    }

    public List<LateDTO> getAllLatesByEmployee(Integer employeeId, Integer minutesOffset) {
        InstantProvider.checkMinutesOffset(minutesOffset);
        List<Late> lates = lateRepository.findAllByEmployeeId(employeeId);
        return latesToDTO(lates, minutesOffset);
    }

    public List<LateDTO> getAllLatesByEmployeeAndDate(Integer employeeId, LocalDate localDate, Integer minutesOffset) {
        InstantProvider.checkMinutesOffset(minutesOffset);
        List<Late> lates = lateRepository.findAllByEmployeeIdAndDate(
                InstantProvider.startByDate(localDate, minutesOffset),
                InstantProvider.endByDate(localDate, minutesOffset),
                employeeId
        );
        return latesToDTO(lates, minutesOffset);
    }

    private List<LateDTO> latesToDTO(List<Late> lates, int timeZoneMinutesOffset) {
        List<LateDTO> latesDTOList = new ArrayList<>();

        if (lates == null || lates.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No late records found!");

        lates.forEach(late -> {
            LateDTO dto = new LateDTO();
            dto.setArrivedTime(late.getArrivedTime().plusSeconds(timeZoneMinutesOffset*60));
            dto.setDepartmentId(late.getShift().getDepartment().getId());
            dto.setDepartmentName(late.getShift().getDepartment().getName());
            dto.setEmployeeFirstName(late.getEmployee().getFirstName());
            dto.setEmployeeLastName(late.getEmployee().getLastName());
            dto.setEmployeeID(late.getEmployee().getId());
            dto.setPlaceId(late.getShift().getDepartment().getPlace().getId());
            dto.setPlaceName(late.getShift().getDepartment().getPlace().getName());
            dto.setShiftStartTime(late.getShift().getStartTime().plusSeconds(timeZoneMinutesOffset*60));
            dto.setShiftEndTime(late.getShift().getEndTime().plusSeconds(timeZoneMinutesOffset*60));
            Duration lateDuration = Duration.between(late.getShift().getStartTime(), late.getArrivedTime());
            dto.setLateMinutes((int) lateDuration.toMinutes());
            latesDTOList.add(dto);
        });
        return latesDTOList;
    }


}
