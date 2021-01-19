package com.swimmingsprite.ems.service.employee;

import com.swimmingsprite.ems.dto.AttendanceDTO;
import com.swimmingsprite.ems.entity.InOut;
import com.swimmingsprite.ems.repository.employeerepository.AttendanceRepository;
import com.swimmingsprite.ems.repository.entityrepository.PlaceRepository;
import com.swimmingsprite.ems.util.InstantProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class AttendanceService {


    public List<AttendanceDTO> attendancesByDateAndPlace() {

    }

    public List<AttendanceDTO> attendancesByEmployeeId() {

    }

    public List<AttendanceDTO> attendancesByEmployeeIdAndDate() {

    }



}
