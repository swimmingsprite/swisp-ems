package com.swimmingsprite.ems.service.employee;


import com.swimmingsprite.ems.dto.employee.ArrivalDTO;
import com.swimmingsprite.ems.dto.employee.CurrentLateDTO;
import com.swimmingsprite.ems.model.attendance.CurrentLate;
import com.swimmingsprite.ems.repository.employeerepository.AttendanceRepository;
import com.swimmingsprite.ems.repository.employeerepository.CurrentLateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActualService {
    @Autowired
    private AttendanceRepository attendanceRepository;
    @Autowired
    private CurrentLateRepository currentLateRepository;

    public List<CurrentLateDTO> getAllCurrentLatesByPlace(String placeId) {
        //authorization
        return currentLateRepository.getAllCurrentLatesByPlace(placeId);
    }

    public List<ArrivalDTO> getAllCurrentPresentByPlace(String placeId) {
        //authorization
        return attendanceRepository.getAllCurrentPresentByPlace(placeId);
    }
}
