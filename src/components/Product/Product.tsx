import { ProductDTO } from "../../types/products";
import { Btn } from "../Btn/Btn";
import { Separator } from "../Separator/Separator";
import "./Product.css";

interface Props {
  product: ProductDTO;
  hideButton?: boolean;
  isAdded: boolean;
  addProduct: (product: ProductDTO) => void;
}

export const Product = ({
  product,
  hideButton = false,
  isAdded = false,
  addProduct,
}: Props) => {
  const handleClick = () => {
    if (!isAdded) {
      addProduct(product);
    }
  };

  return (
    <>
      <article className={isAdded ? "product isAdded" : "product"}>
        <div className="product-info">
          <img
            src={`./public/${product.foto}`}
            alt="shoe"
            width={146}
            height={134}
          />
          <div className="prouduct-galery">
            <img
              src={`./public/${product.foto}`}
              alt="shoe"
              width={40}
              height={37}
            />
            <img
              src={`./public/${product.foto}`}
              alt="shoe"
              width={40}
              height={37}
            />
            <img
              src={`./public/${product.foto}`}
              alt="shoe"
              width={40}
              height={37}
            />
          </div>
          <h5 className="product-title">{product.nombre}</h5>
          <h4 className="product-price">${product.precio}</h4>
        </div>
        {hideButton ? (
          <Separator className="product-separator" />
        ) : (
          <Btn
            title={isAdded ? "Agregado" : "Agregar al carrito"}
            className="btn-block"
            onClick={handleClick}
          />
        )}
      </article>
    </>
  );
};
