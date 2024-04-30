import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import * as yup from 'yup';


const loginSchema = yup.object().shape({
  email: yup.string()
    .email('ایمیل نامعتبر است')
    .required('پر کردن فیلد ایمیل ضروری است'),
  password: yup.string()
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .required('پر کردن فیلد رمز عبور ضروری است'),
});

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
    try {
      // Validate using yup
      const isValid = await loginSchema.validate({ email, password }, { abortEarly: false });
      
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
      
    } catch (error) {
      // Handle the validation errors here
      // error.inner is an array of errors if abortEarly is false
      alert(error.errors.join(", "));
    }
  }
  
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3 mb-3 mt-3">
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Enter your password"
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
