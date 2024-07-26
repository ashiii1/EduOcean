// import React from 'react';
// import { Link } from 'react-router-dom';

// const MainNavbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4">
//       <ul className="flex justify-around">
//         <li className='pb-5'><Link to="/" className="text-white">Home</Link></li>
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
  // const backendUrl = "https://live-streaming-2.onrender.com";
  const backendUrl = "https://live-streaming-2.onrender.com";


  return (
    <aside className="bg-gray-800 text-white p-4 md:w-64 h-screen fixed left-0 top-0 overflow-y-auto ">
      <div className="flex justify-center my-4 mb-14">
        <h2 className="text-white text-2xl font-semibold">Sidebar</h2>
      </div>
      <ul className="space-y-4 font-sans text-2xl mb-7">
        <li className='pb-5'>
          <NavLink
            to="/"
            exact
            className=" text-white hover:bg-white hover:text-black px-4 py-2 rounded  w-full"
          >
            Home
          </NavLink>
        </li>
        <li className='pb-5'>
          <NavLink
            to="/open-student"
            className=" text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
          >
            My Courses
          </NavLink>
        </li>
        <li className='pb-5'>
          <NavLink
            to="/assessments"
            className="text-white hover:bg-white hover:text-black px-4 py-2 rounded w-full"
          >
            Assessments
          </NavLink>
        </li>
        <li className='pb-5'>
          <a
            href={`${backendUrl}`}
            className="text-white hover:bg-white hover:text-black px-4 py-2 rounded w-full"
          >
            Live Class
          </a>
        </li>

        <li className='pb-5'>
          <NavLink
            to="/"
            className=" text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
          >
            Recordings
          </NavLink>
        </li>
        <li className='pb-5'>
          <NavLink
            to="/contest"
            className=" text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
          >
            Weekly Contest
          </NavLink>
        </li>
      
        <li className='pb-5'>
          <NavLink
            to="/student-queries"
            className=" text-white hover:bg-white  hover:text-black px-4 py-2 rounded mb-4 w-full"
          >
            Student queries
          </NavLink>
        </li>
        <li className='pb-5'>
          <NavLink
            to="/open-student"
            className=" text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
          >
            Login
          </NavLink>
        </li>
        <li className='pb-5'>
          <NavLink
            to="/register-student"
            className=" text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
          >
            Register
          </NavLink>
        </li>
        <li className='pb-5'>
          <NavLink
            to="/open-teacher"
            className=" text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
          >
            Admin Dasoard
          </NavLink>
        </li>

        <li className='pb-5'>
          <NavLink
            to="/about"
            className=" text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-8 w-full "
          >
            About Page
          </NavLink>
        </li> 
        <li className='pb-5'>
          <NavLink
            to="/contact"
            className=" text-white hover:bg-white  hover:text-black px-4 py-2 rounded mb-4 w-full"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default MainNavbar;
