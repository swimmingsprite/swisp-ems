package com.swimmingsprite.ems.controller.employee;

import com.swimmingsprite.ems.dto.ActualDepartmentsDTO;
import com.swimmingsprite.ems.entity.person.PersonIdNameEntity;
import com.swimmingsprite.ems.service.employeeservice.ActualService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class ActualController {
    @Autowired
    ActualService service;

    @GetMapping("/actual/departments/{PlaceId}")
    public List<ActualDepartmentsDTO> getEmployeesByDepartment(
            @PathVariable("PlaceId") Integer placeId
    ) {
        return service.getEmployeesByDepartmentsAndPlace(placeId);
    }

    @GetMapping("/actual/employees/{PlaceId}")
    public List<PersonIdNameEntity> getAllEmployeesInDepartment(
            @PathVariable("PlaceId") Integer placeId
    ) {
        return service.getEmployeesList(placeId);
    }
}
