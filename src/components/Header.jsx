import "./Header.css";

export const Header = () => {
  return (
    <header className="header-container">
      <nav className="nav">
        <ul className="navList">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Episode</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
