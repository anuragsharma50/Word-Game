import React, { Component } from 'react';

import Countries from '../../data/countries';
import Animals from '../../data/Animal';
import Food from '../../data/Food';

import './Input.css';

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

next = () => {
    //if(this.state.animal_flag === false  && this.state.country_flag === false && this.state.food_flag === false){
    if(this.props.Score === 30){
        this.props.newKeyword()
        document.getElementById('1').value = ''
        document.getElementById('2').value = ''
        document.getElementById('3').value = ''
        this.setState({
            animal_flag: true
        });
        this.setState({
            country_flag: true
        });
        this.setState({
            food_flag: true
        });
        
    }
}

handleChange = (e) => {
    if(e.target.value[0] === undefined){
        e.target.value = this.props.keyword
    }
    e.target.value = e.target.value.toLowerCase()
    e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1)
    if(e.target.value[0]===this.props.keyword){
        if (this.props.id === 1){
            if(this.state.AnimalName.includes(e.target.value) && this.state.animal_flag){
                this.props.increaseScore(10);
                this.setState({
                    animal_flag: false
                },() => this.next());
                this.props.restart();
            }  
        }
    
        else if (this.props.id === 2){
            if(this.state.CountryName.includes(e.target.value) && this.state.country_flag){
            this.props.increaseScore(10);
            this.setState({
                country_flag: false
            },() => this.next());
            this.props.restart();
        }
        }
    
        else{
            if(this.state.FoodName.includes(e.target.value) && this.state.food_flag){
                this.props.increaseScore(10);
                this.setState({
                    food_flag: false
                },() => this.next());
                this.props.restart();
            }  
        }
    }
}

    render() {
        return (
            <div>
                <input type="text" id={this.props.id} val={e => e.target.value} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Input;

