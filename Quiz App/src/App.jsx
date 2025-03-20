import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import questions from "./components/questions";

const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

const participants = [
  { name: "Ashutosh", team: "A" },
  { name: "Shoyeb", team: "B" },
  { name: "Prakhar", team: "C" },
  { name: "Durgesh", team: "D" },
];

export default function QuizApp() {
  const [scores, setScores] = useState(() => {
    return JSON.parse(localStorage.getItem("quizScores")) || { A: 0, B: 0, C: 0, D: 0 };
  });
  const [answeredQuestions, setAnsweredQuestions] = useState(() => {
    return JSON.parse(localStorage.getItem("answeredQuestions")) || [];
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    localStorage.setItem("quizScores", JSON.stringify(scores));
  }, [scores]);

  useEffect(() => {
    localStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
  }, [answeredQuestions]);

  const handleAnswer = () => {
    if (!selectedParticipant || !selectedOption) return;

    const isCorrect = selectedOption === questions[currentQuestionIndex].answer;
    setFeedback(isCorrect ? "Correct! ✅" : "Wrong! ❌");

    setScores((prevScores) => {
      const updatedScores = {
        ...prevScores,
        [selectedParticipant.team]: prevScores[selectedParticipant.team] + (isCorrect ? 3 : -1),
      };
      localStorage.setItem("quizScores", JSON.stringify(updatedScores));
      return updatedScores;
    });
    setAnsweredQuestions((prev) => {
      const updatedAnswers = [...prev, { participant: selectedParticipant, question: questions[currentQuestionIndex], selectedOption, isCorrect }];
      localStorage.setItem("answeredQuestions", JSON.stringify(updatedAnswers));
      return updatedAnswers;
    });
    setSelectedOption(null);
    setSelectedParticipant(null);
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    setSelectedOption(null);
    setFeedback(null);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1 < questions.length ? prevIndex + 1 : prevIndex));
    setSelectedOption(null);
    setFeedback(null);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">JavaScript Output-Based Quiz</h1>
      <div className="flex justify-between my-4 p-2 border-1 rounded-md">
        <Button onClick={prevQuestion}>Previous</Button>
        <Button onClick={nextQuestion}>Next</Button>
      </div>

      <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-semibold">Question {currentQuestionIndex + 1}:</h2>
        <SyntaxHighlighter language="javascript" style={materialDark} className="rounded-md">
          {questions[currentQuestionIndex].question}
        </SyntaxHighlighter>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {questions[currentQuestionIndex].options.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`p-2 rounded-lg transition ${selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {feedback && <p className="text-lg font-semibold mt-2">{feedback}</p>}

      <h3 className="text-lg font-semibold mt-6">Select Participant</h3>
      <div className="mt-2 grid grid-cols-2 gap-4">
        {participants.map((participant) => (
          <button
            key={participant.name}
            onClick={() => setSelectedParticipant(participant)}
            className={`p-2 rounded-lg transition ${selectedParticipant?.name === participant.name ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {participant.name} (Team {participant.team})
          </button>
        ))}
      </div>
      <Button onClick={handleAnswer} className="mt-4">Submit Answer</Button>

      <h2 className="text-lg font-semibold mt-6">Leaderboard</h2>
      <ul className="mt-2">
        {Object.entries(scores)
          .sort((a, b) => b[1] - a[1])
          .map(([team, score]) => (
            <li key={team} className="p-2 bg-gray-100 mt-1 rounded-lg">
              Team {team}: {score} points
            </li>
          ))}
      </ul>
      <h2 className="text-lg font-semibold mt-6">Answered Questions</h2>
      <ul className="mt-2">
        {answeredQuestions.map((entry, index) => (
          <li key={index} className={`p-2 mt-1 rounded-lg ${entry.isCorrect ? "bg-green-200" : "bg-red-200"}`}>
            {entry.participant.name} ({entry.participant.team}) Q{entry.question.id}: {entry.selectedOption}
          </li>
        ))}
      </ul>
    </div>
  );
}