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
    apiKey: "20512c84-b9a0-412c-bfde-66de1a7fb7aa", //required
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
