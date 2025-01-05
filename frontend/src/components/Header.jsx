import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { Context } from "../App";
import LanguageToggle from "./LanguageToggle";

function Header() {
  const [language] = useContext(Context); // Default language

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
        style={{ textAlign: "center" }}
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex justify-content-center">
            <Image src={logo} style={{ width: "100px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="text-center">
            <Nav className="me-auto w-100 justify-content-center">
              <Nav.Link
                href="#home"
                style={{ fontSize: "20px", padding: "10px 15px" }}
              >
                {language === "en" ? "Home" : '主页'}
              </Nav.Link>
              <Nav.Link
                href="#about"
                style={{ fontSize: "20px", padding: "10px 15px" }}
              >
                {language === "en" ? "About" : '关于'}
              </Nav.Link>
              <Nav.Link
                href="#quote"
                style={{ fontSize: "20px", padding: "10px 15px" }}
              >
                {language === "en" ? "Quotation" : '行情'}
              </Nav.Link>
            </Nav>
            <div className="d-flex justify-content-center mt-3">
              <LanguageToggle/>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
