import React, { useState } from 'react';
import { UserData } from '../Assets/Mockdata';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from "../Assets/logo-renkli.png";
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {
  localStorage.setItem('id', null);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
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


/* // Function to handle login and get access token
const loginUser = async (username, password) => {
  
  try {
    const response = await axios.post('https://localhost:6161/user_token', {
      username: username,
      password: password
    });
    
    // Assuming the response contains access_token and token_type
    const { access_token, token_type } = response.data;
    
    // You can do something with the token here (e.g., store it in localStorage)
    console.log('Access Token:', access_token);
    console.log('Token Type:', token_type);
    
    localStorage.setItem("token", access_token);
    
    return { access_token, token_type };
  } catch (error) {

    // Handle error here
    console.error('Login failed:', error);
    throw error;
  }
}; */

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(username)) {
      alert('Please enter a valid email address');
      return;
    }
    if (password.length < 1) {
      alert('Password should be at least 8 characters long');
      return;
    }

    /* loginUser(username, password)
      .then((response) => {
        // Use the access token or perform further actions
        console.log('Login successful!', response);
        notify();
        navigate("/Panel");

      })
      .catch((error) => {
        // Handle any errors that occurred during the login process
        console.error('Login error:', error);
        alert('Invalid email or password');
      }); */

      notify();
      navigate("/Panel");
    
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
                <input value={username} onChange={handleUsername} type="email" placeholder="E-posta veya Telefon*" required />
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
              <div className="signup-link" onClick={()=>navigate("/Kayıt")}>Hala VezüPort ile tanışmadın mı? Hemen bizimle iletişime geçebilirsin</div>
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
