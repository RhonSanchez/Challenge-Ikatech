import { ProductDetailDescription } from "./ProductDetailDescription/ProductDetailDescription";
import { ProductDetailImages } from "./ProductDetailImages/ProductDetailImages";
import { ProductDetailInfo } from "./ProductDetailInfo/ProductDetailInfo";
import "./ProductDetail.css";
import { useState } from "react";

const images = [
  "./public/10.jpg",
  "./public/11.jpg",
  "./public/13.jpg",
  "./public/14.jpg",
  "./public/15.jpg",
  "./public/16.jpg",
];

export const ProductDetail = () => {
  const [imageSeleted, setImageSeleted] = useState("./public/1.jpg");

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
