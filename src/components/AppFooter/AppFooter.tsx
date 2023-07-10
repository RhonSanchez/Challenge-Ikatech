import { FooterBrand } from "./FooterBrand/FooterBrand";
import { FooterLinks } from "./FooterLinks/FooterLinks";
import { FooterSponsors } from "./FooterSponsors/FooterSponsors";
import { Separator } from "../Separator/Separator";
import "./AppFooter.css";

export const AppFooter = () => {
  return (
    <footer>
      <FooterBrand />
      <FooterLinks />
      <Separator className="footer-separator" />
      <FooterSponsors />
    </footer>
  );
};
