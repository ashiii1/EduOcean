import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavbar from './MainNavbar';

const WeeklyContest = () => {
  const [timeLeft, setTimeLeft] = useState(12 * 24 * 60 * 60); // 12 days in seconds
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  const handleCardClick = (url, isExternal) => {
    if (isExternal) {
      window.location.href = url;
    } else {
      navigate(url);
    }
  };

  return (
    <div className="pt-12 flex flex-wrap justify-center gap-6">
      <MainNavbar />
      <div
        className="border border-gray-300 rounded-lg overflow-hidden w-96 cursor-pointer transition-transform transform hover:scale-105"
        onClick={() => handleCardClick('https://leetcode.com/contest/', false)} // Use internal path for navigation
      >
        <img
          src="https://cdn.dribbble.com/users/912110/screenshots/6725327/star-1-dribbble.png"
          alt="Weekly Contest"
          className="w-full h-64 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Contest 1</h2>
          <p className="mb-4">Participate and win amazing prizes!</p>
          <div className="text-lg font-medium mt-4">
            <h3 className="mb-1">Time Left:</h3>
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      <div
        className="border border-gray-300 rounded-lg overflow-hidden w-96 cursor-pointer transition-transform transform hover:scale-105"
        onClick={() => handleCardClick('/internal-path-2', false)} // Use internal path for navigation
      >
        <img
          src="https://www.brokerxplorer.com/upload/content/2024-03/compete-and-win-usd2500-in-the-xm-weekly-demo-contest-5836-17102088411.jpg"
          alt="Weekly Contest"
          className="w-full h-64 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Contest 2</h2>
          <p className="mb-4">Join now to win $2500!</p>
          <div className="text-lg font-medium mt-4">
            <h3 className="mb-1">Time Left:</h3>
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      <div
        className="border border-red-300 rounded-lg overflow-hidden w-96 cursor-pointer transition-transform transform hover:scale-105"
        onClick={() => handleCardClick('https://example.com/contest3', true)} // Use external URL
      >
        <img
          src="https://i.ytimg.com/vi/C86A3RE_5do/maxresdefault.jpg"
          alt="Weekly Contest"
          className="w-full h-64 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Contest 3</h2>
          <p className="mb-4">Participate in the exciting weekly contest!</p>
          <div className="text-lg font-medium mt-4">
            <h3 className="mb-1">Time Left:</h3>
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyContest;
