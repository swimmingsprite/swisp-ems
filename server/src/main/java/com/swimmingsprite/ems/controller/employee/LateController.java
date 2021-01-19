package com.swimmingsprite.ems.controller.employee;

import com.swimmingsprite.ems.dto.employee.LateDTO;
import com.swimmingsprite.ems.service.employee.LateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class LateController {
    @Autowired
    LateService service;

    @GetMapping("/late/all/{placeId}")
    List<LateDTO> getAllLatesByTimeRangeAndPlace(
            @NotNull @PathVariable("placeId") String placeId,
            @RequestHeader("startTimestamp") long startTimestamp,
            @RequestHeader("endTimestamp") long endTimestamp
    ) {
        return service.getAllLatesByTimeRangeAndPlace(placeId, startTimestamp, endTimestamp);
    }





}

