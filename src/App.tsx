import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Button } from "/components/ui/button";

const questions = [
  {
    question: "In social situations, how do you usually feel?",
    options: ["Energized and excited", "A bit nervous but okay", "Overwhelmed and anxious"],
    scores: [1, 2, 3],
  },
  {
    question: "When working on a project, what motivates you most?",
    options: ["The opportunity to be creative and innovative", "The chance to work independently and take charge", "The ability to help others and make a positive impact"],
    scores: [1, 2, 3],
  },
  {
    question: "In your free time, what do you enjoy doing most?",
    options: ["Trying new things and taking risks", "Relaxing and taking it easy", "Planning and organizing activities"],
    scores: [1, 2, 3],
  },
  {
    question: "When interacting with others, what do you value most?",
    options: ["Honesty and authenticity", "Empathy and understanding", "Efficiency and productivity"],
    scores: [1, 2, 3],
  },
  {
    question: "How do you approach decision-making?",
    options: ["Logically and analytically", "Intuitively and instinctively", "Collaboratively and democratically"],
    scores: [1, 2, 3],
  },
  {
    question: "What do you value most in life?",
    options: ["Independence and autonomy", "Harmony and stability", "Growth and progress"],
    scores: [1, 2, 3],
  },
  {
    question: "How do you handle conflict or disagreements?",
    options: ["Head-on and assertively", "Calmly and diplomatically", "Avoiding confrontation whenever possible"],
    scores: [1, 2, 3],
  },
  {
    question: "What motivates you to achieve your goals?",
    options: ["The desire for success and recognition", "The need to help others and make a difference", "The pursuit of knowledge and understanding"],
    scores: [1, 2, 3],
  },
  {
    question: "How do you approach problem-solving?",
    options: ["Analytically and methodically", "Creatively and innovatively", "Collaboratively and openly"],
    scores: [1, 2, 3],
  },
  {
    question: "What do you value most in relationships?",
    options: ["Trust and loyalty", "Open communication and honesty", "Mutual support and encouragement"],
    scores: [1, 2, 3],
  },
  {
    question: "How do you handle change or unexpected events?",
    options: ["Flexibly and adaptively", "Cautiously and carefully", "Resistantly and reluctantly"],
    scores: [1, 2, 3],
  },
  {
    question: "What motivates you to learn and grow?",
    options: ["The pursuit of knowledge and understanding", "The desire for personal growth and self-improvement", "The need to stay up-to-date with the latest developments"],
    scores: [1, 2, 3],
  },
  {
    question: "How do you approach leadership or management?",
    options: ["Assertively and decisively", "Collaboratively and democratically", "Supportively and enable-ingly"],
    scores: [1, 2, 3],
  },
  {
    question: "What do you value most in a career or profession?",
    options: ["Creativity and innovation", "Stability and security", "Opportunities for growth and advancement"],
    scores: [1, 2, 3],
  },
  {
    question: "How do you handle stress or pressure?",
    options: ["Calmly and effectively", "Anxiously and overwhelmed", "Proactively and preventatively"],
    scores: [1, 2, 3],
  },
  {
    question: "What motivates you to help others?",
    options: ["A sense of duty and responsibility", "A desire to make a positive impact", "A need to feel needed and appreciated"],
    scores: [1, 2, 3],
  },
];

const personalityTypes = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];

const descriptions = {
  ISTJ: "Practical and detail-oriented, with a strong sense of duty and responsibility.",
  ISFJ: "Warm and conscientious, with a strong sense of loyalty and commitment.",
  INFJ: "Charismatic and empathetic, with a strong sense of idealism and purpose.",
  INTJ: "Innovative and independent, with a strong sense of confidence and self-motivation.",
  ISTP: "Resourceful and analytical, with a strong sense of logic and problem-solving ability.",
  ISFP: "Artistic and compassionate, with a strong sense of creativity and emotional depth.",
  INFP: "Idealistic and empathetic, with a strong sense of values and personal growth.",
  INTP: "Innovative and analytical, with a strong sense of curiosity and love of learning.",
  ESTP: "Action-oriented and decisive, with a strong sense of confidence and assertiveness.",
  ESFP: "Spontaneous and enthusiastic, with a strong sense of creativity and love of life.",
  ENFP: "Charismatic and imaginative, with a strong sense of intuition and emotional depth.",
  ENTP: "Innovative and entrepreneurial, with a strong sense of confidence and risk-taking ability.",
  ESTJ: "Practical and decisive, with a strong sense of responsibility and leadership ability.",
  ESFJ: "Warm and organized, with a strong sense of loyalty and commitment to others.",
  ENFJ: "Charismatic and empathetic, with a strong sense of leadership and interpersonal skills.",
  ENTJ: "Confident and results-driven, with a strong sense of ambition and strategic thinking.",
};

function calculatePersonality(scores) {
  let maxScore = 0;
  let personalityType = "";

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      personalityType = personalityTypes[i];
    }
  }

  return personalityType;
}

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState(new Array(16).fill(0));
  const [personalityType, setPersonalityType] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (score) => {
    const newScores = [...scores];
    newScores[currentQuestion] = score;
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const personality = calculatePersonality(scores);
      setPersonalityType(personality);
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScores(new Array(16).fill(0));
    setPersonalityType("");
    setShowResults(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {showResults ? (
        <Card>
          <CardHeader>
            <CardTitle>Your Personality Type</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Based on your answers, your personality type is <strong>{personalityType}</strong>.
            </p>
            <p>{descriptions[personalityType]}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestart}>Take the quiz again</Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{questions[currentQuestion].question}</p>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="block w-full p-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswer(questions[currentQuestion].scores[index])}
              >
                {option}
              </button>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}