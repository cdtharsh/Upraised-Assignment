// App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Question from "./screens/question/Question";
import Result from "./screens/result/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question/:id" element={<Question />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
