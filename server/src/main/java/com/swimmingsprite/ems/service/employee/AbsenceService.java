package com.swimmingsprite.ems.service.employee;

import com.swimmingsprite.ems.dto.employee.AbsenceDTO;
import com.swimmingsprite.ems.repository.employeerepository.AbsenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AbsenceService {
    @Autowired
    private AbsenceRepository absenceRepository;

    public List<AbsenceDTO> getAllAbsencesByTimeRangeAndPlace(String placeId, long startTimestamp, long endTimestamp) {
        //authorization
        return absenceRepository.getAllAbsencesByTimeRangeAndPlace(placeId, startTimestamp, endTimestamp);
    }
}
