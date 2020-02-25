package com.example.juanexpense.expense.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

//automatically creates table for user
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name="user")
public class User {

    @Id
    private Long id;

    private String name;


    private String email;



}
