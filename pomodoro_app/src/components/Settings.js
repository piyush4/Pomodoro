import React from "react"
import {Fragment} from "react"
function Settings(props){
    const {handleClick} = props
    return(
        <Fragment>
            <div className="settings" onClick={()=>{
                handleClick()
            }}>
                <i className="fa fa-gear" style={{fontSize:"36px"}}></i>

            </div>
        </Fragment>
    
    )
}

export default Settings