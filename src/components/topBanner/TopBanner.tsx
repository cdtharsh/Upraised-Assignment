import "./topbanner.css";

function TopBanner({ src = "" }) {
  return (
    <div>
      <img src={src} alt="top banner" className="top_banner" />
    </div>
  );
}

export default TopBanner;
