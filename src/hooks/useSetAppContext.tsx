import { useState } from "react";
import { getInitialContextValues } from "../services/getInitialContextValues";

export function useSetAppContext() {
  const [context, setContext] = useState(getInitialContextValues);

  return { context, setContext };
}
