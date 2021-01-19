package com.swimmingsprite.ems.repository.employeerepository;

import com.swimmingsprite.ems.model.attendance.CurrentLate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CurrentLateRepository extends JpaRepository<CurrentLate, Integer> {
    @Query("select c from CurrentLate c where c.shift.department.place.id = ?1")
    List<CurrentLate> getAllCurrentLatesByPlace(String placeId);
}
