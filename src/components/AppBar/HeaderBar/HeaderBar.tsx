import { Search } from "../../Search/Search";
import { LockIcon } from "../../icons/LockIcon";
import { useSelector } from "../../../store";
import { selectCartLength } from "../../../store/cart/selector";
import "./HeaderBar.css";

export const HeaderBar = () => {
  const cartLength = useSelector(selectCartLength);
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
            <li>
              <a className="hvr-fade-links" href="#">
                Hombre
              </a>
            </li>
            <li>
              <a className="hvr-fade-links" href="#">
                Mujer
              </a>
            </li>
            <li>
              <a className="hvr-fade-links" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hvr-fade-links" href="#">
                Hitoria
              </a>
            </li>
            <li>
              <a className="hvr-fade-links" href="#">
                Tienda
              </a>
            </li>
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
          <LockIcon /> Carrito {cartLength}
        </span>
      </div>
    </header>
  );
};
