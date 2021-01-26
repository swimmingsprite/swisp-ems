package com.swimmingsprite.ems.dto.employee;

import com.swimmingsprite.ems.model.user.User;

import java.time.Instant;

public class ExitDTO {
    private Instant exitTime;
    private User employee;

    public ExitDTO(Instant exitTime, User employee) {
        this.exitTime = exitTime;
        this.employee = employee;
    }

    public Instant getExitTime() {
        return exitTime;
    }

    public void setExitTime(Instant exitTime) {
        this.exitTime = exitTime;
    }

    public User getEmployee() {
        return employee;
    }

    public void setEmployee(User employee) {
        this.employee = employee;
    }
}
