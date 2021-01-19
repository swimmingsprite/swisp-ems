package com.swimmingsprite.ems.model.attendance;

import com.swimmingsprite.ems.model.Shift;
import com.swimmingsprite.ems.model.user.AvatarUser;
import com.swimmingsprite.ems.model.user.AvatarUserImpl;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "late")
public class Late {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int Id;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "shift_id")
    private Shift shift;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id")
    private AvatarUserImpl employee;

    @Column(name = "arrived_time")
    private Instant arrivedTime;

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public Shift getShift() {
        return shift;
    }

    public void setShift(Shift shift) {
        this.shift = shift;
    }

    public Instant getArrivedTime() {
        return arrivedTime;
    }

    public void setArrivedTime(Instant arrivedTime) {
        this.arrivedTime = arrivedTime;
    }

    public AvatarUser getEmployee() {
        return employee;
    }

    public void setEmployee(AvatarUserImpl employee) {
        this.employee = employee;
    }
}
