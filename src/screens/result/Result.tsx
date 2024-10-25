import React, { useContext, useEffect } from "react";
import "./result.css";
import { useNavigate } from "react-router-dom";

import TopBanner from "../../components/topBanner/TopBanner";
import SemiCircleGauge from "../../components/semiCirlcleGauge/SemiCirlcleGauge";
import ResultOutput from "../../components/result/ResultOutput";
import Button from "../../components/button/Button";

import { AppContext } from "../../AppContext";
import { questionTopBanner } from "../../assets";

function Result() {
  const navigate = useNavigate();

  const { totalQuestionCount, correctAnswerCount, ...state } =
    useContext(AppContext);

  const onStartAgainButtonClick = () => {
    // resetContext();
  };

  useEffect(() => {
    if (totalQuestionCount === 0) {
      navigate("/", { replace: true });
    }
  }, [totalQuestionCount]);

  return (
    <div className="question_screen_wrap">
      <TopBanner src={questionTopBanner} />
      <div className="question_screen_body">
        <div className="result_head">Your Result</div>

        <div className="result_meter_wrap">
          <SemiCircleGauge
            percentage={(correctAnswerCount / totalQuestionCount) * 100}
          />
        </div>

        <ResultOutput count={correctAnswerCount} isCorrect={true} />
        {/* <ResultOutput count={incorrectAnswerCount} isCorrect = {false} /> */}

        <div className="result_button_wrap">
          <Button
            className="next_button"
            text={"Start Agian"}
            action={onStartAgainButtonClick}
          />
        </div>
      </div>
    </div>
  );
}
