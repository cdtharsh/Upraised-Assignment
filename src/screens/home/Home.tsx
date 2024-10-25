// Home.tsx

import "./Home.css";
import logo from "../../assets/logo.svg";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import getQuestionService from "../../services/getQuestionService";

function Home() {
  const navigate = useNavigate();
  const { setQuestions, setTotalQuestionCount } = useAppContext();

  async function getQuestions() {
    const responseData = await getQuestionService();

    setQuestions(responseData);
    setTotalQuestionCount(responseData?.length || 0); // Fixed 'length' typo

    if (responseData?.length > 0) {
      navigate("/question/1", { replace: true });
    }
  }

  return (
    <div className="wrap_home_screen">
      <img src={logo} alt="logo" className="home_screen_logo" />
      <div className="home_screen_body">
        <h2 className="home_screen_title">Quiz</h2>
      </div>

      <Button
        className="home_screen_start"
        text="Start"
        action={getQuestions} // Call the function on button click
      />
    </div>
  );
}

export default Home;
