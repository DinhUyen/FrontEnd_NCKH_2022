import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.css"
function SignIn(){
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
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
          <button type="submit" className="btn btn-primary">
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
