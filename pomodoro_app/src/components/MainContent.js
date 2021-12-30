import React from 'react'
import './MainContent.css'
import {ModeContext} from "../ModeContext"

function MainContent(){
    
    const {activeState, setActiveState}  =  React.useContext(ModeContext)
    
    function handlePomoClick(){
        if(activeState!=="pomodoro"){
            setActiveState("pomodoro")
        }
    }
    
    function handleShortClick(){
        if(activeState !== "shortBreak"){
            setActiveState("shortBreak")
        }
    }
    function handleLongClick(){
        if(activeState !== "longBreak"){
            setActiveState("longBreak")
        }
    }
    return (<div>
        <header className = "header">
            <h1>Pomodoro</h1>
            <div className="parts">
                <p className={activeState==="pomodoro"?"active":"none"} onClick={handlePomoClick}>
                    Pomodoro
                </p>
                <p className={activeState==="shortBreak"?"active":"none"} onClick={handleShortClick}>
                    Short break
                </p>
                <p className={activeState==="longBreak"?"active":"none"} onClick={handleLongClick}>
                    Long break
                </p>
            </div>
        </header>
    </div>)
}

export default MainContent

