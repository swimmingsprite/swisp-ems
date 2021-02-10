package com.swimmingsprite.ems.controller.shift;

import com.swimmingsprite.ems.dto.shift.ShiftDTO;
import com.swimmingsprite.ems.dto.shift.ShiftScheduleDTO;
import com.swimmingsprite.ems.service.shift.ShiftService;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/shift")
public class ShiftController {
    final ShiftService service;

    public ShiftController(ShiftService service) {
        this.service = service;
    }

    @GetMapping("/{departmentId}")
    public List<ShiftDTO> getAllShiftsByTimeRangeAndDepartment(
            @NotNull @PathVariable("departmentId") String departmentId,
            @RequestHeader("startTimestamp") long startTimestamp,
            @RequestHeader("endTimestamp") long endTimestamp) {
        return service.getAllShiftsByTimeRangeAndDepartment(departmentId, startTimestamp, endTimestamp);
    }

    @PostMapping
    void addAllShifts(@RequestBody List<ShiftScheduleDTO> schedules) {
        service.addAllShifts(schedules);
    }



}
