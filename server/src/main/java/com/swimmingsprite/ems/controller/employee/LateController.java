package com.swimmingsprite.ems.controller.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class LateController {
    @Autowired
    LateService service;

    @GetMapping("/lates/{placeId}")
    public List<LateDTO> getAllLatesToday(
            @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset,
            @PathVariable("placeId") int placeId
    ) {
        return service.getAllLatesToday(placeId, Optional.ofNullable(minutesOffset).orElse(0));
    }

    @GetMapping("/lates/{placeId}/date/{date}")
    public List<LateDTO> getAllLatesByDate(
            @PathVariable("placeId") int placeId,
            @PathVariable("date")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate localDate,
            @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset) {
        return service.getAllLatesByDate(localDate, Optional.ofNullable(minutesOffset).orElse(0), placeId);
    }

    @GetMapping("/lates/{employeeId}")
    public List<LateDTO> getAllLatesByEmployee(@PathVariable Integer employeeId,
                                               @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset) {
        return service.getAllLatesByEmployee(employeeId, Optional.ofNullable(minutesOffset).orElse(0));
    }

    @GetMapping("/lates/{employeeId}/date/{date}")
    public List<LateDTO> getAllLatesByEmployeeAndDate(@PathVariable Integer employeeId,
                                                      @PathVariable("date")
                                                      @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate localDate,
                                                      @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset) {
        return service.getAllLatesByEmployeeAndDate(employeeId, localDate, Optional.ofNullable(minutesOffset).orElse(0));
    }



}

