package com.swimmingsprite.ems.dto.employee;

import com.swimmingsprite.ems.entity.user.User;

import java.time.Instant;

public class CurrentLateDTO {
    private Instant shiftStart;
    private String shiftId;
    private User employee;

    public CurrentLateDTO(Instant shiftStart, String shiftId, User employee) {
        this.shiftStart = shiftStart;
        this.shiftId = shiftId;
        this.employee = employee;
    }

    public Instant getShiftStart() {
        return shiftStart;
    }

    public void setShiftStart(Instant shiftStart) {
        this.shiftStart = shiftStart;
    }

    public String getShiftId() {
        return shiftId;
    }

    public void setShiftId(String shiftId) {
        this.shiftId = shiftId;
    }

    public User getEmployee() {
        return employee;
    }

    public void setEmployee(User employee) {
        this.employee = employee;
    }
}
