import React, { useState } from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Display the entered values on the console
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    fetch("http://localhost:3002/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Registration Successful");
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div>
      <div id="login1">
        <div className="loginpage">
          <div className="loginframe">
            <h1 className='h'>Create Account</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="input1"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
              <br />
              <input
                type="password"
                className="input1"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <input
                type="password"
                className="input1"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <br />
              <button type="submit" className="button">
                Submit
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
