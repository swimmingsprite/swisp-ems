package com.swimmingsprite.ems.dto.employee;

import com.swimmingsprite.ems.model.user.AvatarUserImpl;

import java.time.Instant;

public class CurrentLateDTO {
    private Instant shiftStart;
    private String shiftId;
    private AvatarUserImpl employee;

    public CurrentLateDTO(Instant shiftStart, String shiftId, AvatarUserImpl employee) {
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

    public AvatarUserImpl getEmployee() {
        return employee;
    }

    public void setEmployee(AvatarUserImpl employee) {
        this.employee = employee;
    }
}
