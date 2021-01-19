package com.swimmingsprite.ems.controller.employee;

import com.swimmingsprite.ems.dto.employee.ArrivalDTO;
import com.swimmingsprite.ems.dto.employee.ExitDTO;
import com.swimmingsprite.ems.service.employee.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class AttendanceController {
    @Autowired
    AttendanceService service;


    @GetMapping("/exit/all/{placeId}")
    public List<ExitDTO> findAllExitsByTimeRangeAndPlace(
            @NotNull @PathVariable("placeId") String placeId,
            @RequestHeader("startTimestamp") long startTimestamp,
            @RequestHeader("endTimestamp") long endTimestamp
    ) {
        return service.findAllExitsByTimeRangeAndPlace(placeId, startTimestamp, endTimestamp);
    }

    @GetMapping("/arrival/all/{placeId}")
    public List<ArrivalDTO> findAllArrivalsByTimeRangeAndPlace(
            @NotNull @PathVariable("placeId") String placeId,
            @RequestHeader("startTimestamp") long startTimestamp,
            @RequestHeader("endTimestamp") long endTimestamp
    ) {
        return service.findAllArrivalsByTimeRangeAndPlace(placeId, startTimestamp, endTimestamp);
    }




}
