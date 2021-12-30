import React, {createContext} from 'react'

const ModeContext = createContext()

function ModeContextProvider(props){
    const [whichState, setWhichState] = React.useState(1)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [activeState, setActiveState] = React.useState('pomodoro')

    return (<ModeContext.Provider value={{whichState, activeState, isPlaying, 
    setWhichState, setActiveState, setIsPlaying}}>
        {props.children}
    </ModeContext.Provider>)
}

export {ModeContext, ModeContextProvider} 