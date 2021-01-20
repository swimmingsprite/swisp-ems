package com.swimmingsprite.ems.dto.shift;

import com.swimmingsprite.ems.model.Department;
import com.swimmingsprite.ems.model.user.AvatarUserImpl;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.util.Set;

public class ShiftDTO {
    private String id;
    private Set<AvatarUserImpl> employees;
    private String placeId;
    private String departmentId;
    private String departmentName;
    private Instant start;
    private Instant end;

    public ShiftDTO(String id,
                    Set<AvatarUserImpl> employees,
                    String placeId,
                    String departmentId,
                    String departmentName,
                    Instant startTime,
                    Instant endTime) {
        this.id = id;
        this.employees = employees;
        this.placeId = placeId;
        this.departmentId = departmentId;
        this.departmentName = departmentName;
        this.start = startTime;
        this.end = endTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Set<AvatarUserImpl> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<AvatarUserImpl> employees) {
        this.employees = employees;
    }

    public String getPlaceId() {
        return placeId;
    }

    public void setPlaceId(String placeId) {
        this.placeId = placeId;
    }

    public String getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(String departmentId) {
        this.departmentId = departmentId;
    }

    public Instant getStart() {
        return start;
    }

    public void setStart(Instant start) {
        this.start = start;
    }

    public Instant getEnd() {
        return end;
    }

    public void setEnd(Instant end) {
        this.end = end;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
}
