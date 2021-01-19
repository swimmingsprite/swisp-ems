package com.swimmingsprite.ems.controller.employee;

import com.swimmingsprite.ems.dto.AbsenceDTO;
import com.swimmingsprite.ems.service.employeeservice.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class AbsenceController {
    @Autowired
    AbsenceService service;

    @GetMapping("/absences/{placeId}")
    public List<AbsenceDTO> absencesToday(
            @PathVariable("placeId") int placeId,
            @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset) {
        return service.getAllAbsencesToday(Optional.ofNullable(minutesOffset).orElse(0), placeId);
    }

    @GetMapping("/absences/{placeId}/date/{date}")
    public List<AbsenceDTO> absencesByDate(
            @PathVariable("placeId") int placeId,
            @PathVariable("date")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate localDate,
            @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset
    ) {
        return service.getAllAbsencesByDate(localDate, Optional.ofNullable(minutesOffset).orElse(0), placeId);
    }

    @GetMapping("/absences/{employeeId}")
    public List<AbsenceDTO> absencesByEmployeeId(@PathVariable Integer employeeId,
                                                       @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset) {
        return service.getAllAbsencesByEmployee(employeeId, Optional.ofNullable(minutesOffset).orElse(0));
    }

    @GetMapping("/absences/{employeeId}/date/{date}")
    public List<AbsenceDTO> absencesByEmployeeIdAndDate(@PathVariable int employeeId,
                                                              @PathVariable("date")
                                                              @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate localDate,
                                                              @RequestParam(value = "minutesOffset", required = false) Integer minutesOffset
    ) {
        return service.getAllAbsencesByEmployeeAndDate(employeeId, localDate, Optional.ofNullable(minutesOffset).orElse(0));
    }

}
