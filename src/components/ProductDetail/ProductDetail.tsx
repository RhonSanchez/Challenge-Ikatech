import { ProductDetailDescription } from "./ProductDetailDescription/ProductDetailDescription";
import { ProductDetailImages } from "./ProductDetailImages/ProductDetailImages";
import { ProductDetailInfo } from "./ProductDetailInfo/ProductDetailInfo";
import "./ProductDetail.css";

export const ProductDetail = () => {
  return (
    <>
      <section className="product-detail">
        <ProductDetailImages />
        <ProductDetailDescription />
      </section>
      <ProductDetailInfo />
    </>
  );
};
