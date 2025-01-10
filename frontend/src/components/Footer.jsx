import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useOutletContext } from "react-router-dom";
import "./Footer.css"; // Import the CSS file
import logo from "../assets/logo.png";
import { Image } from "react-bootstrap";

function Footer() {
  const context = useOutletContext();

  return (
    <>
    <Navbar className="bg-dark text-light mt-5">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/" className="mobile-gone">
          <Image src={logo} style={{ height: "100px" }} />
        </Navbar.Brand>
        <div className="mobile-small">
          <div className="mx-3">
            <h5>{context.language === "en" ? "Company"  : "公司"}</h5>
            <p>
              {context.language === "en" ? "All rights reserved." : "保留所有权利"}
              <br/>
              {context.language === "en" ? "© 2018\nSpeedy Translation Service" : "© 2018 极速翻译"}
              <br />
              UEN: 53383412X
            </p>
          </div>

          <div className="mx-3">
            <h5>{context.language === "en" ? "Contacts"  : "联系"}</h5>
            <strong>{"Whatsapp: "}</strong>
            (+65) 9686 8187
            <br/>
            <strong>{"Email: "}</strong>
            {import.meta.env.VITE_OUR_EMAIL}
          </div>

        </div>
      </Container>
    </Navbar>
  </>
  );
}

export default Footer;
