import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
import Header from "../components/Header";
import { useOutletContext } from "react-router-dom";
import "./Page.css"; // Import the CSS file
import Footer from "../components/Footer";
import QuoteForm from "../components/Quote/Form";

function QuotePage() {
  const context = useOutletContext();
  const isChinese = context.language !== 'en';

  return (
    <div className="dark-theme"> {/* Apply dark theme to the body */}
      <Header page="quote"/>
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default QuotePage;
