import React, { Component } from 'react';
import {Nav,Navbar, NavItem, NavLink, NavbarBrand, style} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

class AppNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Navbar style={{marginBottom:'2em'}}color="dark" dark expand="md" >
              <NavbarBrand href="/">Expense Tracker</NavbarBrand>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                        <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                        <NavLink href="/categories/">Categories</NavLink>
                  </NavItem>
                  <NavItem>
                        <NavLink href="/expenses/">Expenses</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        );
         
    }
}
 
export default AppNav;