import "./Home.css";
import logo from "../../../assets/logo.svg";

function Home() {
  return (
    <div className="wrap_home_screen">
      <img src={logo} alt="logo" className="home_screen_logo"></img>
    </div>
  );
}

export default Home;
