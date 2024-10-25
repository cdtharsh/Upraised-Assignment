import "./result.css";

import TopBanner from "../../components/topBanner/TopBanner";
import Button from "../../components/button/Button";
import { questionTopBanner } from "../../assets";
import { useNavigate } from "react-router-dom";
import SemiCircleGauge from "../../components/semiCirlcleGauge/SemiCirlcleGauge";
import ResultOutput from "../../components/result/ResultOutput";
import { AppContext } from "../../AppContext";
import { useContext, useEffect } from "react";

function Result() {
  const navigate = useNavigate();

  const {
    resetContext,
    totalQuestionCount,
    correctAnswerCount,
    incorrectAnswerCount,
  } = useContext(AppContext); // Removed '...state'

  const onStartAgainButtonClick = () => {
    resetContext();
  };

  useEffect(() => {
    if (totalQuestionCount === 0) {
      navigate("/", { replace: true });
    }
  }, [totalQuestionCount, navigate]);

  return (
    <div className="question_screen_wrap">
      <TopBanner src={questionTopBanner} />

      <div className="question_screen_body">
        <div className="result_head">Your result</div>

        <div className="result_meter_wrap">
          <SemiCircleGauge
            percentage={(correctAnswerCount / totalQuestionCount) * 100}
          />
        </div>

        <ResultOutput count={correctAnswerCount} isCorrect={true} />
        <ResultOutput count={incorrectAnswerCount} isCorrect={false} />

        <div className="result_button_wrap">
          <Button
            className="next_button"
            text={"Start Again"}
            action={onStartAgainButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Result;
