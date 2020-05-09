import React, { Component } from 'react';

import Header from './Header';
import Keyword from './Keyword';
import InputBox from './InputBox';

import '../styles/Container.styles.css';

class Container extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            Score:0,
            Options: [{
                key: 1,
                name:"Animals"
            },
            {
                key: 2,
                name:"Place"
            }, 
            {
                key: 3,
                name:"Food"
            }, 
             ]
        }
    }

    increaseScore = (value) => {
        this.setState ((prevState) =>  ({
            Score:prevState.Score + value
        }))
    }
    

    render() {
        const { Options } = this.state;
        return (
            <div className='container'>
                <Header Score={this.state.Score} />
                <div className='text'>The Letter is</div>
                <Keyword />
                {
                    Options.map(({key,name}) =>
                    <InputBox key={key} name={name} increaseScore={this.increaseScore} id={key}/>
                    )
                }
                
            </div>
        )
    }
}

export default Container;
