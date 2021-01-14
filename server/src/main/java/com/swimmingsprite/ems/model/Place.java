package com.swimmingsprite.ems.model;

import javax.persistence.*;

@Entity
@Table(name = "place")
public class Place {
    @Id
    @GeneratedValue
    private String id;

    @Column(name = "place_name")
    private String name;

    @ManyToOne
    private Address address;




}
