import "./Home.css";
import logo from "../../assets/logo.svg";

function Home() {
  return (
    <div className="wrap_home_screen">
      <img src={logo} alt="logo" className="home_screen_logo"></img>
      <div className="home_screen_body">
        <h2 className="home_screen_title">Quiz</h2>
      </div>

      <button className="home_screen_start" title="Start"></button>
    </div>
  );
}

export default Home;
