import axios from "axios";
import React, { useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import {auth} from "service/api/loginApi";
import "../assets/css/login.css"
function SignIn(){
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  console.log(password,email);
  const history = useHistory()
   const handleLogin =(e)=>{
    e.preventDefault()
    const data = {email:email,
      password:password}
    axios.post('http://185.213.27.86:5000/api/v1/auth/login',data).then(res=>{
      localStorage.setItem("token",res.data.session_id)
      history.push('/admin/dashboard')
    })
   }
    return(
    <>
    <div className="container_signin">
    <form  className='form signup'>
        <div className='control'>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"  
            value={email}
            onChange={e=>setEmail(e.target.value)}
            className="form-control email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control password"
            placeholder="Enter password"
            onChange={e=>setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" onClick={handleLogin} className="btn btn-primary submit">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Create <Link to="/signup">Account</Link>
        </p>
        </div>
        
      </form>
    </div>
   

    </>
    )
}
export default SignIn;
