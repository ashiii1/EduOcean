// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const LandingPage = () => {
// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 w-full">
// //       <h1 className="mb-14 -mt-14 text-black md:text-3xl xl:text-5xl">
// //         Welcome to our Learning Management System
// //       </h1>
// //       <div className="flex flex-col md:flex-row w-full md:w-3/4 xl:w-4/5 xl:h-80 gap-6">
// //         <div className="shadow-2xl flex flex-col md:w-1/2 p-4 rounded justify-center bg-green-600 min-w-min my-5">
// //           <p className="text-white text-lg md:text-xl xl:text-3xl mb-4">
// //             Discover a World of Learning at Your Fingertips
// //           </p>
// //           <p className="text-white text-sm md:text-base xl:text-xl mb-4">
// //             Your Gateway to Knowledge and Growth
// //           </p>
// //           <Link to="/open-student" className="nav-link mt-4">
// //             <button className="bg-black text-white hover:bg-green-800 mt-10 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64">
// //               Signin as Student
// //             </button>
// //           </Link>
// //         </div>
// //       </div>
// //       <Link to="/register-student" className="nav-link -mb-10">
// //         <button className="bg-black text-white hover:bg-green-800 -mb-36 hover:text-white font-bold py-2 px-4 mt-8 rounded focus:outline-none focus:shadow-outline md:w-64">
// //           Register
// //         </button>
// //       </Link>
// //     </div>
// //   );
// // };

// // export default LandingPage;
// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow flex flex-col items-center justify-center bg-white p-6 w-full">
//         <h1 className="mb-14 -mt-14 text-black md:text-3xl xl:text-5xl">Course List</h1>
//         <div className="flex flex-col md:flex-row w-full md:w-3/4 xl:w-4/5 xl:h-80 gap-6">
//           <div className="shadow-2xl flex flex-col md:w-1/2 p-4 rounded justify-center bg-green-600 min-w-min my-5">
//             <p className="text-white text-lg md:text-xl xl:text-3xl mb-4">Signin as Student</p>
//             <Link to="/open-student" className="nav-link mt-4">
//               <button className="bg-black text-white hover:bg-green-800 mt-10 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64">
//                 Signin as Student
//               </button>
//             </Link>
//           </div>
//           <div className="shadow-2xl flex flex-col md:w-1/2 p-4 rounded justify-center bg-green-600 min-w-min my-5">
//             <p className="text-white text-lg md:text-xl xl:text-3xl mb-4">Register as Student</p>
//             <Link to="/register-student" className="nav-link mt-4">
//               <button className="bg-black text-white hover:bg-green-800 mt-10 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64">
//                 Register as Student
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;
import { Link } from 'react-router-dom';
import MainNavbar from './MainNavbar';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavbar />
      <div className="flex-grow flex items-center justify-center bg-white p-6">
        <div className="max-w-4xl w-full mx-auto space-y-10">
          <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-800">Welcome to t course section</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="shadow-lg bg-green-600 rounded-lg p-6 text-white flex flex-col items-center justify-center">
              <p className="text-xl md:text-3xl font-bold mb-4">Login </p>
              <Link to="/open-student" className="text-center w-full">
                <button className="bg-black text-white hover:bg-green-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-3/4 lg:w-1/2">
                  Login
                </button>
              </Link>
            </div>
            <div className="shadow-lg bg-green-600 rounded-lg p-6 text-white flex flex-col items-center justify-center">
              <p className="text-xl md:text-3xl font-bold mb-4">Register</p>
              <Link to="/register-student" className="text-center w-full">
                <button className="bg-black text-white hover:bg-green-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-3/4 lg:w-1/2">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
