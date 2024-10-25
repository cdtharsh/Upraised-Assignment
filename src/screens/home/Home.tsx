import "./Home.css";
import logo from "../../assets/logo.svg";
import Button from "../../components/button/Button";

function Home() {
  const handleStartClick = () => {
    // Define the action to be taken when the button is clicked
    console.log("Start button clicked!");
    // You can add more logic here, such as navigating to another page
  };
  return (
    <div className="wrap_home_screen">
      <img src={logo} alt="logo" className="home_screen_logo"></img>
      <div className="home_screen_body">
        <h2 className="home_screen_title">Quiz</h2>
      </div>

      <Button
        className="home_screen_start"
        text="Start"
        action={handleStartClick}
      ></Button>
    </div>
  );
}

export default Home;
