import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../Style/Dash.css";
import SimpleMap from "../components/SimpleMap";
import { ReactMediaRecorder } from "react-media-recorder";

function Dashboard() {
  const [center, setCenter] = useState({
    lat: 33.1425314,
    lng: 89.9304523,
  });
  const GetLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCenter({ lat: latitude, lng: longitude });
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  };
  return (
    <div className="Dashboard">
      <div className="profile">
        <Form className="dash_form">
          <div className="aboutME">
            <img src="" alt="" />
            <h1>Name</h1>
          </div>
          <div className="aboutPlant">
            <input placeholder="Enter Plant Name" type="text" />
            <SimpleMap center={center} />
            <Button variant="dark" type="button" onClick={GetLocation}>
              Get Location
            </Button>
            <p>
              Your location is:latitutde:{center.lat} longitude:{center.lng}
            </p>
            <div className="record">
              <ReactMediaRecorder
                video
                render={({
                  status,
                  startRecording,
                  stopRecording,
                  mediaBlobUrl,
                }) => (
                  <div className="RecordButton">
                    <Button
                      className="rec"
                      variant="light"
                      onClick={startRecording}
                    >
                      Start Recording
                    </Button>
                    <Button
                      className="rec"
                      variant="light"
                      onClick={stopRecording}
                    >
                      Stop Recording
                    </Button>
                    <video
                      style={{ height: "300px", width: "300px" }}
                      src={mediaBlobUrl}
                      controls
                      autoPlay
                      loop
                    />
                  </div>
                )}
              />
            </div>
          </div>
          <Button variant="dark" type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Dashboard;
