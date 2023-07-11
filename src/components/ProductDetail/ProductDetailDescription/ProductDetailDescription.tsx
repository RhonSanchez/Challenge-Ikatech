import { useState } from "react";
import { Btn } from "../../Btn/Btn";
import { HeartIcon } from "../../icons/HeartIcon";
import "./ProductDetailDescription.css";

interface Props {
  imageSeleted: string;
}

const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

export const ProductDetailDescription = ({ imageSeleted = "" }: Props) => {
  const [isFavorite, setIsFovorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [seletedSize, setSeletedSize] = useState(0);

  const updateFavorite = () => {
    setIsFovorite(!isFavorite);
  };

  const selecSize = (size: number) => {
    setSeletedSize(size);
  };

  const updateIsAdded = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="product-detail-description">
      <h2>Zapatilla hombre pelikan</h2>
      <span className="product-detail-description-price">$00.000</span>
      <br />
      <h6 className="product-detail-description-code">
        Cod. de producto zap-005
      </h6>
      <h6 className="product-detail-description-text">Color</h6>
      <div className="product-detail-description-color-box">
        <img src={imageSeleted} alt="shoe" width={39} height={35} />
      </div>
      <div className="product-detail-description-content">
        <span className="product-detail-description-text">Talla</span>
        <div className="product-detail-description-sizes">
          {sizes.map((size) => (
            <div
              className={seletedSize === size ? "isActive" : "hvr-back-pulse"}
              key={size}
              onClick={() => selecSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <span className="product-detail-description-text ">
          <a className="hvr-fade-links" href="#">
            Guía de tallas
          </a>
        </span>
        <div
          className={`product-detail-description-actions ${
            isAdded ? "isAdded" : ""
          }`}
        >
          <Btn
            title={isAdded ? "Añadido" : "Añadir al carrito"}
            onClick={updateIsAdded}
          />
          <div
            className={isFavorite ? "isFavorite" : ""}
            onClick={updateFavorite}
          >
            <HeartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
