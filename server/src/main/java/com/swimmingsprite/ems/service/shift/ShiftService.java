package com.swimmingsprite.ems.service.shift;

import com.swimmingsprite.ems.dto.shift.ShiftDTO;
import com.swimmingsprite.ems.repository.shift.ShiftRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShiftService {
    @Autowired
    ShiftRepository shiftRepository;

    List<ShiftDTO> getAllShiftsByTimeRangeAndDepartment(String departmentId, long startTimestamp, long endTimestamp) {
        //authorization
        return shiftRepository.getAllShiftsByTimeRangeAndDepartment(departmentId, startTimestamp, endTimestamp);
    }
}
