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

// export default MainLandingPage;import React from 'react';
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

const MainLandingPage = () => {
  const backgroundImageUrl = 'https://static.vecteezy.com/system/resources/previews/001/410/879/non_2x/e-learning-online-education-futuristic-banner-vector.jpg'; // Replace with your actual HTTP URL

  return (
    <div className="flex flex-col min-h-screen">
      <MainNavbar />
      <div
        className="flex-grow flex flex-col items-center justify-center bg-white p-6 w-full"
        style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="mb-14 -mt-14 text-black md:text-3xl xl:text-5xl">Welcome to Our LMS</h1>
      </div>
      <MainFooter />
    </div>
  );
};

export default MainLandingPage;
