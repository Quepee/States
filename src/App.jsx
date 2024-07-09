// STEP 1 : import the useState from react 
import { useState } from "react"
import Statess from "./Statess"
import Forms from "./Forms"
import Register from "./Register"
import Register2 from "./Register2"


const App = () => { 
  // STEP 2 : create state variables and a function
  const [nameState, setNameState] = useState("Bolu")
  const [jobTitleState, setJobTtitleState] = useState("upcoming artiste")
  const [locationState, setLocationState] = useState("I came from the Gutters")
  const meetApostle = () => {
  setNameState("Bolu Cello")
  setJobTtitleState("Super Star")
  setLocationState("I now live in London")
  }
  return (
    <>
    <div>
      Hello, My name is {nameState}, I am an {jobTitleState} and I play the Cello and {locationState}
    </div>
    <button onClick={meetApostle} className="border p-1 rounded ring"> meet Apostle </button>

    <Statess />
    <Forms/>
    <Register2/>
  

    </>
  )
}

export default App