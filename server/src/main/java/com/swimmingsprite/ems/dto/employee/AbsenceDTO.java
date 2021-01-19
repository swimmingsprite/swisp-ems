package com.swimmingsprite.ems.dto.employee;

import com.swimmingsprite.ems.model.user.AvatarUserImpl;

import java.time.Instant;

public class AbsenceDTO {
    private AvatarUserImpl employee;
    private String shiftId;
    private Instant shiftStart;
    private Instant shiftEnd;

    public AbsenceDTO(Instant shiftStart, Instant shiftEnd, AvatarUserImpl employee, String shiftId) {
        this.employee = employee;
        this.shiftId = shiftId;
        this.shiftStart = shiftStart;
        this.shiftEnd = shiftEnd;
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

    public Instant getShiftStart() {
        return shiftStart;
    }

    public void setShiftStart(Instant shiftStart) {
        this.shiftStart = shiftStart;
    }

    public Instant getShiftEnd() {
        return shiftEnd;
    }

    public void setShiftEnd(Instant shiftEnd) {
        this.shiftEnd = shiftEnd;
    }
}
