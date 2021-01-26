package com.swimmingsprite.ems.dto.employee;

import com.swimmingsprite.ems.model.user.User;
import com.swimmingsprite.ems.model.user.User;

import java.time.Instant;

public class ArrivalDTO {
    private Instant arrivalTime;
    private User employee;

    public ArrivalDTO(Instant arrivalTime, User employee) {
        this.arrivalTime = arrivalTime;
        this.employee = employee;
    }

    public Instant getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Instant arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public User getEmployee() {
        return employee;
    }

    public void setEmployee(User employee) {
        this.employee = employee;
    }

}
