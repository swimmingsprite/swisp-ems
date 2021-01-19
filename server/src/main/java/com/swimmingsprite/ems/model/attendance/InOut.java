package com.swimmingsprite.ems.model.attendance;

import com.swimmingsprite.ems.model.Place;
import com.swimmingsprite.ems.model.user.AvatarUserImpl;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.Instant;

@Entity
@Table(name = "in_out")
public class InOut {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @NotNull
    @Column(name = "arrival")
    private Instant arrival;

    @Column(name = "_exit")
    private Instant exit;

    @ManyToOne
    @Column(name = "place_id")
    private Place place;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id")
    private AvatarUserImpl employee;

    public InOut() {
    }

    public InOut(Instant arrival, Instant exit, AvatarUserImpl employee) {
        this.arrival = arrival;
        this.exit = exit;
        this.employee = employee;
    }

    public String getId() {
        return id;
    }

    public Instant getArrival() {
        return arrival;
    }

    public void setArrival(Instant arrival) {
        this.arrival = arrival;
    }

    public Instant getExit() {
        return exit;
    }

    public void setExit(Instant exit) {
        this.exit = exit;
    }

    public AvatarUserImpl getEmployee() {
        return employee;
    }

    public void setEmployee(AvatarUserImpl employee) {
        this.employee = employee;
    }
}
