import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import "./Page.css"; // Import the CSS file
import Footer from "../components/Footer";
import AboutUsPage from "../components/Home/AboutUsPage";
import ServePage from "../components/Home/ServicePage";

function HomePage() {
  return (
    <div className="dark-theme"> {/* Apply dark theme to the body */}
      <Header page='home'/>
      <AboutUsPage />
      <ServePage />
      <Footer />
    </div>
  );
}

export default HomePage;
