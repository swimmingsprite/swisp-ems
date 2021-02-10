package com.swimmingsprite.ems.controller.employee;

import com.swimmingsprite.ems.dto.employee.LateDTO;
import com.swimmingsprite.ems.service.employee.LateService;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class LateController {
    final LateService service;

    public LateController(LateService service) {
        this.service = service;
    }

    @GetMapping("/late/all/{placeId}")
    List<LateDTO> getAllLatesByTimeRangeAndPlace(
            @NotNull @PathVariable("placeId") String placeId,
            @RequestHeader("startTimestamp") long startTimestamp,
            @RequestHeader("endTimestamp") long endTimestamp
    ) {
        return service.getAllLatesByTimeRangeAndPlace(placeId, startTimestamp, endTimestamp);
    }





}

