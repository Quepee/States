import React, { useState } from 'react'


const Statess = () => {
  const [nameState, setNameState] = useState("Bambo")
  const [companyTitleState, setCompanyTitleState] = useState("Cocoa Farm")
  const [familyState, setFamilyState] = useState("1 wife and 2 kids")
  const coronation= () => {
    setNameState("Prince Bambo the First")
    setCompanyTitleState("City")
    setFamilyState("4 wives and 23 kids")
  }
  return (
    <>
      <div>
        
        I am Mr {nameState}, I run a {companyTitleState}, I have {familyState}.

      </div>
      <button onClick={coronation} className='border p-3 rounded ring'> Coronation </button>
    </>
  )
}

export default Statess