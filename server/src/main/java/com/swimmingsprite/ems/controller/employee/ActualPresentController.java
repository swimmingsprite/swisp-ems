package com.swimmingsprite.ems.controller.employee;


import com.swimmingsprite.ems.dto.employee.ArrivalDTO;
import com.swimmingsprite.ems.service.employee.ActualService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class ActualPresentController {
    final ActualService service;

    public ActualPresentController(ActualService service) {
        this.service = service;
    }

    @GetMapping("/actual/present/{placeId}")
    public List<ArrivalDTO> getAllCurrentPresentByPlace(
            @PathVariable("placeId") String placeId
    ) {
        return service.getAllCurrentPresentByPlace(placeId);
    }

}
