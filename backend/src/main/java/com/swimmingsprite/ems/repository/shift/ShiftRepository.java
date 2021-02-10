package com.swimmingsprite.ems.repository.shift;

import com.swimmingsprite.ems.dto.shift.ShiftDTO;
import com.swimmingsprite.ems.entity.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShiftRepository extends JpaRepository<Shift, String> {

    @Query("select new com.swimmingsprite.ems.dto.shift.ShiftDTO(" +
            "s.id , s.shiftEmployees, s.department.place.id, s.department.id, s.department.name, s.startTime, s.endTime ) " +
            "from Shift s " +
            "where s.department.id = ?1 " +
            "and (s.startTime >= ?2 and s.startTime <= ?3) " +
            "or (s.endTime >= ?2 and s.endTime <= ?3) " +
            "order by s.startTime asc")
    List<ShiftDTO> getAllShiftsByTimeRangeAndDepartment(String departmentId, long startTimestamp, long endTimestamp);










}
