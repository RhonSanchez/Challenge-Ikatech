import { Search } from "../../Search/Search";
import "./FooterLinks.css";

export const FooterLinks = () => {
  return (
    <div className="footer-links">
      <div className="footer-group-links">
        <h6>Servicio al cliente</h6>
        <ul>
          <li>
            {" "}
            <a className="hvr-fade-links" href="#">
              Contáctenos
            </a>
          </li>
          <li>
            {" "}
            <a className="hvr-fade-links" href="#">
              Cambios y devoluciones
            </a>
          </li>
          <li>
            {" "}
            <a className="hvr-fade-links" href="#">
              Políticas de la tienda
            </a>
          </li>
          <li>
            {" "}
            <a className="hvr-fade-links" href="#">
              Políticas de datos
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-group-links">
        <h6>Mi cuenta</h6>
        <ul>
          <li>
            {" "}
            <a className="hvr-fade-links" href="#">
              Mis pedidos
            </a>
          </li>
          <li>
            {" "}
            <a className="hvr-fade-links" href="#">
              Mis devoluciones
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-group-links">
        <h6>Recursos</h6>
        <ul>
          <li>
            {" "}
            <a className="hvr-fade-links" href="#">
              Tiendas
            </a>
          </li>
          <li>
            {" "}
            <a className="hvr-fade-links" href="#">
              Devoluciones
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-group-links">
        <h6>Newsletter</h6>
        <p>Regístrate para ser el primero en recibir nuestras noticias</p>
        <Search title="e-mail" />
      </div>
    </div>
  );
};
