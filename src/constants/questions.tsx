// Assets
import { question } from "../assets/questions";

export interface Question {
  id: number;
  question: string;
  options: string[];
  image?: string; // Optional if some questions don't have images
}

const QUESTIONS = [
  {
    id: 1,
    question: "The full form of CSS is",
    options: [
      "Cascading Style Sheets",
      "Coloured Special Sheets",
      "Color and Style Sheets",
      "None of the above",
    ],
  },
  {
    id: 2,
    question:
      "Which of the following is used in React.js to increase performance?",
    options: ["Virtual DOM", "Original DOM", "React Dom", "None of the above"],
  },
  {
    id: 3,
    question:
      "Among the given statements, which statement defines closures in JavaScript?",
    options: [
      "JavaScript is a function that is enclosed with references to its inner function scope",
      " JavaScript is a function that is enclosed with references to its lexical environment",
      "JavaScript is a function that is enclosed with the object to its inner function scope",
      " None of the mentioned",
    ],
  },
  {
    id: 4,
    question: "What will be the output of the following JavaScript code?",
    options: ["10", "50", "5", "Error"],
    image: question,
  },
  {
    id: 5,
    question:
      "Arrays in JavaScript are defined by which of the following statements?",
    options: [
      "It is an ordered list of values",
      "It is an ordered list of objects",
      "It is an ordered list of string",
      "It is an ordered list of functions",
    ],
  },
];

const ANSWERS = [
  { id: 1, answer: 0 },
  { id: 2, answer: 0 },
  { id: 3, answer: 1 },
  { id: 4, answer: 1 },
  { id: 5, answer: 0 },
];

export { QUESTIONS, ANSWERS };
