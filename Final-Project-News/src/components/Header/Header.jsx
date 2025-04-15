import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <h1>News Explorer</h1>
      <Navigation />
      <button className="header__login-button" onClick={onLoginClick}>
        Sign In
      </button>
    </header>
  );
}

export default Header;
