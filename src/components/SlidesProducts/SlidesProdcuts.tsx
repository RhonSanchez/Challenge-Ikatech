import { Product } from "../Product/Product";
import "./SlidesProducts.css";

export const SlidesProdcuts = ({ hideButton = false }) => {
  return (
    <div className="slides-products-container">
      <Product hideButton={hideButton} />
      <Product hideButton={hideButton} />
      <Product hideButton={hideButton} />
      <Product hideButton={hideButton} />
    </div>
  );
};
