import "./ProductDetailImages.css";

export const ProductDetailImages = () => {
  return (
    <div className="product-detail-images">
      <span>HUSHPUPPIESCO / CALZADO / ZAPATILLA HOMBRE PELIKAN</span>
      <div className="product-detail-main">
        <img
          className="product-detail-image-main"
          src="./src/assets/shoe.jpg"
          alt="shoe"
        />
        <hr className="separator-one" />
        <div className="product-detail-variety">
          <img src="./src/assets/shoe.jpg" alt="shoe" />
          <img src="./src/assets/shoe.jpg" alt="shoe" />
          <img src="./src/assets/shoe.jpg" alt="shoe" />
          <img src="./src/assets/shoe.jpg" alt="shoe" />
          <img src="./src/assets/shoe.jpg" alt="shoe" />
          <img src="./src/assets/shoe.jpg" alt="shoe" />
        </div>
      </div>
      <hr className="separator-two" />
    </div>
  );
};
