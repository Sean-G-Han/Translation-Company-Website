import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import PropTypes from 'prop-types';
import "./ServiceSlide.css"

function ServiceSlide({ imgLink, chText, enText }) {
  const context = useOutletContext();

  return (
    <div className="py-3 service-slide">
      <div className="service-slide-image position-relative" style={{minHeight: '170px'}}>
        <Image src={imgLink} className='position-absolute bottom-0 start-50 translate-middle-x' style={{width: '10vw'}}/>
      </div>
      <div
        className="service-slide-text"
        style={{
          fontSize: "1.25rem",
        }}
      >
        <p>{context.language === "en" ? enText : chText}</p>
      </div>
    </div>
  );
}
ServiceSlide.propTypes = {
  imgLink: PropTypes.string.isRequired,
  chText: PropTypes.string.isRequired,
  enText: PropTypes.string.isRequired,
};

export default ServiceSlide;
