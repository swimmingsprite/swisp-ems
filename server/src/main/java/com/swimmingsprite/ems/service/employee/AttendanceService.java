package com.swimmingsprite.ems.service.employee;

import com.swimmingsprite.ems.dto.AttendanceDTO;
import com.swimmingsprite.ems.entity.InOut;
import com.swimmingsprite.ems.repository.employeerepository.AttendanceRepository;
import com.swimmingsprite.ems.repository.entityrepository.PlaceRepository;
import com.swimmingsprite.ems.util.InstantProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class AttendanceService {
    AttendanceRepository attendanceRepository;
    PlaceRepository placeRepository;

    @Autowired
    public void setRepository(AttendanceRepository attendanceRepository, PlaceRepository placeRepository) {
        this.attendanceRepository = attendanceRepository;
        this.placeRepository = placeRepository;
    }

    public List<AttendanceDTO> attendancesToday(int timeZoneMinutesOffset, int placeId) {
        return attendancesByDateAndPlace(LocalDate.now(), timeZoneMinutesOffset, placeId);
    }

    public List<AttendanceDTO> attendancesByDateAndPlace(LocalDate localDate, int timeZoneMinutesOffset, int placeId) {
        InstantProvider.checkMinutesOffset(timeZoneMinutesOffset);
        if (!placeRepository.existsById(placeId)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Place with id "+placeId+" not found!");

        List<InOut> inOuts = attendanceRepository.findAllByDateAndPlace(
                InstantProvider.startByDate(localDate, timeZoneMinutesOffset),
                InstantProvider.endByDate(localDate, timeZoneMinutesOffset),
                placeId
        );

        return inoutsToDTO(inOuts, timeZoneMinutesOffset);
    }

    public List<AttendanceDTO> attendancesByEmployeeId(Integer employeeId, int timeZoneMinutesOffset) {
        InstantProvider.checkMinutesOffset(timeZoneMinutesOffset);
        List<InOut> inOuts = attendanceRepository.findAllByEmployeeId(employeeId);
        return inoutsToDTO(inOuts, timeZoneMinutesOffset);
    }

    public List<AttendanceDTO> attendancesByEmployeeIdAndDate(int employeeId, LocalDate localDate, int timeZoneMinutesOffset
    ) {
        InstantProvider.checkMinutesOffset(timeZoneMinutesOffset);

        List<InOut> inOuts = attendanceRepository.findAllByEmployeeIdAndDate(
                InstantProvider.startByDate(localDate, timeZoneMinutesOffset),
                InstantProvider.endByDate(localDate, timeZoneMinutesOffset),
                employeeId);
        return inoutsToDTO(inOuts, timeZoneMinutesOffset);
    }

    private List<AttendanceDTO> inoutsToDTO(List<InOut> inOuts, int timeZoneMinutesOffset) {
        List<AttendanceDTO> attendanceDTOList = new ArrayList<>();
        if (inOuts == null || inOuts.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No attendances found!");

        inOuts.forEach(inOut -> {
            AttendanceDTO dto = new AttendanceDTO();
            dto.setArrival(inOut.getArrival().plusSeconds(timeZoneMinutesOffset*60));
            if (inOut.getExit() != null) dto.setExit(inOut.getExit().plusSeconds(timeZoneMinutesOffset*60));
            dto.setEmployeeId(inOut.getEmployee().getId());
            dto.setFirstName(inOut.getEmployee().getFirstName());
            dto.setLastName(inOut.getEmployee().getLastName());
            attendanceDTOList.add(dto);
        });
        return attendanceDTOList;
    }

    // TODO: 27. 7. 2020 review cascade types, entity controllers add and reviews, cascade types info
    //post
    //entity controllers post, get, put, delete



}
