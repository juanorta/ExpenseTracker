package com.example.juanexpense.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "goal")
public class Goal {
    @Id
    private Long id;

    private String goalDescription;

    private BigDecimal balance;

    private BigDecimal transaction;

    private BigDecimal monthlyPaymentAmount;

    private String paymentDate;

    @ManyToOne
    private User user;

    @OneToOne
    private Category category;

    @OneToOne
    private Expense expense;

}
