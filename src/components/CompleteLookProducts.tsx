import { Product } from "./Product";

export const CompleteLookProducts = () => {
  return (
    <>
      <section className="products-look">
        <div className="products-look-title">
          <h2>Completa tu look</h2>
        </div>
        <div className="slides-products-container">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </>
  );
};
