import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SavedNews from "../pages/SavedNews";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function AppRouter({ onLoginClick, onSearch, articles }) {
  return (
    <Router>
      <Header onLoginClick={onLoginClick} />
      <Routes>
        <Route
          path="/"
          element={<Home onSearch={onSearch} articles={articles} />}
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
