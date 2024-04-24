import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  });
  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
    
  }
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3 mb-3 mt-3">
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
        />
        <button onClick={login} className="btn btn-primary mb-3">Login</button>
      </div>
    </div>
  );
}
export default Login;
