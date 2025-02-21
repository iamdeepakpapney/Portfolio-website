
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    code: `function add(a, b) {\n  return a - b; // Bug here\n}`,
    options: ['Change - to +', 'Change - to *', 'Remove return statement'],
    correct: 0,
  },
  {
    code: `const greeting = name => {\n  console.log('Hello' + names); // Bug here\n};`,
    options: ["Change 'names' to 'name'", "Add return statement", "Replace console.log with alert"],
    correct: 0,
  },
];

const BugHuntGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[current].correct) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
      <motion.div
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {showResult ? (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Game Over! 🎉</h2>
            <p className="text-xl">Your Score: {score} / {questions.length}</p>
            <button
              className="mt-4 px-6 py-3 bg-teal-500 rounded-lg hover:bg-teal-600 transition"
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setShowResult(false);
              }}
            >
              Play Again 🔄
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Debug This Code 🐞</h2>
            <pre className="bg-gray-900 p-4 rounded-lg text-yellow-300 overflow-auto">
              {questions[current].code}
            </pre>
            <div className="space-y-4 mt-6">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  className="w-full bg-teal-600 py-2 rounded-lg hover:bg-teal-700 transition"
                  onClick={() => handleAnswer(idx)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BugHuntGame;
