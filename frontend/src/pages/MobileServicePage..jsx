import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Carousel } from 'react-bootstrap';
import Header from "../components/Header";
import "./Page.css"; // Import the CSS file
import ServiceSlide from "../components/ServiceSlide";
import logos from "../assets/icons/logos";
import { useOutletContext } from "react-router-dom";
import Footer from "../components/Footer";

function MServePage() {
  const context = useOutletContext();
  return (
    <div className="dark-theme"> {/* Apply dark theme to the body */}
      <Header page='services'/>
      <div className="container d-flex flex-column align-items-center mt-5">
        <Card className="text-center bg-dark text-light" style={{ borderWidth: "0px", borderColor: "black", width: "80vw"}}>
            <Card.Title className="m-3" style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {context.language === "en" ? "What We Translate" : "我们翻译的内容"}
            </Card.Title>
          <Carousel>
            <Carousel.Item>
                <div className="d-flex justify-content-around flex-wrap px-5">
                  <ServiceSlide imgLink={logos.householdTrans} enText="Household Transcript" chText="户口簿" />
                  <ServiceSlide imgLink={logos.marriageCert} enText="Marriage Certificate" chText="结婚证书" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around flex-wrap px-5">
                  <ServiceSlide imgLink={logos.birthCert} enText="Birth Certificate" chText="出生证明" />
                  <ServiceSlide imgLink={logos.graduationCert} enText="Graduation Certificate" chText="毕业证书" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around flex-wrap px-5">
                  <ServiceSlide imgLink={logos.immunizationCert} enText="Immunization Cert" chText="免疫证书" />
                  <ServiceSlide imgLink={logos.divorceCert} enText="Divorce Certificate" chText="离婚证书" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around flex-wrap px-5">
                  <ServiceSlide imgLink={logos.deathCert} enText="Death Certificate" chText="死亡证明" />
                  <ServiceSlide imgLink={logos.norminalCert} enText="Norminal Certificate" chText="名义证书" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around flex-wrap px-5">
                  <ServiceSlide imgLink={logos.skillCert} enText="Skill Certificate" chText="技能证书" />
                  <ServiceSlide imgLink={logos.buisnessProf} enText="Business Profile" chText="商业简介" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-around flex-wrap px-5">
                  <ServiceSlide imgLink={logos.drivingLic} enText="Driving License" chText="驾驶执照" />
                  <ServiceSlide imgLink={logos.indendityCard} enText="Identity Card" chText="身份证" />
                </div>
            </Carousel.Item>
          </Carousel>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default MServePage;
