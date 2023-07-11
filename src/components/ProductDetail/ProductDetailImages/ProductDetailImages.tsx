import { Separator } from "../../Separator/Separator";
import "./ProductDetailImages.css";

interface Props {
  images: string[];
  imageSeleted: string;
  selecImage: (img: string) => void;
}

export const ProductDetailImages = ({
  images = [],
  imageSeleted = "",
  selecImage,
}: Props) => {
  return (
    <div className="product-detail-images">
      <span>HUSHPUPPIESCO / CALZADO / ZAPATILLA HOMBRE PELIKAN</span>
      <div className="product-detail-main">
        <img
          className="product-detail-image-main"
          src={imageSeleted}
          alt="shoe"
        />
        <Separator className="separator-one" />
        <div className="product-detail-variety">
          {images.map((img, index) => (
            <div
              className="hvr-fade-img"
              key={index}
              onClick={() => selecImage(img)}
            >
              <img src={img} />
            </div>
          ))}
        </div>
      </div>
      <Separator className="separator-two" />
    </div>
  );
};
