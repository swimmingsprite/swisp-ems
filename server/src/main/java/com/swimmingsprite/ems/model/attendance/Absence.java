package com.swimmingsprite.ems.model.attendance;

import com.swimmingsprite.ems.model.Shift;
import com.swimmingsprite.ems.model.user.AvatarUser;
import com.swimmingsprite.ems.model.user.AvatarUserImpl;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "absence")
public class Absence {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shift_id")
    private Shift shift;

    @ManyToOne(fetch = FetchType.LAZY)
    private AvatarUserImpl employee;

    public String getId() {
        return id;
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
