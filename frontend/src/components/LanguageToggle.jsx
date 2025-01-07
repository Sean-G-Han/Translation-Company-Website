import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useOutletContext } from "react-router-dom";

function LanguageToggle() {
  const context = useOutletContext();
  console.log(context)

  function toggleLanguage() {
    context.setLanguage(context.language === 'en' ? 'ch' : 'en')
  }

  return (
    <>
      <div className="d-flex justify-content-center mx-auto my-auto" style={{ width:'100px',}}>
        <Button
            variant="dark"
            onClick={toggleLanguage}
            style={{ 
              width:'75px',
              whiteSpace: "nowrap",
            }}
            >
                {context.language === "en" ? "中文" : "English"}
        </Button>
      </div>
    </>
  );
}

export default LanguageToggle;
