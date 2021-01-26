package com.swimmingsprite.ems.model;

import com.swimmingsprite.ems.model.user.User;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.util.Set;

@Entity
@Table(name = "shift")
public class Shift {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(name = "shift_employee", joinColumns = {
            @JoinColumn(name = "shift_id")
    }, inverseJoinColumns = {
            @JoinColumn(name = "employee_id")
    })
    @Size(min = 1)
    private Set<User> shiftEmployees;

    @NotNull
    @OneToOne
    @JoinColumn(name = "department_id")
    private Department department;

    @NotNull
    @Column(name = "start_time")
    private Instant startTime;

    @NotNull
    @Column(name = "end_time")
    private Instant endTime;

    public String getId() {
        return id;
    }

    public @Size(min = 1) Set<User> getShiftEmployees() {
        return shiftEmployees;
    }

    public void setShiftEmployees(@Size(min = 1) Set<User> shiftEmployees) {
        this.shiftEmployees = shiftEmployees;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Instant getStartTime() {
        return startTime;
    }

    public void setStartTime(Instant startTime) {
        this.startTime = startTime;
    }

    public Instant getEndTime() {
        return endTime;
    }

    public void setEndTime(Instant endTime) {
        this.endTime = endTime;
    }
}
