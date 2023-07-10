import { Btn } from "./Btn/Btn";

export const Product = ({ hideButton = false }) => {
  return (
    <>
      <article className="product">
        <div className="product-info">
          <img
            src="./src/assets/shoe.jpg"
            alt="shoe"
            width={146}
            height={134}
          />
          <div className="prouduct-galery">
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={40}
              height={37}
            />
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={40}
              height={37}
            />
            <img
              src="./src/assets/shoe.jpg"
              alt="shoe"
              width={40}
              height={37}
            />
          </div>
          <h5 className="product-title">Zapatillas Hombre Pelikan</h5>
          <h4 className="product-price">$00.000</h4>
        </div>
        {hideButton ? (
          <hr className="product-separator" />
        ) : (
          <Btn
            title="Agregar al carrito"
            className="btn-block"
            onClick={() => console.log("Producto agregado")}
          />
        )}
      </article>
    </>
  );
};
