import React, { Component } from 'react';

import Countries from './countries';
import Animals from './Animal';
import Food from './Food';

import '../styles/Input.css';

export class Input extends Component {

 constructor(props) {
     super(props)
 
     this.state = {
          CountryName: Countries,
          AnimalName: Animals,
          FoodName:Food,
          country_flag: true,
          animal_flag:true,
          food_flag:true
        
     };
 }

handleChange = (e) => {
    if (this.props.id === 1){
        if(this.state.AnimalName.includes(e.target.value) && this.state.animal_flag){
            this.props.increaseScore(10);
            this.setState({
                animal_flag: false
            })
        }  
    }

    else if (this.props.id === 2){
        if(this.state.CountryName.includes(e.target.value) && this.state.country_flag){
        this.props.increaseScore(10);
        this.setState({
            country_flag: false
        })
    }
    }

    else{
        if(this.state.FoodName.includes(e.target.value) && this.state.food_flag){
            this.props.increaseScore(10);
            this.setState({
                food_flag: false
            })
        }  
    }
}

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Input;

