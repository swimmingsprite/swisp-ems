package com.swimmingsprite.ems.controller.employee;


import com.swimmingsprite.ems.dto.employee.AbsenceDTO;
import com.swimmingsprite.ems.service.employee.AbsenceService;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class AbsenceController {
    final AbsenceService service;

    public AbsenceController(AbsenceService service) {
        this.service = service;
    }

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
