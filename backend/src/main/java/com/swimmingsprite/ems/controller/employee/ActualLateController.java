package com.swimmingsprite.ems.controller.employee;


import com.swimmingsprite.ems.dto.employee.CurrentLateDTO;
import com.swimmingsprite.ems.service.employee.ActualService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class ActualLateController {
    private final ActualService actualService;

    public ActualLateController(ActualService actualService) {
        this.actualService = actualService;
    }

    @GetMapping("/actual/late/{placeId}")
    public List<CurrentLateDTO> getAllCurrentLatesByPlace(
            @PathVariable("placeId") String placeId
    ) {
        return actualService.getAllCurrentLatesByPlace(placeId);
    }

}
