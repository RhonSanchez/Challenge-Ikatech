import { Search } from "./Search";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import { LockIcon } from "./icons/LockIcon";

export const AppBar = () => {
  return (
    <>
      <div className="appbar-offer">
        <span>Hot sale -30% en sandalias</span>
      </div>
      <nav className="appbar-nav">
        <ul>
          <li>Directorio de tiendas</li>
          <li>Servicio al cliente</li>
          <li>Mi cuenta</li>
        </ul>
      </nav>
      <header className="appbar-header">
        <div>
          <div className="appbar-header-images">
            <img src="./src/assets/dog.webp" alt="Dog" width={60} height={70} />
            <img
              src="./src/assets/brand.webp"
              alt="Brand"
              width={239}
              height={32}
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
        <div className="appbar-header-shipping">
          <Search title="Buscar" />
          <span className="appbar-header-free-shipping">
            Envío gratis para pedidos superiores a $300.000
          </span>
          <span className="appbar-header-shopping">
            {" "}
            <LockIcon /> Carrito 0
          </span>
        </div>
      </header>
    </>
  );
};
