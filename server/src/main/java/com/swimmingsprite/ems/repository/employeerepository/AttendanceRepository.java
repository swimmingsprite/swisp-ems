package com.swimmingsprite.ems.repository.employeerepository;

import com.swimmingsprite.ems.dto.employee.ArrivalDTO;
import com.swimmingsprite.ems.dto.employee.ExitDTO;
import com.swimmingsprite.ems.model.attendance.InOut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

@Repository
public interface AttendanceRepository extends JpaRepository<InOut, String> {

    /*@Query("select i from InOut i where (i.arrival >= ?1 and i.arrival <= ?2) or (i.exit >= ?1 and i.exit <= ?2) and i.terminal.place = ?3")
    List<InOut> findAllByDateAndPlace(Instant dayStartTimestamp, Instant dayEndTimestamp, int placeId);

    @Query("select i from InOut i where i.employee.id = ?1")
    List<InOut> findAllByEmployeeId(int id);

    @Query("select i from InOut i where ((i.arrival >= ?1 and i.arrival <= ?2) or (i.exit >= ?1 and i.exit <= ?2)) and i.employee.id = ?3")
    List<InOut> findAllByEmployeeIdAndDate(Instant dayStartTimestamp, Instant dayEndTimestamp, int id);

    @Query("select i from InOut i where i.arrival < ?1 and i.exit is null")
    List<InOut> findAllArrivalsWithoutExit(Instant currentInstant);
*/
    @Query("select new com.swimmingsprite.ems.dto.employee.ArrivalDTO(i.arrival, i.employee) " +
            "from  InOut i " +
            "where i.place.id = ?3 " +
            "and (i.arrival >= ?1 and i.arrival <= ?2) " +
            "order by i.arrival desc")
    List<ArrivalDTO> findAllArrivalsByTimeRangeAndPlace(long start, long end, String placeId);

    @Query("select new com.swimmingsprite.ems.dto.employee.ExitDTO(i.exit, i.employee) " +
            "from  InOut i " +
            "where i.place.id = ?3 " +
            "and (i.exit >= ?1 and i.exit <= ?2) " +
            "order by i.exit desc")
    List<ExitDTO> findAllExitsByTimeRangeAndPlace(long start, long end, String placeId);






}
