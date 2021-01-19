package com.swimmingsprite.ems.controller.employee;


import com.swimmingsprite.ems.dto.employee.CurrentLateDTO;
import com.swimmingsprite.ems.service.employee.ActualService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class ActualLateController {
    @Autowired
    private ActualService actualService;

    @GetMapping("/actual/lates/{placeId}")
    public List<CurrentLateDTO> getAllCurrentLatesByPlace(
            @PathVariable("placeId") String placeId
    ) {
        return actualService.getAllCurrentLatesByPlace(placeId);
    }

}
