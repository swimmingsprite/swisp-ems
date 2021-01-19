package com.swimmingsprite.ems.controller.employee;

import com.swimmingsprite.ems.dto.employee.ExitDTO;
import com.swimmingsprite.ems.service.employee.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class AttendanceController {
    @Autowired
    AttendanceService service;


    @GetMapping("/arrival/all/{placeId}")
    public List<ExitDTO> findAllExitsByTimeRangeAndPlace(
            @NotNull @PathVariable("placeId") String placeId,
            @RequestHeader("startTimestamp") @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) Instant startTimestamp,
            @RequestHeader("endTimestamp") @DateTimeFormat(iso = DateTimeFormat.ISO.TIME) Instant endTimestamp
    ) {
        System.out.println("start je: "+startTimestamp);
        System.out.println("end je: "+endTimestamp);
        return null;
        //return service.attendancesByEmployeeIdAndDate(employeeId, localDate, Optional.ofNullable(minutesOffset).orElse(0));
    }




}
