import "./App.css";
import * as React from "react";

const translations = {
  en: {
    hello: "Hello!",
    welcome: "Welcome to our app!",
  },
  es: {
    hello: "¡Hola!",
    welcome: "¡Bienvenido a nuestra aplicación!",
  },
  fr: {
    hello: "Bonjour !",
    welcome: "Bienvenue dans notre application !",
  },
  de: {
    hello: "Hallo!",
    welcome: "Willkommen in unserer App!",
  },
};

const languageContext = React.createContext({
  language: "en",
  changeLanguage: () => {},
  translation: (key) => key,
});

function LanguageProvider({ children }) {
  const [language, setLanguage] = React.useState("en");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const translation = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <languageContext.Provider value={{ language, changeLanguage, translation }}>
      {children}
    </languageContext.Provider>
  );
}

function LanguageSwitcher() {
  const { language, changeLanguage } = React.useContext(languageContext);

  return (
    <div>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}

function Greeting() {
  const { translation } = React.useContext(languageContext);

  return (
    <div>
      <h1>{translation("hello")}</h1>
      <p>{translation("welcome")}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <LanguageProvider>
        <LanguageSwitcher />
        <Greeting />
      </LanguageProvider>
    </div>
  );
}
