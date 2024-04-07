import React, { useEffect, useState } from 'react';


const Register = () =>{
    let [state , setState] = useState({  //instead of creating state and setstate for each property use state objects
        email:"",
        name:"",
        password:"",
        hobby:""
    });

    useEffect(()=>{
      console.log("On email changes")
    },[state.email]);

    let [hobbies]=useState([{id:1,hobbyName:"dancin"} ,{id:1,hobbyName:"singin"} ]);

    let [error,setError] = useState({
        email:[],
        name:[],
        password:[],
        hobby:[]
    })

    let [dirty,setDirty] = useState({
        email:false,
        name:false,
        password:false,
        hobby:false
    })

    let [message , setMessage] = useState("");

    const validate = ()=>{
        let errordata ={};
        errordata.email=[];
        if(!state.email)
        {
            errordata.email.push("Email is required")
        }
        errordata.password=[];
        if(!state.password)
        {
            errordata.password.push("Email is required")
        }
        errordata.name=[];
        if(!state.name)
        {
            errordata.name.push("Email is required")
        }
        errordata.hobby=[];
        if(!state.hobby)
        {
            errordata.hobby.push("Email is required")
        }
        setError(errordata);
    }

    useEffect(validate,[state]);//whenever there is a change in state call validate for error
    return(
        <div className="register">
          <div className="row">
            <div className="col-lg-5 col-md-7 mx-auto">
                <div className="card border-success shadow-lg my-2">
                    <div className="card-header border-bottom border-success">
                        <h4 className="text-success">
                            Register
                        </h4>
                        <ul className="text">
                           {Object.keys(error).map((control)=>{
                               if(dirty[control])
                               {
                                   return error[control].map((errors)=>{
                                      return <li key={errors}>{errors}</li>
                                   })
                               }
                               else{
                                   return "";
                               }
                           })}
                        </ul>
                    </div>
                    <div className="card-body border-bottom border-success">
                        <div className="form-group form-row">
                            <label className="col-lg-4">Email</label>
                            <div className="col-lg-8">
                            <input type="email" className="form-control" id="email" name="email" value={state.email} onChange={(event)=>{let updateState= state;updateState.email=event.target.value;setState(updateState)}} placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group form-row">
                            <label className="col-lg-4" >Password</label>
                                <div className="col-lg-8">
                            <input type="password" className="form-control" id="password" name="password" value={state.password} onChange={(event)=>{let updateState= state;updateState.password=event.target.value;setState(updateState)}} placeholder="Passwword"/>
                            </div>
                        </div>
                        <div className="form-group form-row">
                            <label className="col-lg-4">Name</label>
                            <div className="col-lg-8">
                            <input type="text" className="form-control" id="name" name="name" value={state.name} onChange={(event)=>{let updateState= state;updateState.name=event.target.value;setState(updateState)}} placeholder="Name"/>
                            </div>
                        </div>
                        <div className="form-group form-row">
                            <label className="col-lg-4">hobby</label>
                            <div className="col-lg-8">
                            <select  className="form-control" id="hobby" name="hobby" value={state.hobby} onChange={(event)=>{setState({...state,hobby:event.target.value})}} placeholder="hobby">
                                {hobbies.map((data)=>{
                                    <option key={data.id} value={data.hobbyName}>
                                     {data.hobbyName}
                                    </option>
                                })}
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Register;