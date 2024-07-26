// // import React, { useEffect, useState } from 'react';
// // import MainNavbar from './MainNavbar';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const StudentLand = () => {
// //   const { studentId } = useParams();
// //   const navigate = useNavigate(); // Add this line
// //   const [student, setStudent] = useState(null);
// //   const [courses, setCourses] = useState([]);
// //   const [showSidebar, setShowSidebar] = useState(false);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch student data
// //         const studentResponse = await axios.get(`https://lmsdatabase.onrender.com/getStudentData/${studentId}`);
// //         setStudent(studentResponse.data);

// //         // Fetch all courses
// //         const coursesResponse = await axios.get('https://lmsdatabase.onrender.com/getallcourses');
// //         console.log({coursesResponse});
// //         setCourses(coursesResponse.data);
// //       } catch (error) {
// //         console.error("Error fetching data", error);
// //       }
// //     };

// //     fetchData();
// //   }, [studentId]);

// //   const enrollInCourse = async (courseId) => {
// //     try {
// //       const response = await axios.post(`https://lmsdatabase.onrender.com/enroll-course/${studentId}/${courseId}`);
// //       toast.success("Course successfully enrolled")
// //       console.log(response.data); // Log the response for debugging
// //       // Optionally, show a toast or update the UI to indicate successful enrollment
// //     } catch (error) {
// //       toast.error("Course already enrolled")
// //       console.error("Error during enrollment", error);
// //       // Optionally, show a toast or update the UI to indicate failed enrollment
// //     }
// //   };

// //   // Function to handle the click event of the "Enrolled Courses" button
// //   const viewEnrolledCourses = () => {
// //     navigate(`/enrolled-courses/${studentId}`);
// //   };

// //   const toggleSidebar = () => {
// //     setShowSidebar(!showSidebar);
// //   };

// //   const closeSidebar = () => {
// //     setShowSidebar(false);
// //   };
     
// //   // const handleSendToNextPage = (courseId) => {
// //   //   console.log(`Send to next page with Course ID: ${courseId}`);
// //   // };

// //   return (
// //     <div className="bg-white min-h-screen flex flex-col">
// //       <MainNavbar/>
// //       <nav className="bg-white p-4 flex items-center justify-between">
// //         <div className="flex items-center">
// //           <div className="xl:h-10 xl:w-10 h-8 w-8 bg-green-600 rounded-full mr-4"></div>
// //           {student ? (
// //             <p className="text-black md:text-md sm:text-sm xl:text-xl">Welcome, {student.username}</p>
// //           ) : (
// //             <p>Loading...</p>
// //           )}
// //         </div>

// //         <div className="lg:hidden">
// //           <button className="text-black focus:outline-none" onClick={toggleSidebar}>
// //             <svg
// //               className="h-6 w-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M4 6h16M4 12h16m-7 6h7"
// //               ></path>
// //             </svg>
// //           </button>
// //         </div>
// //         <div className={`lg:hidden fixed top-0 right-0 h-96 w-64 bg-white transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
// //           <div className="p-4 flex  justify-between items-center">
// //             <div className=" mt-20 ml-4 text-lg">
// //               <p className="block text-black hover:text-gray-500 cursor-pointer" onClick={viewEnrolledCourses}>
// //                 My Courses
// //              </p>

// //               <Link to="/about-us" className="block text-black hover:text-gray-500">
// //                 About Us
// //               </Link>
// //             </div>
// //             <button className="text-black focus:outline-none -mt-24" onClick={closeSidebar}>
// //               <svg
// //                 className="h-6 w-6"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M6 18L18 6M6 6l12 12"
// //                 ></path>
// //               </svg>
// //             </button>
// //           </div>
// //         </div>
// //         <div className="hidden lg:flex">
// //           <button onClick={viewEnrolledCourses} className="bg-green-500 text-black hover:bg-gray-500 px-4 py-2 rounded focus:outline-none focus:shadow-outline">
// //             My Courses
// //           </button>
// //         </div>
// //       </nav>

// //       <div className="container mx-auto p-6">
// //         <div className="card rounded-md shadow-lg shadow-emerald-500 bg-white p-5 mb-10 flex flex-col items-center xl:flex-row xl:justify-between">
// //           <div className="xl:w-2/3 w-full xl:mb-0 mb-6 ">
// //             <p className="text-black xl:-ml-0 md:text-xl sm:text-md xl:text-3xl mb-4">Explore the Trending Courses</p>
// //             <p className="text-black md:text-md sm:text-52 xl:text-xl">
// //               Welcome to our Learning Management System dashboard! Your gateway to a world of knowledge awaits. Navigate seamlessly through your courses, track your progress, and stay connected with your learning community. Explore interactive content, engage in discussions, and access resources tailored to enhance your educational journey.
// //             </p>
// //           </div>
// //           <div className="xl:w-1/3 w-full xl:mb-0 mb-6 xl:ml-6 flex  justify-center ">
// //             <img src='https://cdn-icons-png.flaticon.com/256/10984/10984287.png' className="xl:h-64 xl:w-64 md:h-44 md:w-44 h-28 w-28" alt="Course"></img>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
// //   {courses.map((course) => (
// //     <div key={course.id} className="bg-green-300 p-4 rounded shadow-md relative h-96 cursor-pointer overflow-hidden transform transition-transform hover:scale-105">
// //       {/* Thumbnail */}
// //       <div className="mb-4 h-44 bg-zinc-700 rounded">
// //         <img
// //           src={course.coverphoto}
// //           alt="Course Thumbnail"
// //           className="w-full h-full object-cover rounded"
// //         />
// //       </div>

// //       <h3 className="text-black text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">{course.title}</h3>
// //       <p className="mb-3 font-normal text-black dark:text-gray-400">Teacher: {course.teacher.username}</p>
// //       <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap">{course.description}</p>

// //       <div className="absolute bottom-4 right-4 flex space-x-2">
// //         <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
// //       </div>
// //     </div>
// //   ))}
// // </div>

// //       </div>
// //       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
// //     </div>
    
// //   );
// // };

// // export default StudentLand;
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import StudentSidebar from './StudentSidebar';

// const StudentLand = () => {
//   const { studentId } = useParams();
//   const navigate = useNavigate();
//   const [student, setStudent] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch student data
//         // const studentResponse = await axios.get(`https://lmsdatabase.onrender.com/getStudentData/${studentId}`);
//         const studentResponse = await axios.get(`https://lms-backend-1-l5v8.onrender.com/getStudentData/${studentId}`);

//         setStudent(studentResponse.data);

//         // Fetch all courses
//         // const coursesResponse = await axios.get('https://lmsdatabase.onrender.com/getallcourses');
//         const coursesResponse = await axios.get('https://lms-backend-1-l5v8.onrender.com/getallcourses');

//         console.log({ coursesResponse });
//         setCourses(coursesResponse.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, [studentId]);

//   const enrollInCourse = async (courseId) => {
//     try {
//       // const response = await axios.post(`https://lmsdatabase.onrender.com/enroll-course/${studentId}/${courseId}`);
//       const response = await axios.post(`https://lms-backend-1-l5v8.onrender.com/enroll-course/${studentId}/${courseId}`);

//       toast.success("Course successfully enrolled")
//       console.log(response.data); // Log the response for debugging
//     } catch (error) {
//       toast.error("Course already enrolled")
//       console.error("Error during enrollment", error);
//     }
//   };

//   const viewEnrolledCourses = () => {
//     navigate(`/enrolled-courses/${studentId}`);
//   };

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   const closeSidebar = () => {
//     setShowSidebar(false);
//   };

//   return (
//     <div className="bg-white min-h-screen flex flex-col">
// <StudentSidebar/>      <div className="flex">
//         <nav className="bg-white w-64 p-4 flex flex-col h-full shadow-lg">
//           <div className="mt-20 ml-4 text-lg">
//             <p className="block text-black hover:text-gray-500 cursor-pointer" onClick={viewEnrolledCourses}>
//               My Courses
//             </p>
//             {/* <Link to="/about-us" className="block text-black hover:text-gray-500">
//               About Us
//             </Link> */}
//           </div>
//         </nav>

//         <div className="flex-1 flex flex-col">
//           <nav className="bg-white p-4 flex items-center justify-between">
//             <div className="flex items-center">
//               <div className="xl:h-10 xl:w-10 h-8 w-8 bg-black rounded-full mr-4"></div>
//               {student ? (
//                 <p className="text-black md:text-md sm:text-sm xl:text-xl">Welcome, {student.username}</p>
//               ) : (
//                 <p>Loading...</p>
//               )}
//             </div>

//             <div className="lg:hidden">
//               <button className="text-black focus:outline-none" onClick={toggleSidebar}>
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <div className={`lg:hidden fixed top-0 right-0 h-96 w-64 bg-white transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
//               <div className="p-4 flex justify-between items-center">
//                 <div className="mt-20 ml-4 text-lg">
//                   <p className="block text-black hover:text-gray-500 cursor-pointer" onClick={viewEnrolledCourses}>
//                     My Courses
//                   </p>

//                   <Link to="/about-us" className="block text-black hover:text-gray-500">
//                     About Us
//                   </Link>
//                 </div>
//                 <button className="text-black focus:outline-none -mt-24" onClick={closeSidebar}>
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div className="hidden lg:flex">
//               <button onClick={viewEnrolledCourses} className="bg-gray-800 text-white hover:bg-gray-500 px-6 py-6 rounded focus:outline-none focus:shadow-outline">
//                 My Enrolled Courses
//               </button>
//             </div>
//           </nav>

//           <div className="container mx-auto p-6">
//             <div className="card rounded-md shadow-lg shadow-gray-300 bg-white p-5 mb-10 flex flex-col items-center xl:flex-row xl:justify-between">
//             <div className="xl:2/3 w-full xl:mb-0 mb-0">
//                 <p className="text-black xl:-ml-0 md:text-xl sm:text-md xl:text-3xl mb-4">Explore the Trending Courses</p>
//                 <p className="text-black md:text-md sm:text-52 xl:text-xl">
//                   Welcome to our Learning Management System dashboard! Your gateway to a world of knowledge awaits. Navigate seamlessly through your courses, track your progress, and stay connected with your learning community. Explore interactive content, engage in discussions, and access resources tailored to enhance your educational journey.
//                 </p>
//               </div>
//               {/* <div className="xl:w-1/3 w-full xl:mb-0 mb-6 xl:ml-6 flex justify-center ">
//                 <img src='https://cdn-icons-png.flaticon.com/256/10984/10984287.png' className="xl:h-64 xl:w-64 md:h-44 md:w-44 h-28 w-28" alt="Course"></img>
//               </div> */}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
//             {courses.map((course) => (
//               <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
//                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
//                   <img
//                     src={course.coverphoto}
//                     alt="Course Thumbnail"
//                     className="w-full h-40 object-cover rounded"
//                   />
//                 </div>

//                 <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
//                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
//                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>

//                 <div className="mt-auto flex justify-end">
//                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10">
//             {courses.map((course) => (
//               <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-700 hover:text-white">
//                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
//                   <img
//                     src={course.coverphoto}
//                     alt="Course Thumbnail"
//                     className="w-full h-40 object-cover rounded"
//                   />
//                 </div>

//                 <h3 className="text-black text-lg font-semibold mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.title}</h3>
//                 <p className="mb-3 font-normal text-black dark:text-gray-400 hover:text-white">Teacher: {course.teacher.username}</p>
//                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap hover:text-white">{course.description}</p>

//                 <div className="mt-auto flex justify-end">
//                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
//                 </div>
//               </div>
//             ))}
//           </div>

          
//           </div>
//         </div>
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//     </div>
//   );
// };

//  export default StudentLand;
// import React, { useEffect, useState } from 'react';
// import MainNavbar from './MainNavbar';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const StudentLand = () => {
//   const { studentId } = useParams();
//   const navigate = useNavigate();
//   const [courses, setCourses] = useState([]);
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch student data
      
//         // Fetch all courses
//         const coursesResponse = await axios.get('https://lmsdatabase.onrender.com/getallcourses');
//         setCourses(coursesResponse.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, [studentId]);

  
//   const enrollInCourse = async (courseId) => {
//     try {
//       const response = await axios.post(`https://lmsdatabase.onrender.com/enroll-course/${studentId}/${courseId}`);
//       toast.success("Course successfully enrolled")
//       console.log(response.data); // Log the response for debugging
//       // Optionally, show a toast or update the UI to indicate successful enrollment
//     } catch (error) {
//       toast.error("Course already enrolled")
//       console.error("Error during enrollment", error);
//       // Optionally, show a toast or update the UI to indicate failed enrollment
//     }
//   };

//   const viewEnrolledCourses = () => {
//     navigate(`/enrolled-courses/${studentId}`);
//   };

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   const closeSidebar = () => {
//     setShowSidebar(false);
//   };

//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       <MainNavbar />
//       <div className="flex">
//         <nav className="bg-white w-64 p-4 flex flex-col h-full shadow-lg">
//           <div className="mt-20 ml-4 text-lg">
          
//             <Link to="/about-us" className="block text-black hover:text-gray-500">
//               About Us
//             </Link>
//           </div>
//         </nav>

//         <div className="flex-1 flex flex-col p-6">
//           <nav className="bg-white p-4 flex items-center justify-between">
              

//             <div className="lg:hidden">
//               <button className="text-black focus:outline-none" onClick={toggleSidebar}>
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <div className={`lg:hidden fixed top-0 right-0 h-96 w-64 bg-white transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
//               <div className="p-4 flex justify-between items-center">
//                 <div className="mt-20 ml-4 text-lg">
//                   <p className="block text-black hover:text-gray-500 cursor-pointer" onClick={viewEnrolledCourses}>
//                     My Enrolled Courses
//                   </p>

//                   <Link to="/about-us" className="block text-black hover:text-gray-500">
//                     About Us
//                   </Link>
//                 </div>
//                 <button className="text-black focus:outline-none -mt-24" onClick={closeSidebar}>
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
          
//           </nav>

//           <div className="card rounded-md shadow-lg shadow-gray-500 bg-white  p-25 mb-20 flex flex-col items-center xl:flex-row xl:justify-between">
//             <div className="xl:2/3 w-full xl:mb-0 mb-0 ">
//               <h2 className="text-black xl:-ml-0 md:text-xl sm:text-md xl:text-3xl mb-0 text-center">Explore the Trending Courses</h2>
//               <p className="text-black md:text-md sm:text-32 xl:text-xl text-center">
//                 Welcome to our Learning Management System dashboard! Your gateway to a world of knowledge awaits. </p>
//             </div>
            
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
//             {courses.map((course) => (
//               <div key={course.id} className="bg-gray-300 p-4 rounded shadow-md relative flex flex-col h-80 cursor-pointer overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-500">
//                 <div className="mb-4 flex-grow bg-zinc-700 rounded">
//                   <img
//                     src={course.coverphoto}
//                     alt="Course Thumbnail"
//                     className="w-full h-full object-cover rounded"
//                   />
//                 </div>

//                 <h3 className="text-black text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">{course.title}</h3>
//                 <p className="mb-3 font-normal text-black dark:text-gray-400">Teacher: {course.teacher.username}</p>
//                 <p className="text-black overflow-hidden overflow-ellipsis whitespace-nowrap">{course.description}</p>

//                 <div className="mt-auto flex justify-end">
//                   <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//     </div>
//   );
// };

// export default StudentLand;
// StudentLand.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentSidebar from './StudentSidebar';
import PaymentForm from './PaymentForm';

const StudentLand = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResponse = await axios.get(`https://lms-backend-1-l5v8.onrender.com/getStudentData/${studentId}`);
        setStudent(studentResponse.data);

        const coursesResponse = await axios.get('https://lms-backend-1-l5v8.onrender.com/getallcourses');
        setCourses(coursesResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [studentId]);

  const enrollInCourse = async (courseId) => {
    try {
      const response = await axios.post(`https://lms-backend-1-l5v8.onrender.com/enroll-course/${studentId}/${courseId}`);
      toast.success("Course successfully enrolled");
      console.log(response.data);
    } catch (error) {
      toast.error("Course already enrolled");
      console.error("Error during enrollment", error);
    }
  };

  const viewEnrolledCourses = () => {
    navigate(`/enrolled-courses/${studentId}`);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const handlePay = (courseId, amount) => {
    setSelectedCourse(courseId);
    setPaymentAmount(amount);
    setShowPaymentForm(true);
  };

  const closePaymentForm = () => {
    setShowPaymentForm(false);
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


  return (
    <div className="bg-white min-h-screen flex flex-col">
      <StudentSidebar />
      <div className="flex">
        <nav className="bg-white w-64 p-4 flex flex-col h-full shadow-lg">
          <div className="mt-20 ml-4 text-lg">
            <p className="block text-black hover:text-gray-500 cursor-pointer" onClick={viewEnrolledCourses}>
              My Courses
            </p>
          </div>
        </nav>

        <div className="flex-1 flex flex-col">
          <nav className="bg-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="xl:h-10 xl:w-10 h-8 w-8 bg-black rounded-full mr-4"></div>
              {student ? (
                <p className="text-black md:text-md sm:text-sm xl:text-xl">Welcome, {student.username}</p>
              ) : (
                <p>Loading...</p>
              )}
            </div>

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
                  <p className="block text-black hover:text-gray-500 cursor-pointer" onClick={viewEnrolledCourses}>
                    My Courses
                  </p>

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
            <div className="hidden lg:flex">
              <button onClick={viewEnrolledCourses} className="bg-gray-800 text-white hover:bg-gray-500 px-6 py-6 rounded focus:outline-none focus:shadow-outline">
                My Enrolled Courses
              </button>
            </div>
          </nav>

          <div className="container mx-auto p-6">
            <div className="card rounded-md shadow-lg shadow-gray-300 bg-white p-5 mb-10 flex flex-col items-center xl:flex-row xl:justify-between">
              <div className="xl:2/3 w-full xl:mb-0 mb-0">
                <p className="text-black xl:-ml-0 md:text-xl sm:text-md xl:text-3xl mb-4">Explore the Trending Courses</p>
                <p className="text-black md:text-md sm:text-52 xl:text-xl">
                  Welcome to our Learning Management System dashboard! Your gateway to a world of knowledge awaits. Navigate seamlessly through your courses, track your progress, and stay connected with your learning community. Explore interactive content, engage in discussions, and access resources tailored to enhance your educational journey.
                </p>
              </div>
            </div>

            
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
                    <button className="bg-black text-white hover:bg-gray-500 px-2 py-1 rounded focus:outline-none focus:shadow-outline" onClick={() => enrollInCourse(course._id)}>Enroll</button>
                    <button className="bg-blue-500 text-white hover:bg-blue-700 px-2 py-1 rounded ml-2 focus:outline-none focus:shadow-outline" onClick={() => handlePay(course._id, 100)}>Pay</button> {/* Assuming 100 is the amount */}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-black md:text-md sm:text-32 xl:text-3xl text-center p-12 font-bold">DSA course enroll once get full section free</p>
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
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      {showPaymentForm && (
        <PaymentForm courseId={selectedCourse} amount={paymentAmount} onClose={closePaymentForm} />
      )}
    </div>
  );
};

export default StudentLand;
