import { Search } from "../../Search/Search";
import "./FooterLinks.css";

export const FooterLinks = () => {
  return (
    <div className="footer-links">
      <div className="footer-group-links">
        <h6>Servicio al cliente</h6>
        <ul>
          <li>Contáctenos</li>
          <li>Cambios y devoluciones</li>
          <li>Políticas de la tienda</li>
          <li>Políticas de datos</li>
        </ul>
      </div>
      <div className="footer-group-links">
        <h6>Mi cuenta</h6>
        <ul>
          <li>Mis pedidos</li>
          <li>Mis devoluciones</li>
        </ul>
      </div>
      <div className="footer-group-links">
        <h6>Recursos</h6>
        <ul>
          <li>Tiendas</li>
          <li>Devoluciones</li>
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
