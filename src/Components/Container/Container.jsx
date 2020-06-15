import React, { Component } from 'react';

import Header from '../Header/Header';
import Keyword from '../Keyword/Keyword';
import InputBox from '../Inputbox/InputBox';
import Restart from '../Restart/Restart'

import './Container.styles.css';

class Container extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            Keywords: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            keyword:'',
            Score:0,
            open: false,
            Options: [{
                id: 1,
                name:"Animals"
            },
            {
                id: 2,
                name:"Place"
            }, 
            {
                id: 3,
                name:"Food"
            }, 
             ]
        }
        this.samay = null;
    }

    increaseScore = (value) => {
        this.setState ((prevState) =>  ({
            Score:prevState.Score + value
        }))
    }

    componentDidMount(){
        setTimeout(this.timer,3000);
        this.newKeyword();
    }

    timer = () => {
        document.getElementById('left').className = 'animate';
        this.samay = setTimeout(() => this.setState({open: true}),15000);
    }

    restart = () => {
        document.getElementById('left').className = 'remaining';
        clearTimeout(this.samay)
        setTimeout(this.timer,1500);    
    }

    newKeyword = () => {
        this.setState({
            keyword: this.state.Keywords[Math.floor(Math.random()*26+1)]
        })    
    }
    
    render() {
        const { Options,Score,keyword,open } = this.state;
        return (
            <div id='cont' className='container'>
                <Restart open={open} Score={Score}/>
                <Header Score={Score} />
                <div className='text'>The Letter is</div>
                <Keyword val={keyword}/>
                {
                    Options.map(({id,name}) =>
                    <InputBox key={id} name={name} increaseScore={this.increaseScore} id={id}
                     restart ={this.restart} newKeyword={this.newKeyword} keyword={keyword} Score={Score}/>
                    )
                }
                
            </div>
        )
    }
}

export default Container;
