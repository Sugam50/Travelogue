import React from "react";
import SawoLogin from "sawo-react";
import "../Style/Login.css";
function Login() {
  function sawoLoginCallback(payload) {
    console.log(payload);
  }
  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required
    identifierType: "email", //required must be one of 'email','phone number
    // identifierType: "phone_number_sms", //required must be one of 'email','phone number
    apiKey: "a8b8715e-f1a5-40a1-8eca-662bf4474d92", //required
    containerHeight: "500px", //default
  };
  return (
    <div className="Login">
      <div className="form">
        <SawoLogin config={sawoConfig} />
      </div>
    </div>
  );
}

export default Login;
