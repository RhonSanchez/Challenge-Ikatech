import { Separator } from "../../Separator/Separator";
import { FacebookIcon } from "../../icons/FacebookIcon";
import { InstagramIcon } from "../../icons/InstagramIcon";
import "./FooterBrand.css";

export const FooterBrand = () => {
  return (
    <div className="footer-brand">
      <h6>@hushpuppiesco</h6>
      <Separator />
      <div className="footer-icons">
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </div>
  );
};
