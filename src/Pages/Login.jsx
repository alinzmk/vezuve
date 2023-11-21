import React, { useState } from 'react';
import { UserData } from '../Assets/Mockdata';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from "../Assets/logo-renkli.png";
import { toast } from 'react-toastify';

function Login() {
  localStorage.setItem('id', null);
  const navigate = useNavigate();
  const [email, setEmailname] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmailname(event.target.value);
  }
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  

  const notify = () => toast.success("Başarıyla Giriş Yapıldı",{
    position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const user = UserData.find(user => user.email === email && user.password === password);

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (password.length < 5) {
      alert('Password should be at least 8 characters long');
      return;
    }

    if (user) {
      notify();
      navigate("/Panel");
      localStorage.setItem('id', user.id);
      localStorage.setItem("bankInfo", "false");
      localStorage.setItem("identityDocument", "false");
      localStorage.setItem("activityDocument", "false");
      localStorage.setItem("englandCertificate", "false");
      localStorage.setItem("taxPlate", "false");
      localStorage.setItem("billInfo", "false");
    } else {
      alert('Invalid email or password');
    }
    
  };
  

  return (
    <div className="App row m-0">
      <div className="col-5">
        <div className="login-container">
          <div className="wrapper">
            <div className="title"><img src={logo} className="login-logo" alt="VevüzeLogo" /></div>
            <form action="#">
              <div className="row">
                <i className="fas fa-user"></i>
                <input value={email} onChange={handleEmailChange} type="email" placeholder="E-posta veya Telefon*" required />
              </div>
              <div className="row">
                <i className="fas fa-lock"></i>
                <input
                  value={password}
                  onChange={handlePasswordChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Şifre*"
                  required
                />
                <i
                  className={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  id="togglePassword"
                  onClick={handleTogglePassword}
                ></i>
              </div>
              <div className="pass"><a href="#">Şifremi Unuttum</a></div>
              <div className="row button">
                <input onClick={handleSubmit} type="submit" value="Giriş Yap" />
              </div>
              <div className="signup-link">Hala VezüPort ile tanışmadın mı? <a href="#">Hemen bizimle iletişime geçebilirsin.</a></div>
            </form>
          </div>
        </div>

      </div>
      <div className="col-6">
      </div>
    </div>
  );
}

export default Login;
