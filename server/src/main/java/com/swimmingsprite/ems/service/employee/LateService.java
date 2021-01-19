package com.swimmingsprite.ems.service.employee;


import com.swimmingsprite.ems.dto.employee.LateDTO;
import com.swimmingsprite.ems.repository.employeerepository.LateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class LateService {
    @Autowired
    private LateRepository lateRepository;

    public List<LateDTO> getAllLatesByTimeRangeAndPlace(String placeId, long startTimestamp, long endTimestamp) {
        //authorization
        return lateRepository.getAllLatesByTimeRangeAndPlace(placeId, startTimestamp, endTimestamp);
    }
}
