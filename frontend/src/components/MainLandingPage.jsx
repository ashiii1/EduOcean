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

// export default MainLandingPage;


// export default MainLandingPage;



// // import React, { useEffect, useState } from 'react';
// // import MainNavbar from './MainNavbar';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const CoursePage = () => {
// //   // const navigate = useNavigate();
// //   const [courses, setCourses] = useState([]);
// //   const [showSidebar, setShowSidebar] = useState(false);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const coursesResponse = await axios.get('https://lmsdatabase.onrender.com/getallcourses');
// //         setCourses(coursesResponse.data);
// //       } catch (error) {
// //         console.error("Error fetching courses", error);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   const enrollInCourse = async (courseId) => {
// //     try {
// //       const response = await axios.post(`https://lmsdatabase.onrender.com/enroll-course/anonymous/${courseId}`);
// //       toast.success("Course successfully enrolled");
// //       console.log(response.data); // Log the response for debugging
// //     } catch (error) {
// //       toast.error("Course already enrolled");
// //       console.error("Error during enrollment", error);
// //     }
// //   };

// //   const toggleSidebar = () => {
// //     setShowSidebar(!showSidebar);
// //   };

// //   const closeSidebar = () => {
// //     setShowSidebar(false);
// //   };

// //   return (
// //     <div className="bg-white min-h-screen flex flex-col">
// //       <MainNavbar />
// //       <div className="flex">
// //         <nav className="bg-white w-64 p-4 flex flex-col h-full shadow-lg">
// //           <div className="mt-20 ml-4 text-lg">
// //             <Link to="/about-us" className="block text-black hover:text-gray-500">
// //               About Us
// //             </Link>
// //           </div>
// //         </nav>

// //         <div className="flex-1 flex flex-col p-6">
// //           <nav className="bg-white p-4 flex items-center justify-between">
// //             <div className="lg:hidden">
// //               <button className="text-black focus:outline-none" onClick={toggleSidebar}>
// //                 <svg
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth="2"
// //                     d="M4 6h16M4 12h16m-7 6h7"
// //                   ></path>
// //                 </svg>
// //               </button>
// //             </div>
// //             <div className={`lg:hidden fixed top-0 right-0 h-96 w-64 bg-white transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
// //               <div className="p-4 flex justify-between items-center">
// //                 <div className="mt-20 ml-4 text-lg">
// //                   <Link to="/about-us" className="block text-black hover:text-gray-500">
// //                     About Us
// //                   </Link>
// //                 </div>
// //                 <button className="text-black focus:outline-none -mt-24" onClick={closeSidebar}>
// //                   <svg
// //                     className="h-6 w-6"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M6 18L18 6M6 6l12 12"
// //                     ></path>
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>
// //           </nav>

// //           <div className="card rounded-md shadow-lg shadow-gray-500 bg-white p-25 mb-20 flex flex-col items-center xl:flex-row xl:justify-between">
// //             <div className="xl:2/3 w-full xl:mb-0 mb-0 ">
// //               <h2 className="text-black xl:-ml-0 md:text-xl sm:text-md xl:text-3xl mb-0 text-center">Explore the Trending Courses</h2>
// //               <p className="text-black md:text-md sm:text-32 xl:text-xl text-center">
// //                 Welcome to our Learning Management System dashboard! Your gateway to a world of knowledge awaits.
// //               </p>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
// //             {courses.map((course) => (
// //               <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
// //                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
// //                   <img
// //                     src={course.coverphoto}
// //                     alt="Course Thumbnail"
// //                     className="w-full h-full object-cover rounded"
// //                   />
// //                 </div>

// //                 <h3 className="text-black text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
// //                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
// //                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>

// //                 <div className="mt-auto flex justify-end">
// //                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
// //                 </div>
// //               </div>
// //             ))}
 
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
// //             {courses.map((course) => (
// //               <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
// //                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
// //                   <img
// //                     src={course.coverphoto}
// //                     alt="Course Thumbnail"
// //                     className="w-full h-full object-cover rounded"
// //                   />
// //                 </div>

// //                 <h3 className="text-black text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
// //                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
// //                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>

// //                 <div className="mt-auto flex justify-end">
// //                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
// //                 </div>
// //               </div>
// //             ))}
// //         </div>
 
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
// //             {courses.map((course) => (
// //               <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
// //                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
// //                   <img
// //                     src={course.coverphoto}
// //                     alt="Course Thumbnail"
// //                     className="w-full h-full object-cover rounded"
// //                   />
// //                 </div>

// //                 <h3 className="text-black text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
// //                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
// //                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>

// //                 <div className="mt-auto flex justify-end">
// //                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
// //                 </div>
// //               </div>
// //             ))}
// //         </div>
// //         </div>
// //       </div>
// //       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
// //     </div>
// //   );
// // };

// // // export default CoursePage;
// // import React, { useEffect, useState } from 'react';
// // import MainNavbar from './MainNavbar';
// // import axios from 'axios';
// // import {  useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const CoursePage = () => {
// //   const [courses, setCourses] = useState([]);
// //   // const [showSidebar, setShowSidebar] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         // const coursesResponse = await axios.get('https://lmsdatabase.onrender.com/getallcourses');
// //         const coursesResponse = await axios.get('https://lms-backend-1-l5v8.onrender.com/getallcourses');

// //         setCourses(coursesResponse.data);
// //       } catch (error) {
// //         console.error("Error fetching courses", error);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   const enrollInCourse = async (courseId) => {
// //     try {
// //       // Assuming user needs to be logged in to enroll
// //       // Replace this with your actual login check logic
// //       const isLoggedIn = false; // Replace with real check

// //       if (!isLoggedIn) {
// //         toast.info("Please log in to enroll in the course");
// //         navigate('/open-student');
// //         return;
// //       }

// //       // const response = await axios.post(`https://lmsdatabase.onrender.com/enroll-course/anonymous/${courseId}`);
// //       const response = await axios.post(`https://lms-backend-1-l5v8.onrender.com/enroll-course/anonymous/${courseId}`);

// //       toast.success("Course successfully enrolled");
// //       console.log(response.data); // Log the response for debugging
// //     } catch (error) {
// //       toast.error("Error during enrollment");
// //       console.error("Error during enrollment", error);
// //     }
// //   };

// //   // const toggleSidebar = () => {
// //   //   setShowSidebar(!showSidebar);
// //   // };

// //   // const closeSidebar = () => {
// //   //   setShowSidebar(false);
// //   // };

// //   return (
    
// //     <div className="bg-white min-h-screen flex flex-col">
// //       <MainNavbar />
     
// //       <div className="flex">
// //         <nav className="bg-white w-64 p-4 flex flex-col h-full shadow-lg">
         
// //         </nav>

// //          <div className="flex-1 flex flex-col p-6 pt-0">
          
// //           {/* <nav className="bg-white p-4 flex items-center justify-between">
// //             <div className="lg:hidden">
// //               {/* <button className="text-black focus:outline-none" onClick={toggleSidebar}> 
// //                 {/* <svg
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth="2"
// //                     d="M4 6h16M4 12h16m-7 6h7"
// //                   ></path>
// //                 </svg>
// //               </button>
// //             </div>
// //             <div className={`lg:hidden fixed top-0 right-0 h-96 w-64 bg-white transform transition-transform ease-in-out duration-300`}>
// //               <div className="p-4 flex justify-between items-center">
// //                 <div className="mt-20 ml-4 text-lg">
// //                   <Link to="/about-us" className="block text-black hover:text-gray-500">
// //                     About Us
// //                   </Link>
// //                 </div>
// //                 <button className="text-black focus:outline-none -mt-24" onClick={closeSidebar}>
// //                   <svg
// //                     className="h-6 w-6"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth="2"
// //                       d="M6 18L18 6M6 6l12 12"
// //                     ></path>
// //                   </svg>
// //                 </button> 
// //               </div>
// //             </div>
// //           </nav> 
// //  */}

          
// //           <div className="w-full mb-6 ">
// //             <img src="/final.png" alt="LMS Banner" className="w-full h-auto object-cover rounded m-0 top-0 "  style={{ margin: 0, padding: 0 }} />
// //           </div>
// //           <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">
// //                 Free course to enroll
// //               </p>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
// //             {courses.map((course) => (
// //               <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
// //                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
// //                   <img
// //                     src={course.coverphoto}
// //                     alt="Course Thumbnail"
// //                     className="w-full h-40 object-cover rounded"
// //                   />
// //                 </div>

// //                 <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
// //                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
// //                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>

// //                 <div className="mt-auto flex justify-end">
// //                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">
// //                Paid course 
// //               </p>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
// //             {courses.map((course) => (
// //               <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
// //                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
// //                   <img
// //                     src={course.coverphoto}
// //                     alt="Course Thumbnail"
// //                     className="w-full h-40 object-cover rounded"
// //                   />
// //                 </div>

// //                 <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
// //                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
// //                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>

// //                 <div className="mt-auto flex justify-end">
// //                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">

// //             DSA course enroll once get full section free
// //               </p>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
// //             {courses.map((course) => (
// //               <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
// //                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
// //                   <img
// //                     src={course.coverphoto}
// //                     alt="Course Thumbnail"
// //                     className="w-full h-40 object-cover rounded"
// //                   />
// //                 </div>

// //                 <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
// //                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
// //                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>

// //                 <div className="mt-auto flex justify-end">
// //                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
// //     </div>
// //   );
// // };

// // // export default CoursePage;
// // import React, { useEffect, useState } from 'react';
// // import MainNavbar from './MainNavbar';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const CoursePage = () => {
// //   const [courses, setCourses] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const coursesResponse = await axios.get('https://lms-backend-1-l5v8.onrender.com/getallcourses');
// //         setCourses(coursesResponse.data);
// //       } catch (error) {
// //         console.error("Error fetching courses", error);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   const enrollInCourse = async (courseId) => {
// //     try {
// //       const isLoggedIn = false; // Replace with real check

// //       if (!isLoggedIn) {
// //         toast.info("Please log in to enroll in the course");
// //         navigate('/open-student');
// //         return;
// //       }

// //       const response = await axios.post(`https://lms-backend-1-l5v8.onrender.com/enroll-course/anonymous/${courseId}`);
// //       toast.success("Course successfully enrolled");
// //       console.log(response.data); // Log the response for debugging
// //     } catch (error) {
// //       toast.error("Error during enrollment");
// //       console.error("Error during enrollment", error);
// //     }
// //   };

// //   const handlePayment = () => {
// //     navigate('/open-student');
// //   };

// //   const shuffleArray = (array) => {
// //     let currentIndex = array.length, temporaryValue, randomIndex;

// //     while (0 !== currentIndex) {
// //       randomIndex = Math.floor(Math.random() * currentIndex);
// //       currentIndex -= 1;

// //       temporaryValue = array[currentIndex];
// //       array[currentIndex] = array[randomIndex];
// //       array[randomIndex] = temporaryValue;
// //     }

// //     return array;
// //   };

// //   const jumbledCourses = shuffleArray([...courses]);

// //   return (
// //     <div className="bg-white min-h-screen flex flex-col">
// //       <MainNavbar />
// //       <div className="flex">
// //         <nav className="bg-white w-64 p-4 flex flex-col h-full shadow-lg"></nav>
// //         <div className="flex-1 flex flex-col p-6 pt-0">
// //           <div className="w-full mb-6">
// //             <img src="/final.png" alt="LMS Banner" className="w-full h-auto object-cover rounded m-0 top-0" style={{ margin: 0, padding: 0 }} />
// //           </div>
// //           <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">Free course to enroll</p>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
// //             {jumbledCourses.map((course, index) => (
// //               <div key={`${course.id}-free-${index}`} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
// //                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
// //                   <img src={course.coverphoto} alt="Course Thumbnail" className="w-full h-40 object-cover rounded" />
// //                 </div>
// //                 <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
// //                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
// //                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>
// //                 <div className="mt-auto flex justify-end">
// //                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">Paid course</p>

// // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
// //   {courses.map((course) => (
// //     <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
// //       <div className="mb-4 flex-grow bg-zinc-700 rounded">
// //         <img
// //           src={course.coverphoto}
// //           alt="Course Thumbnail"
// //           className="w-full h-40 object-cover rounded"
// //         />
// //       </div>

// //       <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
// //       <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
// //       <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>

// //       <div className="mt-auto flex justify-end">
// //         <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={handlePayment}>Enroll</button>
// //         <button className="bg-blue-500 text-white hover:bg-blue-700 px-2 py-1 rounded ml-2 focus:outline-none focus:shadow-outline" onClick={handlePayment}>Pay</button> {/* Assuming 100 is the amount */}
// //       </div>
// //     </div>
// //   ))}
// // </div>
// //           <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">Enroll once get full section free</p>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
// //             {jumbledCourses.map((course, index) => (
// //               <div key={`${course.id}-dsa-${index}`} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
// //                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
// //                   <img src={course.coverphoto} alt="Course Thumbnail" className="w-full h-40 object-cover rounded" />
// //                 </div>
// //                 <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
// //                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
// //                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>
// //                 <div className="mt-auto flex justify-end">
// //                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
// //     </div>
// //   );
// // };

// export default CoursePage;
import React, { useEffect, useState } from 'react';
import MainNavbar from './MainNavbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLandingPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesResponse = await axios.get('https://lms-backend-1-l5v8.onrender.com/getallcourses');
        setCourses(coursesResponse.data);
      } catch (error) {
        console.error("Error fetching courses", error);
      }
    };

    fetchCourses();
  }, []);

  const enrollInCourse = async (courseId) => {
    try {
      const isLoggedIn = false; // Replace with real check

      if (!isLoggedIn) {
        toast.info("Please log in to enroll in the course");
        navigate('/open-student');
        return;
      }

      const response = await axios.post(`https://lms-backend-1-l5v8.onrender.com/enroll-course/anonymous/${courseId}`);
      toast.success("Course successfully enrolled");
      console.log(response.data); // Log the response for debugging
    } catch (error) {
      toast.error("Error during enrollment");
      console.error("Error during enrollment", error);
    }
  };

  const handlePayment = () => {
    navigate('/open-student');
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const jumbledCourses = shuffleArray([...courses]);

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <MainNavbar />
      <div className="flex">
        <nav className="bg-white w-64 p-4 flex flex-col h-full shadow-lg"></nav>
        <div className="flex-1 flex flex-col p-6 pt-0">
          <div className="relative w-full mb-6">
            <img src="/final.png" alt="LMS Banner" className="w-full h-auto object-cover rounded m-0 top-0" style={{ margin: 0, padding: 0 }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-2/5 p-2 h-16 border border-gray-300 rounded text-black"
              />
            </div>
          </div>

          {searchQuery && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
              {filteredCourses.map((course, index) => (
                <div key={`${course.id}-search-${index}`} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
                  <div className="mb-4 flex-grow bg-zinc-700 rounded">
                    <img src={course.coverphoto} alt="Course Thumbnail" className="w-full h-40 object-cover rounded" />
                  </div>
                  <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
                  <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
                  <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>
                  <div className="mt-auto flex justify-end">
                    <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">Free course to enroll</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
            {jumbledCourses.map((course, index) => (
              <div key={`${course.id}-free-${index}`} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
                <div className="mb-4 flex-grow bg-zinc-700 rounded">
                  <img src={course.coverphoto} alt="Course Thumbnail" className="w-full h-40 object-cover rounded" />
                </div>
                <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
                <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
                <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>
                <div className="mt-auto flex justify-end">
                  <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">Paid course</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
                <div className="mb-4 flex-grow bg-zinc-700 rounded">
                  <img
                    src={course.coverphoto}
                    alt="Course Thumbnail"
                    className="w-full h-40 object-cover rounded"
                  />
                </div>
                <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
                <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
                <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>
                <div className="mt-auto flex justify-end">
                  <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={handlePayment}>Enroll</button>
                  <button className="bg-blue-500 text-white hover:bg-blue-700 px-2 py-1 rounded ml-2 focus:outline-none focus:shadow-outline" onClick={handlePayment}>Pay</button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">Enroll once get full section free</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
            {jumbledCourses.map((course, index) => (
              <div key={`${course.id}-dsa-${index}`} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
                <div className="mb-4 flex-grow bg-zinc-700 rounded">
                  <img src={course.coverphoto} alt="Course Thumbnail" className="w-full h-40 object-cover rounded" />
                </div>
                <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
                <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
                <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>
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

export default MainLandingPage;
