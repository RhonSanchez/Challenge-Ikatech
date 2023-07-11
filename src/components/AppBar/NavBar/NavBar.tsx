import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a className="hvr-fade" href="#">
            Directorio de tiendas
          </a>
        </li>
        <li>
          <a className="hvr-fade" href="#">
            Servicio al cliente
          </a>
        </li>
        <li>
          <a className="hvr-fade" href="#">
            Mi cuenta
          </a>
        </li>
      </ul>
    </nav>
  );
};
