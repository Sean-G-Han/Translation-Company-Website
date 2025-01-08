import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import "./Page.css"; // Import the CSS file
import Footer from "../components/Footer";
import QuoteForm from "../components/Quote/Form";

function QuotePage() {

  return (
    <div className="dark-theme"> {/* Apply dark theme to the body */}
      <Header page="quote"/>
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default QuotePage;
