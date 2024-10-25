import "./result.css";

import TopBanner from "../../components/topBanner/TopBanner";
import Button from "../../components/button/Button";
import { questionTopBanner } from "../../assets";

function Result() {
  return (
    <div className="question_screen_wrap">
      <TopBanner src={questionTopBanner} />
      <div className="question_screen_body">
        <div className="result_head">Your Result</div>

        <div className="result_meter_wrap"></div>

        <div className="result_button_wrap">
          <Button
            className="next_button"
            text={"Start Agian"}
            action={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default Result;
