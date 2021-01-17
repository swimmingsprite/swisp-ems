package com.swimmingsprite.ems.repository.employeerepository;

import com.swimmingsprite.ems.dto.LateDTO;
import com.swimmingsprite.ems.entity.Late;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface LateRepository extends JpaRepository<Late, Integer> {

    @Query("select l from Late l where l.arrivedTime >= ?1 and l.arrivedTime <= ?2")
    List<Late> findAllByDate(Instant dayStartTimestamp, Instant dayEndTimestamp);

    @Query("select l from Late l where l.arrivedTime >= ?1 and l.arrivedTime <= ?2 and l.shift.place.id = ?3")
    List<Late> findAllByDateAndPlace(Instant dayStartTimestamp, Instant dayEndTimestamp, int placeId);

    @Query("select l from Late l, ShiftEmployee s where (s.shift = l.shift and s.employee.id = ?1)")
    List<Late> findAllByEmployeeId(Integer employeeId);

    @Query("select l from Late l, ShiftEmployee s where (l.arrivedTime >= ?1 and l.arrivedTime <= ?2) and (s.shift = l.shift and s.employee.id = ?3)")
    List<Late> findAllByEmployeeIdAndDate(Instant dayStartTimestamp, Instant dayEndTimestamp, Integer employeeId);
}
