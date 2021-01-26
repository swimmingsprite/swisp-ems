package com.swimmingsprite.ems.repository.employeerepository;


import com.swimmingsprite.ems.dto.employee.LateDTO;
import com.swimmingsprite.ems.model.attendance.Late;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

@Repository
public interface LateRepository extends JpaRepository<Late, String> {

    /*@Query("select l from Late l where l.arrivedTime >= ?1 and l.arrivedTime <= ?2")
    List<Late> findAllByDate(Instant dayStartTimestamp, Instant dayEndTimestamp);

    @Query("select l from Late l where l.arrivedTime >= ?1 and l.arrivedTime <= ?2 and l.shift.department.place.id = ?3")
    List<Late> findAllByDateAndPlace(Instant dayStartTimestamp, Instant dayEndTimestamp, String placeId);

    @Query("select l from Late l where l.employee.id = ?1")
    List<Late> findAllByEmployeeId(String employeeId);

    @Query("select l from Late l where (l.arrivedTime >= ?1 and l.arrivedTime <= ?2) and l.employee.id = ?3")
    List<Late> findAllByEmployeeIdAndDate(Instant dayStartTimestamp, Instant dayEndTimestamp, String employeeId);*/

    @Query("select new com.swimmingsprite.ems.dto.employee.LateDTO(l.arrivedTime, l.shift.id, l.employee) " +
            "from  Late l " +
            "where l.shift.department.place.id = ?1 " +
            "and (l.arrivedTime >= ?2 and l.arrivedTime <= ?3) " +
            "order by l.arrivedTime desc")
    List<LateDTO> getAllLatesByTimeRangeAndPlace(String placeId, long startTimestamp, long endTimestamp);
}
