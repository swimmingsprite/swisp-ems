package com.swimmingsprite.ems.dto.employee;

import com.swimmingsprite.ems.model.user.User;

import java.time.Instant;

public class LateDTO {
    private User employee;
    private String shiftId;
    private Instant arrivedTime;

    public LateDTO(Instant arrivedTime, String shiftId, User employee) {
        this.employee = employee;
        this.shiftId = shiftId;
        this.arrivedTime = arrivedTime;
    }

    public User getEmployee() {
        return employee;
    }

    public void setEmployee(User employee) {
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
