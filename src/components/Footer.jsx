import React from 'react';
import '../Style/Footer.css'
import { GitHub, Linkedin, Twitter} from "react-feather";
import {Button, ButtonGroup } from "react-bootstrap";

function Footer() {
    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-4 footer_bar">
        <div className="container text-center">
         <div>
         <ButtonGroup>
              <a href="/">
                 <Button variant="light">
                  <Linkedin />
                 </Button>
                </a>
                <a href="https://github.com/Sugam50/Travelogue">
                <Button variant="light">
                  <GitHub />
                </Button>
                </a>
                <a href="/">
                <Button variant="light">
                  <Twitter />
                </Button>
                </a>
        </ButtonGroup>
        </div>
          <small>Copyright &copy; travelogue | 2021</small>
        </div>
      </footer>
    )
}

export default Footer
