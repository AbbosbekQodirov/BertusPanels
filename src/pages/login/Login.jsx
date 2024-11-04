import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate("/")
    }
  return (
    <div className="loginPage">
      <div className="loginForm">
        <div className="formLogo">
          <img src="/imgs/formLogo.png" alt="" />
        </div>
        <form onSubmit={handleSubmit} action="">
          <label>
            <img src="/imgs/formUser.svg" alt="" />
            <input type="text" placeholder="Login :" />
          </label>
          <label>
            <img src="/imgs/formPassword.svg" alt="" />
            <input type="text" placeholder="Parol :" />
          </label>
          <button>Kirish</button>
        </form>
      </div>
    </div>
  );
}

export default Login