import { Product } from "../Product/Product";
import { ProductDTO } from "../../types/products";
import { useAnimationSlider } from "../../hooks/useAnimationSlider";
import { useDispatch } from "../../store";
import { setCart } from "../../store/cart";
import { useSelector } from "../../store";
import { selectCart } from "../../store/cart/selector";
import "./SlidesProducts.css";

interface Props {
  products: ProductDTO[];
  hideButton?: boolean;
}

export const SlidesProdcuts = ({ products, hideButton = false }: Props) => {
  const { containerRef, handleTransitionEnd } = useAnimationSlider();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const addProduct = (product: ProductDTO) => {
    dispatch(setCart(product));
  };

  const isAdded = (product: ProductDTO): boolean => {
    return cart.includes(product);
  };

  return (
    <div
      className="slides-products-container"
      ref={containerRef}
      onTransitionEnd={handleTransitionEnd}
    >
      {products.map((product, index) => (
        <div className="slide" key={index}>
          <Product
            product={product}
            hideButton={hideButton}
            isAdded={isAdded(product)}
            addProduct={addProduct}
          />
        </div>
      ))}
    </div>
  );
};
