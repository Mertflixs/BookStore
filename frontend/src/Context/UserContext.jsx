import { useCallback, useEffect, useState, createContext } from "react";
import { baseUrl, postRequest } from "../Service/Service";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [registerError, setRegisterError] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("User"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      setRegisterError(null);
      const res = await postRequest(
        `${baseUrl}/user/register`,
        JSON.stringify(registerInfo)
      );

      if (res.error) {
        return setRegisterError(res);
      }

      localStorage.setItem("User", JSON.stringify(registerInfo));
      setUser(res);

      navigate("/");
    },
    [registerInfo]
  );

  const logoutUser = () => {
    localStorage.removeItem("User");
    setUser(null);
  };

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();

      setLoginError(null);

      const res = await postRequest(
        `${baseUrl}/user/login`,
        JSON.stringify(loginInfo)
      );

      if (res.error) {
        console.log(res.error);
        return setLoginError(res);
      }

      localStorage.setItem("User", JSON.stringify(res));
      setUser(res);

      navigate("/");
    },
    [loginInfo]
  );

  const updateLoginInfo = useCallback((info) => {
    console.log(info);
    setLoginInfo(info);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        loginInfo,
        updateLoginInfo,
        loginError,
        logoutUser,
        registerInfo,
        registerUser,
        updateRegisterInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
