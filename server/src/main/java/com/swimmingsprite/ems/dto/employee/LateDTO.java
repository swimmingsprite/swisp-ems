package com.swimmingsprite.ems.dto.employee;

import com.swimmingsprite.ems.model.user.AvatarUserImpl;

import java.time.Instant;

public class LateDTO {
    private AvatarUserImpl employee;
    private String shiftId;
    private Instant arrivedTime;

    public LateDTO(Instant arrivedTime, String shiftId, AvatarUserImpl employee) {
        this.employee = employee;
        this.shiftId = shiftId;
        this.arrivedTime = arrivedTime;
    }

    public AvatarUserImpl getEmployee() {
        return employee;
    }

    public void setEmployee(AvatarUserImpl employee) {
        this.employee = employee;
    }

    public String getShiftId() {
        return shiftId;
    }

    public void setShiftId(String shiftId) {
        this.shiftId = shiftId;
    }

    public Instant getArrivedTime() {
        return arrivedTime;
    }

    public void setArrivedTime(Instant arrivedTime) {
        this.arrivedTime = arrivedTime;
    }
}
