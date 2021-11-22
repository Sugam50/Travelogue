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
          Plantify is a Tool to help others and Environment.This Project motivates
          others to plant more and more trees and those who don't have time can also contribute towards green revolution
          .Just by donationg small amount to people who are willing to plant more and more plants....<br />
          The fun part is we can save our plant and help others simultaneously.{" "}
          <ul>
            <li>
              Example: Person A have money but dont have time to give back to
              the nature, here comes person b who has time but want to earn
              money. So A can donate the money through our Website and If B
              wants money he can do this by planting a tree and recording the
              video of that and submit to website for review phase if review got
              pass B can got money that A has donated.
            </li>
            <li>
              In this way A is helping B as well as Nature in the same time.
            </li>
          </ul>
        </p>
      </div>
      <div className="reg_cards">
        <Card className="card-style">
          <Card.Img
            className="card-img-style"
            variant="top"
            src="https://cdn.discordapp.com/attachments/900789323908153437/901089190966591490/donate.png"
          />
          <Card.Body>
            <Card.Title>Want to plant </Card.Title>
            <Card.Text>
           Want to plant trees and also earn some money on the way but wondering how ?.Here is the good chance register now and know more. 
            </Card.Text>
            <Link className="card-plant-btn" to="/login">
              <ArrowRightCircle /> know more
            </Link>
          </Card.Body>
        </Card>
        <Card className="card-style">
          <Card.Img
            className="card-img-style"
            variant="top"
            src="https://cdn.discordapp.com/attachments/900789323908153437/901090177760526387/Untitled.png"
          />
          <Card.Body>
            <Card.Title>Want to Donate</Card.Title>
            <Card.Text>
            don't have time to look after the nature mother .Contribute to the well being of our mother nature , tap the button to know more. 
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
            <h1>Trees planted</h1>
            <CountUp start={0} end={150} duration={3} />
          </div>
          <div className="data">
            <h1>Donors</h1>
            <CountUp start={0} end={80} duration={7} />
          </div>
          <div className="data">
            <h1>Planters</h1>
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
