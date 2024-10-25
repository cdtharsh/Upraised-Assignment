import "./question.css";
import { arrowIcon, questionTopBanner } from "../../assets";
import Button from "../../components/button/Button";
import TopBanner from "../../components/topBanner/TopBanner";
import QuestionTitle from "../../components/questionTitle/QuestionTitle";
import QuestionImage from "../../components/questionImage/QuestionImage";
import Option from "../../components/option/Option";
import { useEffect, useState, useContext, Key } from "react";
import { AppContext } from "../../AppContext";
import { useNavigate, useParams } from "react-router-dom";
import postQuestionAnswerService from "../../services/postQuestionAnswerService";
import ProgressCircle from "../../components/progressCircle/ProgressCircle";

function Question() {
  const [selectedOptionId, setSelectedOptionId] = useState<
    string | undefined
  >();

  const {
    questions,
    totalQuestionCount,
    addOneToCorrectAnswerCount,
    addOneToIncorrectAnswerCount,
  } = useContext(AppContext);

  const params = useParams();
  const navigate = useNavigate();

  const currentQuestionNumber = params?.id ? parseInt(params.id) : 0;
  const currentQuestionDetails = questions?.[currentQuestionNumber - 1];

  const onSelectOption = (id: string) => {
    setSelectedOptionId(id);
  };

  async function onNextButtonClick() {
    if (selectedOptionId === undefined) return; // Ensure an option is selected

    const response = await postQuestionAnswerService({
      questionId: currentQuestionDetails?.id,
      answerId: Number(selectedOptionId), // Convert selectedOptionId to a number
    });

    if (response) {
      if (response.isCorrect) {
        addOneToCorrectAnswerCount();
      } else {
        addOneToIncorrectAnswerCount();
      }
      setSelectedOptionId(undefined); // Clear selection
      if (currentQuestionNumber < totalQuestionCount) {
        navigate(`/question/${currentQuestionNumber + 1}`, { replace: true });
      } else {
        navigate("/result", { replace: true });
      }
    }
  }

  useEffect(() => {
    if (totalQuestionCount === 0) {
      navigate("/", { replace: true });
    }
  }, [totalQuestionCount, navigate]);

  if (!currentQuestionDetails) return null; // Avoid rendering if question is not found

  return (
    <div className="question_screen_wrap">
      <TopBanner src={questionTopBanner} />

      <div className="question_screen_body">
        <div className="question_progress_circle_wrap">
          <div className="question_progress_circle">
            <ProgressCircle current={currentQuestionNumber} total={5} />
          </div>
        </div>

        <QuestionTitle title={currentQuestionDetails?.question} />

        {currentQuestionDetails?.image && (
          <QuestionImage src={currentQuestionDetails.image} />
        )}

        <div className="question_options">
          {currentQuestionDetails?.options?.map(
            (optionText: string, index: Key | null | undefined) => {
              return (
                <Option
                  key={index} // Use index as key for simplicity; consider a unique id if available
                  id={String(index)} // Convert index to string
                  text={optionText}
                  selected={String(index) === selectedOptionId} // Compare as strings
                  onSelectAction={onSelectOption}
                />
              );
            }
          )}
        </div>

        <div className="next_button_wrap">
          <Button
            className="next_button"
            text={
              currentQuestionNumber < totalQuestionCount ? "Next" : "Submit"
            }
            action={onNextButtonClick}
            icon={arrowIcon}
            disabled={selectedOptionId === undefined} // Disable button if no option selected
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
