import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { Table, Container, FormGroup, Button, Form, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';

class Expenses extends Component {

    emptyItem = {
        id: '103',
        expenseDate : new Date(),
        description: '',
        location: '',
        categories : [1,'Travel']
    }

    //props is something you pass to component
    constructor(props){
        //initialize component to use it
        super(props)

        this.state = { 
            date: new Date(),
            isLoading : false,
            Expenses : [],
            Categories: [],
            item : this.emptyItem 
         }

        
    }


    // state = { 
    //     date: new Date(),
    //     isLoading : true,
    //     Expenses : [],
    //     Categories: [],
    //     item : this.emptyItem 
    //  }
  

    //takes in expense.id from delete button
    //calls/connects to api endpoint then deletes record in database
     async remove(id){
         await fetch(`/api/expenses/${id}`, {
            method:'DELETE',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
             }
            
        //deletes record from screen then updates it with new list that holds expenses that do not match expense.id
         }).then(()=>{
            let updatedExpenses = [...this.state.Expenses].filter(i => i.id !== id);
            this.setState({Expenses : updatedExpenses});
         });
     }

     async componentDidMount(){
         const response = await fetch('/api/categories');
         const body = await response.json();
         this.setState({Categories : body, isLoading: false});

         const responseExp = await fetch('/api/expenses');
         const bodyExp = await responseExp.json();
         this.setState({Expenses : bodyExp, isLoading: false});
     }

    render() { 
        
        const title = <h3>Add Expense</h3>;
        const{Categories} = this.state;
        const {Expenses, isLoading} = this.state;

        if(isLoading)
            return(<div>Loading...</div>)

        let optionList = 
            Categories.map(category=>
                <option id={category.id}>
                    {category.name}
                </option>
            )
            
            //for every expense in Expenses array, do the following things over and over
            let rows = 
                Expenses.map(expense => 
                    <tr>
                        <td>{expense.paymentAmount}</td>
                        <td>{expense.description}</td>
                        <td>{expense.location}</td>
                        <td>{expense.expenseDate}</td>
                        <td>{expense.category.name}</td>
                        <td><Button size="sm" color="danger" onClick={()=> this.remove(expense.id)}>Delete</Button></td>
                    </tr>
                    )
             
        return ( 
        <div>
            <AppNav/>
            <Container>
                {title}
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    {/* when user types something in box, call handlChange method */}
                    <Input type="text" name="title" id="title"
                        onChange={this.handleChange} autoComplete="name" />
                
                </FormGroup>

                <FormGroup>
                    <Label for="category">Category</Label>
                    <select>
                         {optionList}
                    </select>
                    
                
                    <Input type="text" name="category" id="category"
                        onChange={this.handleChange} />
                </FormGroup>


                <FormGroup>
                    <Label for="city">Date</Label>
                    <DatePicker selected={this.state.date} onChange={this.handleChange} />
                </FormGroup>

                <div className="row">
                    <FormGroup className="col-md-8 mb-3">
                        <Label for="location">Location</Label>
                        <Input type="text" name="location" id="location"
                            onChange={this.handleChange} />
                    </FormGroup>
                </div>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/categories">Cancel</Button>
                </FormGroup>
              </Form>  
            </Container>

            {''}
            <Container>
                <h3>Expense List</h3>
                <Table className='mt-4'>
                <thead>
                    <tr>
                        <th width="10%">Amount</th>
                        <th width="20%">Description</th>
                        <th width="10%">Location</th>
                        <th width="20%">Date</th>
                        <th> Category</th>
                        <th width="10%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </Table>
            </Container>

        </div>
         );
    }
}
 
export default Expenses;