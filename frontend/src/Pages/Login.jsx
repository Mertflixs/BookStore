import React, {useCallback, useState} from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    password: "",
  });

  const updateLoginInfo = useCallback((info) => {
    console.log(info);
    setLoginInfo(info);
  }, []);

  const loginUser = () => {
	console.log("login user");
  }

  return (
    <div className="login-body">
      <div className="wrapper">
        <form action="" onSubmit={loginUser}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, name: e.target.value })
              }
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, password: e.target.value })
              }
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password ?</a>
          </div>

          <button type="submit"> Login</button>

          <div className="register-link">
            <p>
              Don't have a account <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
