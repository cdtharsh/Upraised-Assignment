import Button from "../../components/button/Button";
import "./question.css";
import { arrowIcon } from "../../assets";

function Question() {
  return (
    <div className="question_screen_wrap">
      <div className="question_screen_body">
        <div className="question_progress_circle"></div>

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
