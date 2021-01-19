package com.swimmingsprite.ems.service.employee;


import com.swimmingsprite.ems.repository.employeerepository.AttendanceRepository;
import com.swimmingsprite.ems.repository.employeerepository.CurrentLateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ActualService {
    @Autowired
    private AttendanceRepository attendanceRepository;
    @Autowired
    private CurrentLateRepository currentLateRepository;

   /* public List<ActualDepartmentsDTO> getEmployeesByDepartmentsAndPlace(Integer placeId) {
        //if (!placeRepository.existsById(placeId)) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Place with id "+placeId+" not found!");

        throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED, "Shift scheduling is off.");
    }


    public List<PersonIdNameEntity> getEmployeesList(Integer placeId) {

    }

    public List<CurrentLateDTO> getAllCurrentLatesByPlace(Integer placeId, int timeZoneMinutesOffset) {

    }*/
}
