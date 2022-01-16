import React, { useState, useEffect } from "react";
import { Button, FormLabel, InputGroup } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
import "../Style/Login.css";
import { getAuth } from "firebase/auth";
import { UserLogin, UserSignup } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [User, setUser] = useState();
  const [HavingAccount, setHavingAccount] = useState(true);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const UserData = useSelector((state) => state.UserData);
  const auth = getAuth();
  const dispatch = useDispatch();

  const _Submit = () => {
    HavingAccount
      ? dispatch(UserLogin(auth, Email, Password))
      : dispatch(UserSignup(auth, Email, Password));
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    // console.log(UserData)
    setUser(UserData);
  }, [UserData]);

  return (
    <div className="Login">
      {User?.length>0 ? (
        // <Redirect to={{pathname:"/placeDetails" , user:User}}></Redirect>
        <>
          sdhsdvhsdhov
          {/* <Button onClick={_Logout}>Logout</Button> */}
        </>
      ) : (
        <div className="form">
          {HavingAccount ? (
            <>
              <InputGroup>
                <label typeof="Email">Enter Email</label>
                <input
                  placeholder="Enter your email"
                  defaultValue={Email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </InputGroup>
              <InputGroup>
                <FormLabel typeof="Password">Enter Password</FormLabel>
                <input
                  placeholder="Enter your Password"
                  defaultValue={Password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </InputGroup>
              <div className="AccountLabel">
                Don't Have an account??{" "}
                <span onClick={() => setHavingAccount(!HavingAccount)}>
                  {" "}
                  Sign Up
                </span>
              </div>
              <Button type="submit" onClick={_Submit}>
                Login
              </Button>
            </>
          ) : (
            <>
              <InputGroup>
                <label typeof="Email">Enter Email</label>
                <input
                  placeholder="Enter your email"
                  defaultValue={Email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </InputGroup>
              <InputGroup>
                <FormLabel typeof="Password">Enter Password</FormLabel>
                <input
                  placeholder="Enter your Password"
                  defaultValue={Password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </InputGroup>
              <div className="AccountLabel">
                Already having an account??{" "}
                <span onClick={() => setHavingAccount(!HavingAccount)}>
                  Login
                </span>
              </div>
              <Button type="submit" onClick={_Submit}>
                Signup
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
