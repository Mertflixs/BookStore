import React from "react";
import "./Register.css";
import { FaUser, FaLock } from "react-icons/fa";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

const RegisterUser = () => {
  const { registerUser, registerInfo, updateRegisterInfo } =
    useContext(UserContext);
  return (
    <div className="register-body">
      <div className="wrapper-register">
        <form action="" onSubmit={registerUser}>
          <h1>Register</h1>
          <div className="input-box-register">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, email: e.target.value })
              }
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box-register">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                updateRegisterInfo({
                  ...registerInfo,
                  password: e.target.value,
                })
              }
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box-register">
            <input type="password" placeholder="Re-Password" required />
            <FaLock className="icon" />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
