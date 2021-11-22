import React from "react";
import Crousel from "../components/Crousel";
import { ArrowRightCircle } from "react-feather";
import "../Style/Home.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import CountUp from "react-countup";
import About from "./About";

function Home() {
  return (
    <div className="Home">
      <Crousel />
      <div className="Intro" id="Intro">
        <h1> About Our project</h1>
        <p>
          Travelogue is a website to help you get information about all places
          to visit in your city or anywhere in the world.We are here to overcome
          the problem of lack of knowledge of places to visit in a city.So here
          is the solution for it the one who visits the places can upload
          details here and others can see a list of all places together of the
          desired city{" "}
          <ul>
            <li>
              Example: Lets suppose you visit to a Delhi.So you'll search best
              places to visit through various sites so instead that our site
              will contain a list and pictures of all places to visit which are
              uploaded by the local people who are familiar with the places.
            </li>
          </ul>
        </p>
      </div>
      <div className="reg_cards">
        <Card className="card-style Card">
          <Card.Img
            className="card-img-style"
            variant="top"
            src="https://i.pinimg.com/originals/b4/bb/60/b4bb60012e3c239b097a1e34dc6697aa.jpg"
          />
          <Card.Body>
            <Card.Title>Add Places in your city</Card.Title>
            <Card.Text>
              Are you a wanderer? Want to add places in you city?
              Add here to help others to know your city well
            </Card.Text>
            <Link className="card-plant-btn" to="/login">
              <ArrowRightCircle /> know more
            </Link>
          </Card.Body>
        </Card>
        <Card className="card-style Card">
          <Card.Img
            className="card-img-style"
            variant="top"
            src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Moraine-Lake-2560-x-1440-Wallpaper.jpg"
          />
          <Card.Body>
            <Card.Title>Search for places</Card.Title>
            <Card.Text>
              Want information about places in you city? Here is the
              list for must visit amazing places 
            </Card.Text>
            <Link className="card-donate-btn" to="/donor">
              <ArrowRightCircle /> know more
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="Overlay">
        <div className="bg">
          <div className="data">
            <h1>Visitors</h1>
            <CountUp start={0} end={150} duration={3} />
          </div>
          <div className="data">
            <h1>Total places added</h1>
            <CountUp start={0} end={80} duration={7} />
          </div>
          <div className="data">
            <h1>Wanderers</h1>
            <CountUp start={0} end={30} duration={7} />
          </div>
        </div>
      </div>
      <div className="Team" id="Team">
        <h1> Team Members</h1>
        <div className="Members">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Home;
