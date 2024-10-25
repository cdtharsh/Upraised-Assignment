import "./QuestionTitle.css";

function QuestionTitle({ title = "", className = "" }) {
  return <div className={`question_title ${className}`}>{title}</div>;
}

export default QuestionTitle;
