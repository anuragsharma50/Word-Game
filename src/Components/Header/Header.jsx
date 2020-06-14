import React from 'react';

import './Header.styles.css';

const Header = ({Score}) => {
        return (
            <div className='header'>
                <div className='user'></div>
                <div className="time">
                    <div id='left' className="remaining"></div>
                </div>
                <div className="score">Score
                <div className="score_val">{Score}</div>
                </div>
            </div>
        )
    }

export default React.memo(Header);
