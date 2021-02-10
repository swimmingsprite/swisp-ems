package com.swimmingsprite.ems.service.shift;

import com.swimmingsprite.ems.dto.shift.ShiftDTO;
import com.swimmingsprite.ems.dto.shift.ShiftScheduleDTO;
import com.swimmingsprite.ems.repository.shift.ShiftRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShiftService {
    final ShiftRepository shiftRepository;

    public ShiftService(ShiftRepository shiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    public List<ShiftDTO> getAllShiftsByTimeRangeAndDepartment(String departmentId, long startTimestamp, long endTimestamp) {
        //authorization
        return shiftRepository.getAllShiftsByTimeRangeAndDepartment(departmentId, startTimestamp, endTimestamp);
    }

    public void addAllShifts(List<ShiftScheduleDTO> schedules) {
        //authorization
        //users existence check
        //check time range
        //check shift collisions for every user
        //send to database
    }
}
