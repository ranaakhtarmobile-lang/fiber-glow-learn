import { useLocation } from "react-router-dom";
import BannerAd from "./BannerAd";

/** Shows a 728x90 banner below the navbar on all pages except homepage */
const PageBannerAd = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  return (
    <div className="container-content px-4 pt-20 pb-2">
      <BannerAd />
    </div>
  );
};

export default PageBannerAd;
