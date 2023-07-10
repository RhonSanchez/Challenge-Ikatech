import { Btn } from "../../Btn/Btn";
import { HeartIcon } from "../../icons/HeartIcon";
import "./ProductDetailDescription.css";

export const ProductDetailDescription = () => {
  return (
    <div className="product-detail-description">
      <h2>Zapatilla hombre pelikan</h2>
      <span className="product-detail-description-price">$00.000</span>
      <br />
      <h6 className="product-detail-description-code">Cod. de producto</h6>
      <h6 className="product-detail-description-text">Color</h6>
      <div className="product-detail-description-color-box">
        <img src="./src/assets/shoe.jpg" alt="shoe" width={39} height={35} />
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
        <span className="product-detail-description-text">Guía de tallas</span>
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
  );
};
