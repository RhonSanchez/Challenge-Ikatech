import { SlidesProdcuts } from "../SlidesProducts/SlidesProdcuts";
import { Separator } from "../Separator/Separator";
import { useProducts } from "../../hooks/useProduct";
import "./RecomendedProducts.css";
import "../ProductDetail/ProductDetailInfo/ProductDetailInfo.css";

export const RecomendedProducts = () => {
  const { products } = useProducts();
  return (
    <>
      <section className="products-recomended">
        <div className="product-detail-info">
          <h2>Productos recomendados</h2>
          <Separator />
        </div>
        <SlidesProdcuts products={products} hideButton />
      </section>
    </>
  );
};
