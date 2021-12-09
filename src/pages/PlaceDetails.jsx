import React, { useState } from "react";
import "../Style/PlaceDetails.css";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { Redirect } from "react-router";
// import SimpleMap from "../components/SimpleMap";

function PlaceDetails() {
  // eslint-disable-next-line
  const [Data, setData] = useState() //get session from db
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
    <>
    {Data?
    <div className="PlaceDetails">
      <h1>Welcome! Add new place here</h1>
      <Form className="form">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter FullName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupFile">
          <Form.Label>Enter File</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMap">
          <Button variant="dark" type="button" onClick={GetLocation}>
            Get Location
          </Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupMap">
          {/* <SimpleMap center={center} /> */}
          long : {center.lng}
          <br/>
          lat : {center.lat}
        </Form.Group>
        <ButtonGroup className="ButtonGroup">
          <Button variant="dark" type="submit">
            Submit
          </Button>
          <Button variant="dark" type="reser">
            Reset
          </Button>
        </ButtonGroup>
      </Form>
    </div>:<Redirect to='/login'></Redirect>}
    </>
  );
}

export default PlaceDetails;
