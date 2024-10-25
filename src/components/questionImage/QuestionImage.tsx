import "./QuestionImage.css";

function QuestionImage({ src = "" }) {
  return <img className={`question_image`} src={src} />;
}

export default QuestionImage;
