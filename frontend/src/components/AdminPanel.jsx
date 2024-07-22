import React, { useState } from 'react';

const initialQuestions = [
  { id: 1, question: "What is the refund policy?", answer: "Our refund policy allows for a full refund within 30 days of purchase.", likes: 5 },
  { id: 2, question: "How can I reset my password?", answer: "You can reset your password by clicking on 'Forgot Password' on the login page.", likes: 3 },
  // Add more questions as needed
];

const AdminPanel = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [editingAnswer, setEditingAnswer] = useState({});

  // Handle input change for editing answers
  const handleAnswerChange = (id, e) => {
    setEditingAnswer({ ...editingAnswer, [id]: e.target.value });
  };

  // Submit edited answer
  const handleSubmitAnswer = (id) => {
    setQuestions(questions.map(q =>
      q.id === id ? { ...q, answer: editingAnswer[id] } : q
    ));
    setEditingAnswer({ ...editingAnswer, [id]: '' });
  };

  // Delete question
  const handleDeleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="bg-white min-h-screen flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      {questions.map((q) => (
        <div key={q.id} className="mb-6 p-4 border rounded shadow">
          <div className="font-semibold text-lg">{q.question}</div>
          <div className="mt-2 mb-2">
            <textarea
              value={editingAnswer[q.id] || q.answer}
              onChange={(e) => handleAnswerChange(q.id, e)}
              placeholder="Edit the answer here"
              className="border p-2 w-full rounded"
            />
            <button
              onClick={() => handleSubmitAnswer(q.id)}
              className="bg-green-500 text-white p-2 rounded mt-2"
            >
              Save Answer
            </button>
            <button
              onClick={() => handleDeleteQuestion(q.id)}
              className="bg-red-500 text-white p-2 rounded mt-2 ml-2"
            >
              Delete
            </button>
          </div>
        </div>
     ) )}
    </div>
  );
};

export default AdminPanel;
