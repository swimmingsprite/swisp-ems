package com.swimmingsprite.ems.dto.employee;

import com.swimmingsprite.ems.model.user.AvatarUserImpl;

import java.time.Instant;

public class ArrivalDTO {
    private Instant arrivalTime;
    private AvatarUserImpl employee;

    public ArrivalDTO(Instant arrivalTime, AvatarUserImpl employee) {
        this.arrivalTime = arrivalTime;
        this.employee = employee;
    }

    public Instant getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Instant arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public AvatarUserImpl getEmployee() {
        return employee;
    }

    public void setEmployee(AvatarUserImpl employee) {
        this.employee = employee;
    }

}
