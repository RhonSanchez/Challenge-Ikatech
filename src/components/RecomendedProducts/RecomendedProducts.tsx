import { SlidesProdcuts } from "../SlidesProducts/SlidesProdcuts";
import "./RecomendedProducts.css";
import "../ProductDetail/ProductDetailInfo/ProductDetailInfo.css";
import { Separator } from "../Separator/Separator";

export const RecomendedProducts = () => {
  return (
    <>
      <section className="products-recomended">
        <div className="product-detail-info">
          <h2>Productos recomendados</h2>
          <Separator />
        </div>
        <SlidesProdcuts hideButton />
      </section>
    </>
  );
};
