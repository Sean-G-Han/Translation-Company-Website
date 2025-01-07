import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { useOutletContext } from "react-router-dom";
import "./Footer.css"; // Import the CSS file

function Footer() {
  const context = useOutletContext();

  return (
    <Navbar
      className="bg-dark text-light fixed-bottom footer"
      style={{ textAlign: "center", height: "80px" }}
    >
      <Container className="position-relative">
        {/* Logo */}
        <Navbar.Brand href="/" className="text-light">
          <Image src={logo} style={{ height: "70px" }} />
        </Navbar.Brand>

        {/* Footer Text */}
        <div className="text-center position-absolute bottom-0 end-0">
          <p>
            {context.language === "en" ? " All rights reserved." : " 保留所有权利。"}
            <br />
            {context.language === "en" ? " © 2025 Speedy Translation Services" : " © 2025 极速翻译服务"}
          </p>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
