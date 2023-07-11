import { ProductDetailDescription } from "./ProductDetailDescription/ProductDetailDescription";
import { ProductDetailImages } from "./ProductDetailImages/ProductDetailImages";
import { ProductDetailInfo } from "./ProductDetailInfo/ProductDetailInfo";
import "./ProductDetail.css";
import { useState } from "react";

const images = [
  "./src/assets/10.jpg",
  "./src/assets/11.jpg",
  "./src/assets/13.jpg",
  "./src/assets/14.jpg",
  "./src/assets/15.jpg",
  "./src/assets/16.jpg",
];

export const ProductDetail = () => {
  const [imageSeleted, setImageSeleted] = useState("./src/assets/1.jpg");

  const selecImage = (image: string) => {
    setImageSeleted(image);
  };
  return (
    <>
      <section className="product-detail">
        <ProductDetailImages
          images={images}
          imageSeleted={imageSeleted}
          selecImage={selecImage}
        />
        <ProductDetailDescription imageSeleted={imageSeleted} />
      </section>
      <ProductDetailInfo />
    </>
  );
};
