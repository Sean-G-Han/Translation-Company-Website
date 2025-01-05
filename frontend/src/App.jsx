import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import React, {useState} from 'react'

export const Context = React.createContext();

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <Context.Provider value={[language, setLanguage]}>
      <Header />
    </Context.Provider>
  )
}

export default App
