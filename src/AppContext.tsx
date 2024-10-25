// AppContext.tsx

import { createContext, useContext } from "react";

// Define the interface for the context
interface AppContextType {
  questions: any[];
  correctAnswerCount: number;
  incorrectAnswerCount: number;
  totalQuestionCount: number;
  setQuestions: (val: any[]) => void;
  addOneToCorrectAnswerCount: () => void;
  addOneToIncorrectAnswerCount: (val: any) => void;
  setTotalQuestionCount: (val: number) => void;
  resetContext: () => void;
}

// Define the default context values
export const DefaultContext: AppContextType = {
  questions: [],
  correctAnswerCount: 0,
  incorrectAnswerCount: 0,
  totalQuestionCount: 0,
  setQuestions: () => {},
  addOneToCorrectAnswerCount: () => {},
  addOneToIncorrectAnswerCount: () => {},
  setTotalQuestionCount: () => {},
  resetContext: () => {},
};

// Create the context with the default values
export const AppContext = createContext<AppContextType>(DefaultContext);

// Custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};
