package com.swimmingsprite.ems.entity.attendance;

import com.swimmingsprite.ems.entity.Shift;
import com.swimmingsprite.ems.entity.user.User;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "current_late")
public class CurrentLate {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @OneToOne
    @JoinColumn(name = "shift_id")
    private Shift shift;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "employee_id")
    private User employee;

    public String getId() {
        return id;
    }

    public Shift getShift() {
        return shift;
    }

    public void setShift(Shift shift) {
        this.shift = shift;
    }

    public User getEmployee() {
        return employee;
    }

    public void setEmployee(User employee) {
        this.employee = employee;
    }
}
