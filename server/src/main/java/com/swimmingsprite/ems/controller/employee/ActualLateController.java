package com.swimmingsprite.ems.controller.employee;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class ActualLateController {
    /*@Autowired
    private ActualService actualService;

    @GetMapping("/actual/lates/{PlaceId}")
    public List<CurrentLateDTO> getAllCurrentLatesByPlace(
            @PathVariable("PlaceId") int placeId,
            @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset
            ) {
        return actualService.getAllCurrentLatesByPlace(placeId, Optional.ofNullable(minutesOffset).orElse(0));
    }*/

}
