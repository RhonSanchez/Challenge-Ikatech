import { Search } from "../../Search/Search";
import { LockIcon } from "../../icons/LockIcon";
import "./HeaderBar.css";

export const HeaderBar = () => {
  return (
    <header className="headerbar">
      <div>
        <div className="headerbar-images">
          <img
            className="headerbar-images-dog"
            src="./src/assets/dog.webp"
            alt="Dog"
          />
          <img
            className="headerbar-images-brand"
            src="./src/assets/brand.webp"
            alt="Brand"
          />
        </div>
        <nav>
          <ul>
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Blog</li>
            <li>Hitoria</li>
            <li>Tienda</li>
          </ul>
        </nav>
      </div>
      <div className="headerbar-shipping">
        <Search title="Buscar" />
        <span className="headerbar-free-shipping">
          Envío gratis para pedidos superiores a $300.000
        </span>
        <span className="headerbar-shopping">
          {" "}
          <LockIcon /> Carrito 0
        </span>
      </div>
    </header>
  );
};
