package com.swimmingsprite.ems.service.employee;


import com.swimmingsprite.ems.dto.employee.ArrivalDTO;
import com.swimmingsprite.ems.dto.employee.ExitDTO;
import com.swimmingsprite.ems.repository.employeerepository.AttendanceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceService {
    final AttendanceRepository attendanceRepository;

    public AttendanceService(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    public List<ExitDTO> findAllExitsByTimeRangeAndPlace(String placeId, long startTimestamp, long endTimestamp) {
        //authorization
        return attendanceRepository.findAllExitsByTimeRangeAndPlace(startTimestamp, endTimestamp, placeId);
    }

    public List<ArrivalDTO> findAllArrivalsByTimeRangeAndPlace(String placeId, long startTimestamp, long endTimestamp) {
        //authorization
        return attendanceRepository.findAllArrivalsByTimeRangeAndPlace(startTimestamp, endTimestamp, placeId);
    }




}
