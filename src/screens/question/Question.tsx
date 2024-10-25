import "./question.css";
import { arrowIcon, questionTopBanner } from "../../assets";

import Button from "../../components/button/Button";
import TopBanner from "../../components/topBanner/TopBanner";
import QuestionTitle from "../../components/questionTitle/QuestionTitle";

function Question() {
  return (
    <div className="question_screen_wrap">
      <TopBanner src={questionTopBanner}></TopBanner>
      <div className="question_screen_body">
        <div className="question_progress_circle"></div>

        <QuestionTitle title="Title" />
        <div className="question_options"></div>

        <div className="next_button_wrap">
          <Button
            className="next_button"
            text={"Next"}
            action={() => {}}
            icon={arrowIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
