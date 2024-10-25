import { QUESTIONS } from "../constants/questions";

async function getQuestionService() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(QUESTIONS), 300); // Wrap resolve in a function
  });
}

export default getQuestionService;
