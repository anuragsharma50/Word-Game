import React from 'react';

import Input from '../Input/Input';

import './Inputbox.styles.css';

const InputBox = ({name, increaseScore,id,restart,newKeyword,keyword,Score}) => {
    return (
        <div className='inputbox'>
            <div className="option">{name}</div>
            <Input increaseScore={increaseScore} name={name} id={id} restart={restart}
             newKeyword={newKeyword} keyword={keyword} Score={Score}/>
        </div>
    )
}

export default InputBox;
