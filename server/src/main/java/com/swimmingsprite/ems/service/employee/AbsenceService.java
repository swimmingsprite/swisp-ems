package com.swimmingsprite.ems.service.employee;

import com.swimmingsprite.ems.dto.AbsenceDTO;
import com.swimmingsprite.ems.entity.Absence;
import com.swimmingsprite.ems.repository.employeerepository.AbsenceRepository;
import com.swimmingsprite.ems.repository.entityrepository.PlaceRepository;
import com.swimmingsprite.ems.util.InstantProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class AbsenceService {
    @Autowired
    private AbsenceRepository absenceRepository;

    @Autowired
    PlaceRepository placeRepository;

    public List<AbsenceDTO> getAllAbsencesToday(Integer minutesOffset, int placeId) {
        return getAllAbsencesByDate(LocalDate.now(), minutesOffset, placeId);
    }

    public List<AbsenceDTO> getAllAbsencesByDate(LocalDate localDate, Integer minutesOffset, int placeId) {


    }

    public List<AbsenceDTO> getAllAbsencesByEmployee(Integer employeeId, Integer minutesOffset) {

    }

    public List<AbsenceDTO> getAllAbsencesByEmployeeAndDate(Integer employeeId, LocalDate localDate, Integer minutesOffset) {

    }

}
