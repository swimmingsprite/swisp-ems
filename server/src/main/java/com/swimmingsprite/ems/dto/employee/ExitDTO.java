package com.swimmingsprite.ems.dto.employee;

import com.swimmingsprite.ems.model.user.AvatarUserImpl;

import java.time.Instant;

public class ExitDTO {
    private Instant exitTime;
    private AvatarUserImpl employee;

    public ExitDTO(Instant exitTime, AvatarUserImpl employee) {
        this.exitTime = exitTime;
        this.employee = employee;
    }

    public Instant getExitTime() {
        return exitTime;
    }

    public void setExitTime(Instant exitTime) {
        this.exitTime = exitTime;
    }

    public AvatarUserImpl getEmployee() {
        return employee;
    }

    public void setEmployee(AvatarUserImpl employee) {
        this.employee = employee;
    }
}
