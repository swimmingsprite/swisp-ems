package com.swimmingsprite.ems.repository.employeerepository;

import com.swimmingsprite.ems.dto.employee.CurrentLateDTO;
import com.swimmingsprite.ems.model.attendance.CurrentLate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CurrentLateRepository extends JpaRepository<CurrentLate, Integer> {
    @Query("select new com.swimmingsprite.ems.dto.employee.CurrentLateDTO(c.shift.startTime, c.shift.id, c.employee) " +
            "from  CurrentLate c " +
            "where c.shift.department.place.id = ?1 " +
            "order by c.shift.startTime desc")
    List<CurrentLateDTO> getAllCurrentLatesByPlace(String placeId);
}
