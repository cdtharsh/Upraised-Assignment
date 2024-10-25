import { QUESTIONS } from "../constants/questions";
import { Question } from "../constants/questions"; // Import Question type

async function getQuestionService(): Promise<Question[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(QUESTIONS), 300);
  });
}

export default getQuestionService;
