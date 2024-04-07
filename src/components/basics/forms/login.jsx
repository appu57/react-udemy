import React from "react";

const state = {email:"",password:""};
const onSubmit = ()=>{
    
}
const Login = ()=>{
    return(
      <div className="login-form-container col-lg-9">
          <h4 className="m-1 p-2 border-bottom">
           Login
          </h4>
          <div className="form-group-form-row">
              <label className="col-lg-4">Email</label>
              <input type="email" className="form-control" onChange={(event)=>{state.email=event.target.value}}/>
              {/* onChange returns a function which we are writing in form of arrow function which will have event as an arguement */}
             {/* while in class component we should never set value in render() state.email = event.value we can write this.setState({email:event.target.value}) */}

          </div>
          <div className="form-group-form-row">
              <label className="col-lg-4">Password</label>
              <input type="password" className="form-control" onChange={(event)=>{state.password=event.target.value;}}/>
          </div>
          <button className="btn btn-success" onClick={onSubmit}> Submit </button>
      </div>
    );

}


export default Login;