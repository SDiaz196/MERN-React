import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cPasswordError, setCPasswordError] = useState("");

  const handleFirst = (e) => {
    setFirst(e.target.value);
    if (e.target.value.length < 2) {
      setFirstError("This should be at least 2 characters!")
    } else {
      setFirstError("")
    }

  }
  const handleLast = (e) => {
    setLast(e.target.value);
    if (e.target.value.length < 2) {
      setLastError("This should be at least 2 characters!")
    } else {
      setLastError("")
    }

  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 2) {
      setEmailError("This should be at least 2 characters!")
    } else {
      setEmailError("")
    }

  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("This should be at least 8 characters!")
    } else {
      setPasswordError("")
    }

  }
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    if (e.target.value != password) {
      setCPasswordError("Passwords do not match!")
    } else {
      setCPasswordError("")
    }

  }


  return (
    <div className="App">
      <h1>Form</h1>
      <div>
        {firstError ? <p>{firstError}</p> : ""}
        <label>First Name:</label>
        <input type="text" onChange={handleFirst} />
      </div>

      <div>
        {lastError ? <p>{lastError}</p> : ""}
        <label>Last Name:</label>
        <input type="text" onChange={e => handleLast(e)} />
      </div>

      <div>
        {emailError ? <p>{emailError}</p> : ""}
        <label>Email:</label>
        <input type="email" onChange={e => handleEmail(e)} />
      </div>

      <div>
        {passwordError ? <p>{passwordError}</p> : ""}
        <label>Password:</label>
        <input type="password" onChange={e => handlePassword(e)} />
      </div>

      <div>
        {cPasswordError ? <p>{cPasswordError}</p> : ""}
        <label>Confirm Password:</label>
        <input type="password" onChange={e => handleCPassword(e)} />
      </div>


      <h3>Your Form Data</h3>
      <div>
        <label>First Name: {first}</label>
      </div>

      <div>
        <label>Last Name: {last}</label>
      </div>

      <div>
        <label>Email: {email}</label>
      </div>

      <div>
        <label>Password: {password}</label>
      </div>

      <div>
        <label>Confirm Password:{cPassword}</label>
      </div>
    </div>
  );
}


export default App;
