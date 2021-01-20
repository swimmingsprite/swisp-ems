package com.swimmingsprite.ems.dto.shift;

import java.util.Set;

public class ShiftScheduleDTO {
    private long start;
    private long end;
    private String departmentId;
    private Set<String> shiftEmployeesIds;

    public ShiftScheduleDTO(long start, long end, String departmentId, Set<String> shiftEmployeesIds) {
        this.start = start;
        this.end = end;
        this.departmentId = departmentId;
        this.shiftEmployeesIds = shiftEmployeesIds;
    }

    public long getStart() {
        return start;
    }

    public void setStart(long start) {
        this.start = start;
    }

    public long getEnd() {
        return end;
    }

    public void setEnd(long end) {
        this.end = end;
    }

    public String getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(String departmentId) {
        this.departmentId = departmentId;
    }

    public Set<String> getShiftEmployeesIds() {
        return shiftEmployeesIds;
    }

    public void setShiftEmployeesIds(Set<String> shiftEmployeesIds) {
        this.shiftEmployeesIds = shiftEmployeesIds;
    }
}
