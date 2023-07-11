import { useProducts } from "../../hooks/useProduct";
import { SlidesProdcuts } from "../SlidesProducts/SlidesProdcuts";
import "./CompleteLookProducts.css";

export const CompleteLookProducts = () => {
  const { products } = useProducts();
  return (
    <>
      <section className="products-look">
        <div className="products-look-title">
          <h2>Completa tu look</h2>
        </div>
        <SlidesProdcuts products={products} />
      </section>
    </>
  );
};
