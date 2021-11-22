import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import "../Style/About.css";

function About() {
  return (
    <div className="About">
      <div className="firstHalfAbout">
        <Card className="Card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C5603AQHAyz3EfDiwqA/profile-displayphoto-shrink_400_400/0/1637592318604?e=1643241600&v=beta&t=5V4-Nx9gInsxH-GRVwWdN_td_cLvpBYpAmeLcU5wOxs"   />
          <Card.Body>
            <Card.Title>Pradyumn Rajak</Card.Title>
            <Card.Text>Frontend Developer | Ml and Al enthusiast</Card.Text>
            <ButtonGroup>
              <a href="https://www.linkedin.com/in/pradyumna-rajak-7a1077204/">
                <Button variant="light">
                  <Linkedin />
                </Button>
              </a>
              <a href="https://github.com/kunalcode12">
                <Button variant="light">
                  <GitHub />
                </Button>
              </a>
              <a href="https://twitter.com/">
                <Button variant="light">
                  <Twitter />
                </Button>
              </a>
            </ButtonGroup>
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/71265266?v=4"
          />
          <Card.Body>
            <Card.Title>Sugam Agrawal</Card.Title>
            <Card.Text>Full Stack Developer | Android Developer</Card.Text>
            <ButtonGroup>
              <a href="https://linkedin.com/in/sugam50">
                <Button variant="light">
                  <Linkedin />
                </Button>
              </a>
              <a href="https://github.com/sugam50">
                <Button variant="light">
                  <GitHub />
                </Button>
              </a>
              <a href="https://twitter.com/sugam50">
                <Button variant="light">
                  <Twitter />
                </Button>
              </a>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
      <div className="secondHalfAbout">
        <Card className="Card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.discordapp.com/attachments/912379186419753012/912413520346361876/imageonline-co-roundcorner_5.png"
          />
          <Card.Body>
            <Card.Title>Sourabh Soni</Card.Title>
            <Card.Text>Frontend Developer | techie | Code lover</Card.Text>
            <ButtonGroup>
              <a href="https://linkedin.com/">
                <Button variant="light">
                  <Linkedin />
                </Button>
              </a>
              <a href="https://github.com/">
                <Button variant="light">
                  <GitHub />
                </Button>
              </a>
              <a href="https://twitter.com/">
                <Button variant="light">
                  <Twitter />
                </Button>
              </a>
            </ButtonGroup>
          </Card.Body>
        </Card>
        <Card className="Card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.discordapp.com/attachments/912379186419753012/912402312704708748/imageonline-co-roundcorner.png"
          />
          <Card.Body>
            <Card.Title>Vishal Dangiwala</Card.Title>
            <Card.Text>Frontend Developer | techie | Code lover</Card.Text>
            <ButtonGroup>
              <a href="https://linkedin.com/vishal-dangiwala-60b5361a5/">
                <Button variant="light">
                  <Linkedin />
                </Button>
              </a>
              <a href="https://github.com/">
                <Button variant="light">
                  <GitHub />
                </Button>
              </a>
              <a href="https://twitter.com/">
                <Button variant="light">
                  <Twitter />
                </Button>
              </a>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default About;
