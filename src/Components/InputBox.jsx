import React from 'react';

import Input from './Input';

import '../styles/Inputbox.styles.css';

const InputBox = ({name, increaseScore,id}) => {
    return (
        <div className='inputbox'>
            <div className="option" >{name}</div>
            <Input increaseScore={increaseScore} name={name} id={id}/>
        </div>
    )
}

export default InputBox;
