import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Root() {
    const [language, setLanguage] = useState('en')
    return (
        <>
            <Outlet context={{language, setLanguage}}/>
        </>
    );
}

export default Root;
