import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Context } from "../App";

function LanguageToggle() {
  const [language, setLanguage] = useContext(Context); // Default language

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ch" : "en"));
  };

  return (
    <>
        <Button
            variant="dark"
            onClick={toggleLanguage}
            className="mx-4 my-2"
            style={{ whiteSpace: "nowrap" }}
            >
                {language === "en" ? "中文" : "English"}
        </Button>
    </>
  );
}

export default LanguageToggle;
