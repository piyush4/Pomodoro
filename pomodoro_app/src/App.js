import MainContent from "./components/MainContent.js"
import Countdown from "./components/Countdown.js"
import Settings from "./components/Settings"
import Modal from "./components/Modal"
import React from "react"

function App() {
  const [showModal, setShowModal] = React.useState(false)
  const [durations, setDuration] = React.useState({
        pomoDuration:25, shortDuration:5, longDuration:15
    })
  function handleModalClick(){
    setShowModal(prevShowModal => !prevShowModal)
  }
  
  function handleChange(event){
      const {name, value} = event.target
      console.log(name, value)
      setDuration(prevDuration =>{
          return {
              ...prevDuration,
              [name]:value
                  }
      })
  }
  return (
  <div>
    <MainContent/>
    <Countdown durations = {durations} showModal={showModal}/>
    <Settings handleClick= {handleModalClick}/>
    <Modal 
      showModal = {showModal} 
      handleClick = {handleModalClick}
      durations = {durations}
      handleFormInput = {handleChange} />
  </div>
  )
}

export default App
