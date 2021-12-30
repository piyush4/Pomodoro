import React from "react"

function Modal(props){
    const {showModal, handleClick} = props

    const {pomoDuration, shortDuration, longDuration} = props.durations

    const {handleFormInput} = props

    const styles = {
        display: showModal ? "block" : "none"
    }
    return(
        <div className="modal" style={styles}>
                <div className="overlay">
                    <h3 className="time-header">Time (minutes)</h3>
                    <form>
                        <div>
                        <label htmlFor = "pomoDuration">Pomodoro</label>
                        <input
                            className="formInput"
                            name="pomoDuration"
                            type="number"
                            min="1"
                            max="35"
                            onChange={handleFormInput}
                            value={pomoDuration}/> 
                        </div>   
                        <div>
                        <label htmlFor = "shortDuration">Short Break</label>
                        <input
                            className="formInput"
                            name="shortDuration"
                            type="number"
                            min="1"
                            max="20"
                            onChange = {handleFormInput}
                            value={shortDuration}/>
                        </div>
                        <div>
                        <label htmlFor = "longDuration">Long Break</label>
                        <input
                            className="formInput"
                            name="longDuration"
                            type="number"
                            min="1"
                            max="25"
                            onChange = {handleFormInput}                        
                            value={longDuration}/>
                        </div>
                    </form>
                    <button 
                        className="close-btn"
                        onClick={()=>{handleClick()}}>Ok</button>
                </div>
            </div>
    )
}
export default Modal

