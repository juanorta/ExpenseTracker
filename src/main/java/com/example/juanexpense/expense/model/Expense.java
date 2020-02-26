package com.example.juanexpense.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "expense")
public class Expense {

    @Id
    private Long id;

    private BigDecimal paymentAmount;

    private Instant expenseDate;

    private String description;

    //connecting expense to category
    @ManyToOne


    //OnDelete deletes foreign key in Expense table while also deleting primary key in Category table
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Category category;

    //connecting expense to user
    @ManyToOne
    private User user;


}
