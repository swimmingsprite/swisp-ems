package com.swimmingsprite.ems.controller.employee;


import com.swimmingsprite.ems.dto.employee.AbsenceDTO;
import com.swimmingsprite.ems.service.employee.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class AbsenceController {
    @Autowired
    AbsenceService service;

    @GetMapping("/absence/all/{placeId}")
    public List<AbsenceDTO> getAllAbsencesByTimeRangeAndPlace(
            @NonNull @PathVariable String placeId,
            @RequestHeader("startTimestamp") long startTimestamp,
            @RequestHeader("endTimestamp") long endTimestamp
    ) {
        return service.getAllAbsencesByTimeRangeAndPlace(placeId,
                Instant.ofEpochMilli(startTimestamp),
                Instant.ofEpochMilli(endTimestamp));
    }

}
