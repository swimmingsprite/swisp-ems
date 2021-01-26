package com.swimmingsprite.ems.model;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.lang.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.Email;

@Entity
@Table(name = "Address")
public class Address {
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;
    @NonNull
    private String name;
    @NonNull
    private String country;
    @NonNull
    private String zipCode;
    @NonNull
    private String province;
    @NonNull
    private String street;
    private String number;
    private String phone;
    @Email
    private String email;

    public Address() {
    }

    public Address(@NonNull String name,
                   @NonNull String country,
                   @NonNull String zipCode,
                   @NonNull String province,
                   @NonNull String street,
                   String number,
                   String phone,
                   @Email String email
                   ) {
        this.name = name;
        this.country = country;
        this.zipCode = zipCode;
        this.province = province;
        this.street = street;
        this.number = number;
        this.phone = phone;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
