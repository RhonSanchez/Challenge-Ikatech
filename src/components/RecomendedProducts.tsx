import { Product } from "./Product";

export const RecomendedProducts = () => {
  return (
    <>
      <section className="products-recomended">
        <div className="product-detail-info">
          <h2>Productos recomendados</h2>
          <hr />
        </div>
        <div className="slides-products-container">
          <Product hideButton />
          <Product hideButton />
          <Product hideButton />
          <Product hideButton />
        </div>
      </section>
    </>
  );
};
