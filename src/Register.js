  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Header from './Header.js';


  function Register() {
    useEffect(()=>{
      if(localStorage.getItem('user-info')){
        navigate('/add')
      }
    })
    const [name, setName] = useState();
    const [email,  setEmail ] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    

    async function signUp()
    {
          let item={name,email,password};
          console.warn(item);

          let result=await fetch("http://127.0.0.1:8000/api/register",{
              method:"POST",
              body:JSON.stringify(item),
              headers:{
                  "Content-Type":"application/json",
                  "Accept":"application/json"
              }
          })
          result = await result.json();
          console.warn("result",result);
          localStorage.setItem("user-info", JSON.stringify(result));
          navigate("/add");
    }
    return (
      <>
      <Header/>
      <div className="col-sm-6 offset-sm-3">

        <div className="container">
          <h1 className="text-center my-3">Register Page</h1>
          <input 
          onChange={(e)=>setName(e.target.value)}
          type="text" 
          value={name}
          className="form-control mb-3" 
          placeholder="name"
          />


          <input 
          onChange={(e)=>setEmail(e.target.value)}
          type="email" 
          value={email}
          className="form-control mb-3" 
          placeholder="email"
          />

          <input
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            value={password}
            className="form-control mb-3"
            placeholder="password"
          />
          <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
      </div>
      </>
    );
  }
  export default Register;
