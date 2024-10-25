import { ANSWERS } from "../constants/questions";

async function postQuestionAnswerService({
  questionId,
  answerId,
}: {
  questionId: number;
  answerId: number;
}) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        isCorrect: ANSWERS.some(
          (ans) => ans.id === questionId && ans.answer === answerId
        ),
      });
    }, 300)
  );
}

export default postQuestionAnswerService;
