import React,{useState} from "react";
import { Redirect } from "react-router-dom";
import SawoLogin from "sawo-react";
import "../Style/Login.css";
function Login() {
  const [Data, setData] = useState() 
  function sawoLoginCallback(payload) {
    console.log(payload);
    setData(payload) //send session to db
  }
  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required
    identifierType: "email", //required must be one of 'email','phone number
    // identifierType: "phone_number_sms", //required must be one of 'email','phone number
    apiKey: "0f067071-2de9-4edc-946a-1b1fc7eade3a", //required
    // apiKey: "20512c84-b9a0-412c-bfde-66de1a7fb7aa", //required
    containerHeight: "500px", //default
  };
  return (
    <div className="Login">
      {Data?<Redirect to="/placeDetails"></Redirect>:
      <div className="form">
        <SawoLogin config={sawoConfig} />
      </div>
}
    </div>
  );
}

export default Login;
