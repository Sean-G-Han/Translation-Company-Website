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
        <Button
            variant="dark"
            className="my-2"
            onClick={toggleLanguage}
            style={{ 
              width:'120px',
              whiteSpace: "nowrap",
            }}
            >
                {context.language === "en" ? "中文" : "English"}
        </Button>
    </>
  );
}

export default LanguageToggle;
