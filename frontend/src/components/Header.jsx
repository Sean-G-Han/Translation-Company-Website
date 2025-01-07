import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { Link, useOutletContext } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import PropTypes from "prop-types";
import "./Header.css"; // Import the CSS file

function Header({ page }) {

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
          <Navbar.Brand href="/" className="brand"> 
            <Image src={logo} style={{ width: "100px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div>
              <LanguageToggle/>
            </div>
            <Nav className="me-autor ">
              <Link to={"/"}
                className={`text-nowrap mx-auto ${page === "home" ? "active-link" : "inactive-link"}`}
              >
                {context.language === "en" ? "Home" : "主页"}
              </Link>
              <Link to={"/quote"}
                className={`text-nowrap mx-auto ${page === "quote" ? "active-link" : "inactive-link"}`}
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
Header.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Header;
