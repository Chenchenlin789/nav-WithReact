import "../App.css";

import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Speisenkarte</Link>
        </li>
        <li>
          <Link to="/Kontakt">Kontakt</Link>
        </li>
        <li>
          <Link to="/Time"> Öffnungszeiten</Link>
        </li>
        <li>
          <Link to="/Galerie">Galerie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
