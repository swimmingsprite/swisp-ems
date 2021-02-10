package com.swimmingsprite.ems.service.employee;


import com.swimmingsprite.ems.dto.employee.ArrivalDTO;
import com.swimmingsprite.ems.dto.employee.CurrentLateDTO;
import com.swimmingsprite.ems.repository.employeerepository.AttendanceRepository;
import com.swimmingsprite.ems.repository.employeerepository.CurrentLateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActualService {
    private final AttendanceRepository attendanceRepository;
    private final CurrentLateRepository currentLateRepository;

    public ActualService(AttendanceRepository attendanceRepository, CurrentLateRepository currentLateRepository) {
        this.attendanceRepository = attendanceRepository;
        this.currentLateRepository = currentLateRepository;
    }

    public List<CurrentLateDTO> getAllCurrentLatesByPlace(String placeId) {
        //authorization
        return currentLateRepository.getAllCurrentLatesByPlace(placeId);
    }

    public List<ArrivalDTO> getAllCurrentPresentByPlace(String placeId) {
        //authorization
        return attendanceRepository.getAllCurrentPresentByPlace(placeId);
    }
}
