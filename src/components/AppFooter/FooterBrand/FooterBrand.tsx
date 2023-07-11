import { Separator } from "../../Separator/Separator";
import { FacebookIcon } from "../../icons/FacebookIcon";
import { InstagramIcon } from "../../icons/InstagramIcon";
import "./FooterBrand.css";

export const FooterBrand = () => {
  return (
    <div className="footer-brand">
      <h6>@hushpuppiesco</h6>
      <Separator />
      <div className="footer-icons ">
        <a className="hvr-fade-rrss" href="#">
          <FacebookIcon />
        </a>
        <a className="hvr-fade-rrss" href="#">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};
