package com.swimmingsprite.ems.repository.employeerepository;


import com.swimmingsprite.ems.dto.employee.AbsenceDTO;
import com.swimmingsprite.ems.model.attendance.Absence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

@Repository
public interface AbsenceRepository extends JpaRepository<Absence, Integer> {
   /* @Query("select a from Absence a where a.shift.endTime >= ?1 and a.shift.endTime <= ?2")
    List<Absence> findAllByDate(Instant dayStartTimestamp, Instant dayEndTimestamp);

    @Query("select a from Absence a " +
            "where a.shift.endTime >= ?1 " +
            "and a.shift.endTime <= ?2 " +
            "and a.shift.department.place.id = ?3")
    List<Absence> findAllByDateAndPlace(Instant dayStartTimestamp, Instant dayEndTimestamp, String placeId);

    // TODO: 17. 1. 2021 repositories check
    @Query("select a from Absence a where (a.employee.user.id = ?1)")
    List<Absence> findAllByEmployeeId(String employeeId);

    @Query("select a from Absence a " +
            "where (a.shift.endTime >= ?1 " +
            "and a.shift.endTime <= ?2) " +
            "and a.employee.id = ?3")
    List<Absence> findAllByEmployeeIdAndDate(Instant dayStartTimestamp, Instant dayEndTimestamp, String employeeId);
*/
    @Query("select new com.swimmingsprite.ems.dto.employee.AbsenceDTO(a.shift.startTime, a.shift.endTime, a.employee, a.shift.id) " +
            "from  Absence a " +
            "where a.shift.department.place.id = ?1 " +
            "and (a.shift.startTime >= ?2 and a.shift.startTime <= ?3) " +
            "order by a.shift.startTime desc")
    List<AbsenceDTO> getAllAbsencesByTimeRangeAndPlace(String placeId, long startTimestamp, long endTimestamp);
}
