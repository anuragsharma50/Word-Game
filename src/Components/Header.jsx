import React from 'react';

import '../styles/Header.styles.css';

const Header = ({Score}) => {
        return (
            <div className='header'>
                <div className='user'></div>
                <div className="time">
                    <div className="remaining"></div>
                </div>
                <div className="score">Score
                <div className="score_val">{Score}</div>
                </div>
            </div>
        )
    }

export default Header;
