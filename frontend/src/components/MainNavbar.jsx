// import React from 'react';
// import { Link } from 'react-router-dom';

// const MainNavbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4">
//       <ul className="flex justify-around">
//         <li><Link to="/" className="text-white">Home</Link></li>
//         <li><Link to="/about" className="text-white">About</Link></li>
//         <li><Link to="/services" className="text-white">Services</Link></li>
//         <li><Link to="/contact" className="text-white">Contact</Link></li>
//         <li><Link to="/course-list" className="text-white">Course List</Link></li>
//       </ul>
//     </nav>
//   );
// };

// // export default MainNavbar;
// import { Link } from 'react-router-dom';

// const MainNavbar = () => {
//   return (
//     <nav className="bg-green-600 text-black p-4">
//       <ul className="flex justify-around"> 
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/course-list">Courses</Link></li>
//         <li><Link to="/quiz-landing">Quiz</Link></li> {/* Updated link */}
//         {/* other links */}
//       </ul>
//     </nav>
//   );
// };

// export default MainNavbar;
import React from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  return (
    <nav className="bg-green-600 text-black p-4">
      <ul className="flex justify-around">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/course-list">Courses</Link></li>
        <li><Link to="/quiz-landing">Quiz</Link></li>
        <li><a href={`${backendUrl}`}>Live Class</a></li> {/* Updated link */}
        {/* other links */}
      </ul>
    </nav>
  );
};

export default MainNavbar;
