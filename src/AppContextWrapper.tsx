// AppContextWrapper.tsx

import { useEffect } from "react";
import { AppContext, DefaultContext } from "./AppContext";
import { useSetAppContext } from "./hooks/useSetAppContext";

function AppContextWrapper({ children }: { children: React.ReactNode }) {
  const { context, setContext } = useSetAppContext();

  useEffect(() => {
    setContext((state) => ({
      ...state,
      setQuestions: (val: any[]) => {
        setContext((state) => ({
          ...state,
          questions: val,
        }));
      },
      addOneToCorrectAnswerCount: () => {
        setContext((state) => ({
          ...state,
          correctAnswerCount: state.correctAnswerCount + 1,
        }));
      },
      addOneToIncorrectAnswerCount: () => {
        setContext((state) => ({
          ...state,
          incorrectAnswerCount: state.incorrectAnswerCount + 1,
        }));
      },
      setTotalQuestionCount: (val: number) => {
        setContext((state) => ({
          ...state,
          totalQuestionCount: val,
        }));
      },
      resetContext: () => {
        setContext((state) => ({ ...state, ...DefaultContext }));
      },
    }));
  }, [setContext]);

  return (
    <AppContext.Provider value={{ ...context }}>{children}</AppContext.Provider>
  );
}

export default AppContextWrapper;
