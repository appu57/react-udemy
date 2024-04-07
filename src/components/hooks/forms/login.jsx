import React,{useEffect, useState} from 'react';


const Login = ()  =>{
    var [email,setEmail] = useState(""); {/* email is the variable for which we are setting default valu  and  setEmail is used as setter  */}
    var [password,setPassword] = useState("");
    useEffect(()=>{
      console.log("Called for every render of the UI and any change made to state elements such as email and password the method is called")
    });

    useEffect(()=>{
       console.log("Whenever email value is changed also called run on Update");//use for validation , search
    },[email])

    useEffect(()=>{
        console.log("also called run on Mount ") //switching the page and comin back to the same login form
     },[])

     useEffect(()=>{
        return ()=>{
            console.log("using return we Execute during component unmounting lifecycle hook also called run on unMount")
        }
     })

    return (
        <div className="row">
            <div className="col-lg-5 col-md-7 mx-auto">
                <div className="card border-success shadow-lg my-2">
                    <div className="card-header border-bottom border-success">
                        <h4 className="text-success">
                            Login
                        </h4>
                    </div>
                    <div className="card-body border-bottom border-success">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder="Passwword"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;