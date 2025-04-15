import "./App.css";
import { useState, useEffect } from "react";
import AppRouter from "../../routes/AppRouter";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import mockNews from "../../utils/mockNews";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const closeAllModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const [filteredArticles, setFilteredArticles] = useState([]);

  const handleSearch = (query) => {
    const results = mockNews.filter((article) => {
      const searchText = query.toLowerCase();
      return (
        article.title.toLowerCase().includes(searchText) ||
        article.description.toLowerCase().includes(searchText)
      );
    });

    setFilteredArticles(results);
  };

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeAllModals();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="app">
      <AppRouter
        onLoginClick={() => {
          console.log("Login modal should open");
          setIsLoginOpen(true);
        }}
        onSearch={handleSearch}
        articles={filteredArticles}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeAllModals}
        onSwitch={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeAllModals}
        onSwitch={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </div>
  );
}

export default App;
