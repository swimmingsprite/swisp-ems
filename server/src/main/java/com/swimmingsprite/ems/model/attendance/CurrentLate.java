package com.swimmingsprite.ems.model.attendance;

import com.swimmingsprite.ems.model.Shift;
import com.swimmingsprite.ems.model.user.AvatarUser;
import com.swimmingsprite.ems.model.user.AvatarUserImpl;

import javax.persistence.*;

@Entity
@Table(name = "current_late")
public class CurrentLate {
    @Id
    private int id;

    @OneToOne
    @JoinColumn(name = "shift_id")
    private Shift shift;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "employee_id")
    private AvatarUserImpl employee;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Shift getShift() {
        return shift;
    }

    public void setShift(Shift shift) {
        this.shift = shift;
    }

    public AvatarUser getEmployee() {
        return employee;
    }

    public void setEmployee(AvatarUserImpl employee) {
        this.employee = employee;
    }
}
