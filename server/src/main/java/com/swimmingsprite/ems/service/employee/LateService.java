package com.swimmingsprite.ems.service.employee;

import com.swimmingsprite.ems.dto.LateDTO;
import com.swimmingsprite.ems.entity.Late;
import com.swimmingsprite.ems.repository.employeerepository.LateRepository;
import com.swimmingsprite.ems.repository.entityrepository.PlaceRepository;
import com.swimmingsprite.ems.util.InstantProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.Duration;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class LateService {
    @Autowired
    private LateRepository lateRepository;


    public List<LateDTO> getAllLatesByDate(LocalDate localDate, Integer minutesOffset, int placeId) {

    }

    public List<LateDTO> getAllLatesByEmployee(Integer employeeId, Integer minutesOffset) {

    }

    public List<LateDTO> getAllLatesByEmployeeAndDate(Integer employeeId, LocalDate localDate, Integer minutesOffset) {

    }




}
