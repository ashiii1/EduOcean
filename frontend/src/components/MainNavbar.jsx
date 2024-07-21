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

// // export default MainNavbar;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const MainNavbar = () => {
//   const backendUrl = process.env.REACT_APP_BACKEND_URL;

//   return (
//     <nav className="bg-green-600 text-black p-4">
//       <ul className="flex justify-around">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/course-list">Courses</Link></li>
//         <li><Link to="/quiz-landing">Quiz</Link></li>
//         <li><a href={`${backendUrl}`}>Live Class</a></li> {/* Updated link */}
//         {/* other links */}
//       </ul>
//     </nav>
//   );
// };

// // export default MainNavbar;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const MainNavbar = () => {
//   const backendUrl = process.env.REACT_APP_BACKEND_URL;

//   return (
//     <aside className="bg-gray-400 text-black p-4 md:w-64 h-screen fixed left-0 top-0 overflow-y-auto">
//       <div className="flex justify-center my-4">
//         <h2 className="text-white text-2xl">Sidebar</h2>
//       </div>
//       <ul className="space-y-4">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/course-list">Courses</Link></li>
//         <li><Link to="/quiz-landing">Quiz</Link></li>
//         <li><a href={`${backendUrl}`}>Live Class</a></li>
//         {/* Other links */}
//       </ul>
//     </aside>
//   );
// };

// export default MainNavbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  return (
    <aside className="bg-gray-400 text-black p-4 md:w-64 h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="flex justify-center my-4">
        <h2 className="text-white text-2xl">Sidebar</h2>
      </div>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/"
            exact
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 rounded bg-black text-white" : "block px-4 py-2 rounded"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/open-student"
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 rounded bg-black text-white" : "block px-4 py-2 rounded"
            }
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz-landing"
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 rounded bg-black text-white" : "block px-4 py-2 rounded"
            }
          >
            Quiz
          </NavLink>
        </li>
        <li>
          <a
            href={`${backendUrl}`}
            className="block px-4 py-2 rounded"
          >
            Live Class
          </a>
        </li>
        <li>
          <NavLink
            to="/open-student"
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 rounded bg-black text-white" : "block px-4 py-2 rounded"
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register-student"
            className={({ isActive }) => 
              isActive ? "block px-4 py-2 rounded bg-black text-white" : "block px-4 py-2 rounded"
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default MainNavbar;
