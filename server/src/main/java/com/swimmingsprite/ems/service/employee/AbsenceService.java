package com.swimmingsprite.ems.service.employee;

import com.swimmingsprite.ems.dto.employee.AbsenceDTO;
import com.swimmingsprite.ems.repository.employeerepository.AbsenceRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class AbsenceService {
    private final AbsenceRepository absenceRepository;

    public AbsenceService(AbsenceRepository absenceRepository) {
        this.absenceRepository = absenceRepository;
    }

    public List<AbsenceDTO> getAllAbsencesByTimeRangeAndPlace(String placeId, Instant startTimestamp, Instant endTimestamp) {
        //authorization
        return absenceRepository.getAllAbsencesByTimeRangeAndPlace(placeId, startTimestamp, endTimestamp);
    }
}
