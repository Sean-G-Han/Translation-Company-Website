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
    <Navbar className="bg-dark text-light footer mt-5">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/">
          <Image src={logo} style={{ height: "100px" }} />
        </Navbar.Brand>
        <div>
          <h5>{context.language === "en" ? "Company"  : "公司"}</h5>
          <p>
            {context.language === "en" ? "All rights reserved." : "保留所有权利"}
            <br/>
            {context.language === "en" ? "© 2018 Speedy Translation" : "© 2018 极速翻译"}
            <br/>
            UEN: 53383412X
          </p>
        </div>

        <div>
          <p>
            <h5>{context.language === "en" ? "Contacts"  : "联系"}</h5>
            {context.language === "en" ? "For enquiries, contact:"  : "如有疑问，请联系: "}
            <br/>
            Whatsapp: (+65) 9686 8187
            <br/>
            Email: example@email.com
          </p>
        </div>
        
        <div>
          <h5>{context.language === "en" ? "Socials"  : "社交"}</h5>
            {context.language === "en" ? "Follow us on:" : "关注我们:"}
            <br/>
            <h1>Dummy</h1>
        </div>
      </Container>
    </Navbar>
    <Navbar className="mt-5 footer-mobile">
    <Container className="d-flex justify-content-between">
        <div className="text-end">
          <p>
            {context.language === "en" ? "For enquiries, contact:"  : "如有疑问，请联系: "}
            <br/>
            Whatsapp: (+65) 9686 8187
            <br/>
            Email: example@email.com
          </p>
        </div>
        <div className="text-start">
          <p>
            {context.language === "en" ? "All rights reserved." : "保留所有权利"}
            <br/>
            {context.language === "en" ? "© 2018 Speedy Translation" : "© 2018 极速翻译"}
            <br/>
            UEN: 53383412X
          </p>
        </div>
      </Container>
    </Navbar>
  </>
  );
}

export default Footer;
