import { ProductDetailDescription } from "./ProductDetailDescription/ProductDetailDescription";
import { ProductDetailImages } from "./ProductDetailImages/ProductDetailImages";
import { ProductDetailInfo } from "./ProductDetailInfo/ProductDetailInfo";
import "./ProductDetail.css";
import { useState } from "react";

const images = [
  "https://i.ibb.co/SPn3CPP/1.jpg",
  "https://i.ibb.co/gyRNbdH/11.jpg",
  "https://i.ibb.co/qRmzWH3/13.jpg",
  "https://i.ibb.co/X222hBN/14.jpg",
  "https://i.ibb.co/C0wG9pL/15.jpg",
  "https://i.ibb.co/0JpvSNy/16.jpg",
];

export const ProductDetail = () => {
  const [imageSeleted, setImageSeleted] = useState(
    "https://i.ibb.co/SPn3CPP/1.jpg"
  );

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
