import React,{useContext,useRef} from 'react'
import {ModeContext} from '../ModeContext'


function Countdown(props){
    const {pomoDuration, shortDuration, longDuration} = props.durations
    const {whichState,activeState, 
        setWhichState,setActiveState}  = useContext(ModeContext)
    const [timeAllotted, setTimeAllotted] = React.useState(pomoDuration)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const timerRef = useRef(null)
    
    React.useEffect(()=>{ 
        if(isPlaying){
            if(timeAllotted>0){
                timerRef.current = setTimeout(()=>{
                    setTimeAllotted(prevTimeAllotted => prevTimeAllotted-1)
                }, 1000)
            }
            else{
                if(whichState%3===0 && activeState ==="pomodoro"){
                    setTimeAllotted(longDuration*60)
                    setActiveState("longBreak")
                }
                else if(activeState ==="pomodoro"){
                    setTimeAllotted(shortDuration*60)
                    setActiveState("shortBreak")
                    
                }
                else{
                    setTimeAllotted(pomoDuration*60)
                    setActiveState("pomodoro")
                    setWhichState(prevState =>prevState+1)
                    
                }
                setIsPlaying(prevIsPlaying => !prevIsPlaying)
            }
        }
        
    }, [timeAllotted, isPlaying])
    
    React.useEffect(()=>{
        setIsPlaying(false)
        clearTimeout(timerRef.current)
        if(activeState==="pomodoro"){
            setTimeAllotted(pomoDuration*60)
            
        }
        if(activeState === "shortBreak"){
            setTimeAllotted(shortDuration*60)
            
        }
        if(activeState ==="longBreak"){
            setTimeAllotted(longDuration*60)
        }
        
    }, [activeState, longDuration, pomoDuration, shortDuration])

    function handleClick(){
        setIsPlaying(prevIsPlaying => !prevIsPlaying)
    }
    const mins = Math.floor(timeAllotted/60)
    const secs = Math.floor(timeAllotted%60)
    const secsToDisplay = secs < 10 ? "0"+secs :secs
    
    const styleTime = {
        background: "#282e36",
        color:"#fff",
        border:"none"
    }
    return(
        <div className="timeRemaining" style = {isPlaying? styleTime : {} }onClick = {handleClick}>
            <h2>{mins}:{secsToDisplay}</h2>
            <p className="pause-play-btn">{isPlaying?"Pause":"Start"}</p>
        </div>
    )
}
export default Countdown