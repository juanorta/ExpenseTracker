package com.example.juanexpense.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
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
    private Category category;

    //connecting expense to user
    @ManyToOne
    private User user;


}
