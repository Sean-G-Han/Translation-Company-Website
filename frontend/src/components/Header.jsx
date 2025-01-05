import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { Link, useOutletContext } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
function Header() {

  const context = useOutletContext()

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
        style={{ textAlign: "center" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} style={{ width: "100px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <LanguageToggle/>
            <Nav className="me-autor">
              <Link to={"/"}
                className="text-nowrap mx-auto"
                style={{ fontSize: "20px", color: "grey", textDecoration: "none", padding: "10px 15px", width: '120px'}}
              >
                {context.language === "en" ? "Home" : "主页"}
              </Link>
              <Link to={"/quote"}
                className="text-nowrap mx-auto"
                style={{ fontSize: "20px", color: "grey", textDecoration: "none", padding: "10px 15px", width: '120px' }}
              >
                {context.language === "en" ? "Quotation" : "行情"}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
/*
        <Container>
          <LanguageToggle/>
        </Container>
*/
export default Header;
