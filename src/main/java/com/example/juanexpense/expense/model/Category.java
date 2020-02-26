package com.example.juanexpense.expense.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.Set;

@Entity
@NoArgsConstructor
@Data //generates getters and setters
@Table(name = "category")
public class Category {

    @Id
    private Long id;

    @NonNull
    //travel, grocery, ...
    private String name;


}