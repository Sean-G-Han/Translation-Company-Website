import "bootstrap/dist/css/bootstrap.min.css";
import "./Page.css"; // Import the CSS file
import { useEffect, useState } from "react";
import MServePage from "./MobileServicePage.";
import DServePage from "./DesktopServicePage";

function ServePage() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MServePage /> : <DServePage />}
    </>
  );
}

export default ServePage;
