import { createContext } from "react";

export const DefaultContext = {
  questions: [],
  correctAnswerCount: 0,
  incorrectAnswerCount: 0,
  totalQuestionCount: 0,
};

export const AppContext = createContext(DefaultContext);
