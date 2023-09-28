import '../App.css';

function Login() {
  return (
    <div className="App">
        <div class="container">
            <div class="wrapper">
                <div class="title"><span draggable="false">Kayıt Formu</span></div>
                <form action="#">
                <div class="row">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="E-posta*" required/>
                </div>
                <div class="row">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Şifre*" required/>
                </div>
                <div class="pass"><a href="#">Forgot password?</a></div>
                <div class="row button">
                    <input type="submit" value="Login"/>
                </div>
                <div class="signup-link">Do you have an account <a href="#">Signup now</a></div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;
