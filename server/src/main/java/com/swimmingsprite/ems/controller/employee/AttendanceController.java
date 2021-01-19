package com.swimmingsprite.ems.controller.employee;

import com.swimmingsprite.ems.dto.AttendanceDTO;
import com.swimmingsprite.ems.service.employeeservice.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class AttendanceController {
    @Autowired
    AttendanceService service;

    @GetMapping("/attendances")
    public List<AttendanceDTO> attendancesToday(
            @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset,
            @PathVariable("placeId") int placeId
    ) {
        return service.attendancesToday(Optional.ofNullable(minutesOffset).orElse(0), placeId);
    }

    @GetMapping("/attendances/{placeId}/date/{date}")
    public List<AttendanceDTO> attendancesByDate(
            @PathVariable("date")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate localDate,
            @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset,
            @PathVariable("placeId") int placeId
            ) {
        return service.attendancesByDateAndPlace(localDate, Optional.ofNullable(minutesOffset).orElse(0), placeId);
    }

    @GetMapping("/attendances/{employeeId}")
    public List<AttendanceDTO> attendancesByEmployeeId(@PathVariable Integer employeeId,
                                                       @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset) {
        return service.attendancesByEmployeeId(employeeId, Optional.ofNullable(minutesOffset).orElse(0));
    }

    @GetMapping("/attendances/{employeeId}/date/{date}")
    public List<AttendanceDTO> attendancesByEmployeeIdAndDate(@PathVariable int employeeId,
                                                          @PathVariable("date")
                                                          @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate localDate,
                                                          @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset
    ) {
        return service.attendancesByEmployeeIdAndDate(employeeId, localDate, Optional.ofNullable(minutesOffset).orElse(0));
    }




}
