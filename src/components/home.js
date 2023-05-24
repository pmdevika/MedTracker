import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSignIn = () => {
    const usernameExists = checkUsernameExists(username);

    if (!usernameExists) {
      window.location.href = './createacount';
    } else {
      if (password !== 'validpassword') {
        window.location.href = './createacount';
      } else {
        // Continue with successful login logic
        history.push('/profile'); // Navigate to the profile page
      }
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const checkUsernameExists = (username) => {
    return false;
  };

  return (
    <div>
      <div id="login1">
        <div className="loginpage">
          <div className="loginframe">
            <h1 className="h">User Login</h1>
            <div>
              <input
                type="text"
                className="input1"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
              />
              <br />
              <input
                type="password"
                className="input1"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <button type="button" className="button" onClick={handleSignIn}>
                Sign in
              </button>
              <br />
              <div className="createacount">
                <Link to="/createacount" style={{ textDecoration: 'none' }}>
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;