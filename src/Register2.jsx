import React, { useState } from 'react'

const Register2 = () => {
  const [firstNameState, setFirstNameState] = useState("")
  const [lastNameState,setLastNameState] = useState("")
  const [phoneNoState, setPhoneNoState] = useState("")
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const formData2 = {firstNameState, lastNameState, phoneNoState, emailState, passwordState };
    console.log(formData2);
  };
  return (
    <div>
      <div className="w-[400px]">
        <h1 className="text-center bg-orange-300 text-red-500">
          Resgistration
        </h1>
        <form
          
          action=""
          className='border rounded bg-slate-100 w-[400px] p-2 shadow-sm m-4"'
        >
          <label htmlFor="FirstName">First name:</label>
          <input
            className="w-[270px] mb-2"
            type="text"
            name=""
            id=""
            placeholder="Enter your First name"
          />
          <br />
          <label htmlFor="LastName">Last name:</label>
          <input
            className="w-[270px] mb-2"
            type="text"
            name=""
            id=""
            placeholder="Enter your Last name"
          />
          <br />
          <label htmlFor="PhoneNo">Phone No:</label>
          <input
            className="w-[270px] mb-2"
            type="number"
            name=""
            id=""
            placeholder="Enter your phone number"
          />
          <br />
          <label htmlFor="Email">Email:</label>
          <input
            className="w-[270px] mb-2"
            type="email"
            name=""
            id=""
            placeholder="Enter your Email address"
          />
          <br />
          <label htmlFor="Password">Password:</label>
          <input
            className="w-[270px] mb-2"
            type="text"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <button className="bg-lime-900 text-center w-full font-bold hover:bg-black hover:text-red-400">
            Register
          </button>
        </form>
      </div>

    </div>
  )
}

export default Register2