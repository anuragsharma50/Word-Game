import React from 'react'
import ReactDom from 'react-dom';

import './Restart.style.css'

const Restart = ({open,Score}) =>
open ?
    ReactDom.createPortal(
        <div className='Restart'>
            <h1 class="out-heading">Game Over</h1>
        <h2 class="score-heading">Score</h2>
        <h2 id="out">{Score}</h2>
        <button id="try-again" onClick={() => window.location.reload()}>Try Again</button>
        </div>   
,document.getElementById("restart"))
:
null

export default Restart
