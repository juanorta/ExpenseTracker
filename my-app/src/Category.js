import React, { Component } from 'react';
import AppNav from './AppNav';

class Category extends Component {
    state = { 
        isLoading : true,
        Categories : []
     }

     //as soon as you make this call spring boot endpoint
     async componentDidMount(){
        const response = await fetch ('/api/categories');
        
        const body = await response.json();
        //loading data
        this.setState({Categories : body, isLoading: false})
        
     }

    render() { 
        const {Categories, isLoading} = this.state;
        if(isLoading)
            return(<div>Loading...</div>)
            console.log("hey");
        
        return(
            
            <div>
                <AppNav/>
                <h2>Categories</h2>
                {
                    //get categories from endpoint, create 'category'
                    //Categories.map is result from endpoint
                    //for everything in Categories.map assign a div and an id
                    //display name as well
                    Categories.map(category => 
                        <div id = {category.id}>
                            {category.id}
                            {category.name}
                            
                        </div>
                        )
                }
            </div>
        )
            //return (  );
    }
}
 
export default Category;