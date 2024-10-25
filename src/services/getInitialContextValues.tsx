import { DefaultContext } from "../AppContext";

export function getInitialContextValues() {
  const initialContext = { ...DefaultContext };

  return initialContext;
}
