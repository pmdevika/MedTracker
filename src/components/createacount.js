import React from 'react'
import '../styles/home.css';
import { Link } from 'react-router-dom';

const createacount = () => {
  return (
    <div>
       <div id="login1">
        <div className="loginpage">
          <div className="loginframe">
            <h1 className='h'>Create Account</h1>
            <input type="text" className="input1" placeholder="username" />
              <br />
              <input type="text" className="input1" placeholder="password" />
              <br />
              <input type="text" className="input1" placeholder="confirm password" />
              <br />
              
             <Link to="/profile"> <button type="submit" className="button">Submit</button></Link>
              <br />
            </div>
            </div>
            </div>
            
    </div>
  )
}

export default createacount;