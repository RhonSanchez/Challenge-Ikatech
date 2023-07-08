import { Btn } from "./Btn";
import { HeartIcon } from "./icons/HeartIcon";

export const ProductDetail = () => {
  return (
    <>
      <section className="product-detail">
        <div className="product-detail-images">
          <span>HUSHPUPPIESCO / CALZADO / ZAPATILLA HOMBRE PELIKAN</span>
          <img
            src="./src/assets/shoe.jpg"
            alt="shoe"
            width={420}
            height={379}
          />
          <hr />
          <div className="product-detail-variety">
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={54}
              height={50}
            />
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={54}
              height={50}
            />
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={54}
              height={50}
            />
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={54}
              height={50}
            />
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={54}
              height={50}
            />
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={54}
              height={50}
            />
          </div>
        </div>
        <div className="product-detail-description">
          <h2>Zapatilla hombre pelikan</h2>
          <span className="product-detail-description-price">$00.000</span>
          <br />
          <h6 className="product-detail-description-code">Cod. de producto</h6>
          <h6 className="product-detail-description-text">Color</h6>
          <div className="product-detail-description-color-box">
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={39}
              height={35}
            />
          </div>
          <div className="product-detail-description-content">
            <span className="product-detail-description-text">Talla</span>
            <div className="product-detail-description-sizes">
              <div>5</div>
              <div>5.5</div>
              <div>6</div>
              <div>6.5</div>
              <div>7</div>
              <div>7.5</div>
              <div>8</div>
              <div>8.5</div>
              <div>9</div>
              <div>9.5</div>
            </div>
            <span className="product-detail-description-text">
              Guía de tallas
            </span>
            <div className="product-detail-description-actions">
              <Btn
                title="Añadir al carrito"
                onClick={() => {
                  console.log("hola mundo");
                }}
              />
              <HeartIcon />
            </div>
          </div>
        </div>
      </section>
      <section className="product-detail-info-container">
        <div className="product-detail-info">
          <h2>Detalles del producto</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            gravida porttitor enim, ac sagittis lorem sagittis at. Mauris vitae
            mi in leo consectetur pretium vitae pretium velit. Nam venenatis
            ipsum tellus, vel fringilla mauris ornare sit amet. Phasellus
            pulvinar tellus ac enim congue tempus. Nulla facilisi. Duis
            convallis lectus sem, id semper mauris tempus id. Mauris tincidunt
            nisl eu feugiat aliquam. Sed luctus et nibh id scelerisque. Aenean
            eu imperdiet dui, et rhoncus massa.
          </p>
        </div>
        <div className="product-detail-info">
          <h2>Tecnologías</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            gravida porttitor enim, ac sagittis lorem sagittis at. Mauris vitae
            mi in leo consectetur pretium vitae pretium velit. Nam venenatis
            ipsum tellus, vel fringilla mauris ornare sit amet.
          </p>
        </div>
      </section>
    </>
  );
};
