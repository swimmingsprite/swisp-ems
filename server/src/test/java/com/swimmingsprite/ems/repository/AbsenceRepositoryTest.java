package com.swimmingsprite.ems.repository;

import com.swimmingsprite.ems.dto.employee.AbsenceDTO;
import com.swimmingsprite.ems.model.Address;
import com.swimmingsprite.ems.model.Department;
import com.swimmingsprite.ems.model.Place;
import com.swimmingsprite.ems.model.Shift;
import com.swimmingsprite.ems.model.attendance.Absence;
import com.swimmingsprite.ems.model.user.AvatarUserImpl;
import com.swimmingsprite.ems.model.user.UserImpl;
import com.swimmingsprite.ems.repository.employeerepository.AbsenceRepository;
import org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class AbsenceRepositoryTest {


    @Test
    @Transactional
    void testGetAllAbsencesByTimeRangeAndPlace(@Autowired AbsenceRepository repository,  @Autowired EntityManager entityManager) {

        Place place = new Place();
        entityManager.persist(place);
        Department department = new Department();
        department.setPlace(place);
        entityManager.persist(department);
        Shift shift = new Shift();
        shift.setDepartment(department);
        Instant now = Instant.now();
        shift.setStartTime(now);
        shift.setEndTime(now.plus(12, ChronoUnit.HOURS));
        entityManager.persist(shift);
        Absence absence = new Absence();
        absence.setShift(shift);

        Absence abs = repository.save(absence);

        System.out.println("absence place id: "+absence.getShift().getDepartment().getPlace().getId());
        System.out.println("abs place id: "+abs.getShift().getDepartment().getPlace().getId());
        System.out.println("shift start time: "+shift.getStartTime());
//        System.out.println("new shift start time: "+newShift.getStartTime());

//        List<Absence> absences = repository.findById()

        List<AbsenceDTO> absenceDTOS = repository.getAllAbsencesByTimeRangeAndPlace(
                absence.getShift().getDepartment().getPlace().getId(),
                now.minusSeconds(30000),
                now.plus(13, ChronoUnit.HOURS)
        );
//        assertEquals(1,absenceDTOS.size(), "Existuje viac ako jeden prvok." );

        List<Absence> absenceDTOS2 = repository.findAll();
        System.out.println("Ahoj.");
        assertEquals(1,absenceDTOS2.size(), "Existuje viac ako jeden prvok." );
        assertEquals(abs.getId(), absenceDTOS2.get(0).getId(), "Id sa nerovnaju");

        System.out.println("id: "+absenceDTOS2.get(0).getId()
                +" start: "+absenceDTOS2.get(0).getShift().getStartTime()
                +" end: "+absenceDTOS2.get(0).getShift().getEndTime()
        );


        Absence aa = absenceDTOS2.get(0);
        System.out.println("ID: "+absence.getShift().getDepartment().getPlace().getId());
        System.out.println("ID: "+aa.getShift().getDepartment().getPlace().getId());

        System.out.println("l: "+absenceDTOS.size());



    }

}
