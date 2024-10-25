import { ANSWERS } from "../constants/questions";

type PostQuestionAnswerResponse = {
  isCorrect: boolean;
};

async function postQuestionAnswerService({
  questionId,
  answerId,
}: {
  questionId: number;
  answerId: number;
}): Promise<PostQuestionAnswerResponse> {
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
