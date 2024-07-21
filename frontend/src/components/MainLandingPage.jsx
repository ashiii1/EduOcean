// import React from 'react';
// import { Link } from 'react-router-dom';
// import MainHeaderPage from './MainHeaderPage';
// import MainFooterPage from './MainFooterPage';

// const MainLandingPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <MainHeaderPage />
      
//       {/* Main Content */}
//       <main className="flex-grow">
//         <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 w-full">
//           <h1 className="mb-14 -mt-14 text-black md:text-3xl xl:text-5xl">Welcome to our Learning Management System</h1>
//           <div className="flex flex-col md:flex-row w-full md:w-3/4 xl:w-4/5 xl:h-80 gap-6">
//             <div className="shadow-2xl flex flex-col md:w-1/2 p-4 rounded justify-center bg-green-600 min-w-min my-5">
//               <p className="text-white text-lg md:text-xl xl:text-3xl mb-4">Discover a World of Learning at Your Fingertips</p>
//               <p className="text-white text-sm md:text-base xl:text-xl mb-4">Your Gateway to Knowledge and Growth</p>
//               <Link to="/open-student" className='nav-link mt-4'>
//                 <button className="bg-black text-white hover:bg-green-800 mt-10 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64">
//                   Sign In as Student
//                 </button>
//               </Link>
//             </div>
//             <div className="shadow-2xl flex flex-col md:w-1/2 p-4 rounded justify-center bg-green-600 min-w-min my-5">
//               <p className="text-white text-lg md:text-xl xl:text-3xl mb-4">Empower Minds, Share Knowledge, and Inspire Growth</p>
//               <p className="text-white text-sm md:text-base xl:text-xl mb-4">Join a Global Network of Educators</p>
//               <Link to="/open-teacher" className='nav-link mt-4'>
//                 <button className="bg-black text-white hover:bg-green-800 mt-10 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64">
//                   Sign In as Instructor
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <Link to="/register-student" className='nav-link -mb-10'>
//             <button className="bg-black text-white hover:bg-green-800 -mb-36 hover:text-white font-bold py-2 px-4 mt-8 rounded focus:outline-none focus:shadow-outline md:w-64">
//               Register
//             </button>
//           </Link>
//         </div>
//       </main>

//       {/* Footer */}
//       <MainFooterPage />
//     </div>
//   );
// };

// // export default MainLandingPage;import React from 'react';
// import MainNavbar from './MainNavbar';
// import MainFooter from './MainFooter';

// const MainLandingPage = () => {
//   const backgroundImageUrl = 'https://img.freepik.com/premium-photo/wild-spring-flowers-paper-background_176873-23026.jpg'; // Replace with your actual HTTP URL

//   return (
//     <div className="flex flex-col min-h-screen">
//       <MainNavbar />
//       <div
//         className="flex-grow flex flex-col items-center justify-center bg-white p-6 w-full"
//         style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//       >
//         <h1 className="mb-14 -mt-14 text-black md:text-3xl xl:text-5xl">Welcome to Our LMS</h1>
//       </div>
//       <MainFooter />
//     </div>
//   );
// };

// // export default MainLandingPage;
// import React from 'react';
// import MainNavbar from './MainNavbar';
// import MainFooter from './MainFooter';

// const MainLandingPage = () => {
//   const backgroundImageUrl = 'https://img.freepik.com/premium-photo/wild-spring-flowers-paper-background_176873-23026.jpg'; // Replace with your actual HTTP URL

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[auto,minmax(0,1fr)] min-h-screen">
//       <MainNavbar />
//       <div
//         className="flex flex-col items-center justify-center bg-white p-6 w-full"
//         style={{ 
//           backgroundImage: `url(${backgroundImageUrl})`, 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center',
//           gridColumn: '2 / 3', // Span the main content area
//         }}
//       >
//         <h1 className="mb-14 -mt-14 text-black md:text-3xl xl:text-5xl">Welcome to Our LMS</h1>
//       </div>
//       <MainFooter className="col-span-full" />
//     </div>
//   );
// };

// // export default MainLandingPage;
// import React from 'react';
// import MainNavbar from './MainNavbar';

// const MainLandingPage = () => {

//   return (
   
//     <>
//       <div className="fixed left-0 top-0 h-full bg-green-600 text-black p-4">
//         <MainNavbar />
//       </div>

//       <div className="relative z-10 bg-white p-6 md:p-0 ml-48"> {/* ml-64 for the width of the sidebar */}
//         <div className="flex items-center justify-center h-screen">
//           <h2>Main Content Goes Here</h2>
//         </div>
//       </div>
//     </>
//   );
// };

// // export default MainLandingPage;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import MainNavbar from './MainNavbar';

// const MainLandingPage = () => {
//   return (
//     <>
//       <div className="fixed left-0 top-0 h-full bg-green-600 text-black p-4">
//         <MainNavbar />
//       </div>

//       <div className="relative z-10 bg-white p-6 md:p-0 ml-48"> {/* Adjust ml-48 for the sidebar width */}
//         <div className="flex flex-col min-h-screen">
//           <div className="flex-grow flex items-center justify-center bg-white p-6">
//             <div className="max-w-4xl w-full mx-auto space-y-10">
//               <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-800">Welcome to the course section</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="shadow-lg bg-green-600 rounded-lg p-6 text-white flex flex-col items-center justify-center">
//                   <p className="text-xl md:text-3xl font-bold mb-4">Login</p>
//                   <Link to="/open-student" className="text-center w-full">
//                     <button className="bg-black text-white hover:bg-green-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-3/4 lg:w-1/2">
//                       Login
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="shadow-lg bg-green-600 rounded-lg p-6 text-white flex flex-col items-center justify-center">
//                   <p className="text-xl md:text-3xl font-bold mb-4">Register</p>
//                   <Link to="/register-student" className="text-center w-full">
//                     <button className="bg-black text-white hover:bg-green-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-3/4 lg:w-1/2">
//                       Register
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // export default MainLandingPage;
// import React from 'react';
// import MainNavbar from './MainNavbar';
// import { Link } from 'react-router-dom';

// const MainLandingPage = () => {
//   return (
//     <>
//       <div className="fixed left-0 top-0 h-full bg-green-600 text-black p-4">
//         <MainNavbar />
//       </div>

//       <div className="relative z-10 bg-white p-6 md:p-0 ml-48"> {/* Adjust ml-48 for the sidebar width */}
//         <div className="flex flex-col min-h-screen">
//           <div className="flex-grow flex items-center justify-center bg-white p-6">
//             <div className="max-w-4xl w-full mx-auto space-y-10">
//               <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-800">Welcome to the course section</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="shadow-lg bg-green-600 rounded-lg p-6 text-white flex flex-col items-center justify-center">
//                   <p className="text-xl md:text-3xl font-bold mb-4">Login</p>
//                   <Link to="/open-student" className="text-center w-full">
//                     <button className="bg-black text-white hover:bg-green-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-3/4 lg:w-1/2">
//                       Login
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="shadow-lg bg-green-600 rounded-lg p-6 text-white flex flex-col items-center justify-center">
//                   <p className="text-xl md:text-3xl font-bold mb-4">Register</p>
//                   <Link to="/register-student" className="text-center w-full">
//                     <button className="bg-black text-white hover:bg-green-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-3/4 lg:w-1/2">
//                       Register
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainLandingPage;
import React, { useEffect, useState } from 'react';
import MainNavbar from './MainNavbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoursePage = () => {
  // const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesResponse = await axios.get('https://lmsdatabase.onrender.com/getallcourses');
        setCourses(coursesResponse.data);
      } catch (error) {
        console.error("Error fetching courses", error);
      }
    };

    fetchCourses();
  }, []);

  const enrollInCourse = async (courseId) => {
    try {
      const response = await axios.post(`https://lmsdatabase.onrender.com/enroll-course/anonymous/${courseId}`);
      toast.success("Course successfully enrolled");
      console.log(response.data); // Log the response for debugging
    } catch (error) {
      toast.error("Course already enrolled");
      console.error("Error during enrollment", error);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <MainNavbar />
      <div className="flex">
        <nav className="bg-white w-64 p-4 flex flex-col h-full shadow-lg">
          <div className="mt-20 ml-4 text-lg">
            <Link to="/about-us" className="block text-black hover:text-gray-500">
              About Us
            </Link>
          </div>
        </nav>

        <div className="flex-1 flex flex-col p-6">
          <nav className="bg-white p-4 flex items-center justify-between">
            <div className="lg:hidden">
              <button className="text-black focus:outline-none" onClick={toggleSidebar}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className={`lg:hidden fixed top-0 right-0 h-96 w-64 bg-white transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
              <div className="p-4 flex justify-between items-center">
                <div className="mt-20 ml-4 text-lg">
                  <Link to="/about-us" className="block text-black hover:text-gray-500">
                    About Us
                  </Link>
                </div>
                <button className="text-black focus:outline-none -mt-24" onClick={closeSidebar}>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          <div className="card rounded-md shadow-lg shadow-gray-500 bg-white p-25 mb-20 flex flex-col items-center xl:flex-row xl:justify-between">
            <div className="xl:2/3 w-full xl:mb-0 mb-0 ">
              <h2 className="text-black xl:-ml-0 md:text-xl sm:text-md xl:text-3xl mb-0 text-center">Explore the Trending Courses</h2>
              <p className="text-black md:text-md sm:text-32 xl:text-xl text-center">
                Welcome to our Learning Management System dashboard! Your gateway to a world of knowledge awaits.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-green-400">
                <div className="mb-4 flex-grow bg-zinc-700 rounded">
                  <img
                    src={course.coverphoto}
                    alt="Course Thumbnail"
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                <h3 className="text-black text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">{course.title}</h3>
                <p className="mb-3 font-normal text-black dark:text-gray-400">Teacher: {course.teacher.username}</p>
                <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap">{course.description}</p>

                <div className="mt-auto flex justify-end">
                  <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default CoursePage;
