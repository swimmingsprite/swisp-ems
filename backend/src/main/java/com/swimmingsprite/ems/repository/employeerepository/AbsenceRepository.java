package com.swimmingsprite.ems.repository.employeerepository;


import com.swimmingsprite.ems.dto.employee.AbsenceDTO;
import com.swimmingsprite.ems.entity.attendance.Absence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

@Repository
public interface AbsenceRepository extends JpaRepository<Absence, String> {

    @Query("select new com.swimmingsprite.ems.dto.employee.AbsenceDTO(a.shift.startTime, a.shift.endTime, a.shift.id) " +
            "from  Absence a " +
            "where a.shift.department.place.id = ?1 " +
            "and (a.shift.startTime >= ?2 and a.shift.startTime <= ?3) " +
            "order by a.shift.startTime desc")
    List<AbsenceDTO> getAllAbsencesByTimeRangeAndPlace(String placeId, Instant startTimestamp, Instant endTimestamp);





}
