import React, { useState, useEffect } from 'react';
import MainNavbar from './MainNavbar';

const initialQuestions = [
  {
    id: 1,
    question: "What is the refund policy?",
    answer: "Our refund policy allows for a full refund within 30 days of purchase.",
    likes: 5
  },
  {
    id: 2,
    question: "How can I reset my password?",
    answer: "You can reset your password by clicking on 'Forgot Password' on the login page.",
    likes: 3
  },
  // Add more questions as needed
];

const StudentQue = () => {
  const [questions, setQuestions] = useState(() => {
    const savedQuestions = localStorage.getItem('questions');
    return savedQuestions ? JSON.parse(savedQuestions) : initialQuestions;
  });

  const [newQuestion, setNewQuestion] = useState('');
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  const handleQuestionChange = (e) => setNewQuestion(e.target.value);

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      const newId = questions.length ? questions[questions.length - 1].id + 1 : 1;
      setQuestions([...questions, { id: newId, question: newQuestion, answer: '', likes: 0 }]);
      setNewQuestion('');
    }
  };

  const handleAnswerChange = (id, e) => {
    setAnswers({ ...answers, [id]: e.target.value });
  };

  const handleSubmitAnswer = (id) => {
    setQuestions(questions.map(q =>
      q.id === id ? { ...q, answer: answers[id] } : q
    ));
    setAnswers({ ...answers, [id]: '' });
  };

  // const handleDeleteQuestion = (id) => {
  //   setQuestions(questions.filter(q => q.id !== id));
  // };

  const handleLikeAnswer = (id) => {
    setQuestions(questions.map(q =>
      q.id === id ? { ...q, likes: q.likes + 1 } : q
    ));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <MainNavbar />
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <nav className="bg-white w-64 p-4 h-full shadow-lg">
          <div className="mt-20 ml-4 text-lg">
            <a href="/student-que" className="block text-black hover:text-gray-500">Student Questions</a>
          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-1 p-6 ml-32">
          <h1 className="text-3xl font-bold mb-6">Student Questions</h1>
          
          {/* Add Question */}
          <div className="mb-6">
            <input
              type="text"
              value={newQuestion}
              onChange={handleQuestionChange}
              placeholder="Type your question here"
              className="border p-2 w-full rounded"
            />
            <button
              onClick={handleAddQuestion}
              className="bg-black text-white p-2 rounded mt-2"
            >
              Add Question
            </button>
          </div>

          {/* Questions List */}
          {questions.map((q) => (
            <div key={q.id} className="mb-6 p-4 border rounded shadow">
              <div className="font-semibold text-lg">{q.question}</div>
              <div className="mt-2 mb-2">
                {q.answer ? (
                  <>
                    <p>{q.answer}</p>
                    <button
                      onClick={() => handleLikeAnswer(q.id)}
                      className="bg-gray-300 text-black px-2 py-1 rounded mt-2"
                    >
                      Like ({q.likes})
                    </button>
                  </>
                ) : (
                  <>
                    <textarea
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e)}
                      placeholder="Type your answer here"
                      className="border p-2 w-full rounded"
                    />
                    <button
                      onClick={() => handleSubmitAnswer(q.id)}
                      className="bg-green-500 text-white p-2 rounded mt-2"
                    >
                      Submit Answer
                    </button>
                  </>
                )}
                {/* <button
                  onClick={() => handleDeleteQuestion(q.id)}
                  className="bg-red-500 text-white p-2 rounded mt-2"
                >
                  Delete
                </button> */}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default StudentQue;
