import React from 'react'
import { NavLink } from 'react-router-dom';






const TeacherSidebar = () => {
    return (
        <aside className="bg-gray-800 text-white p-4 md:w-64 h-screen fixed left-0 top-0 overflow-y-auto ">
          <div className="flex justify-center my-4 p-5 ">
            <h2 className="text-white text-3xl font-semibold">Sidebar</h2>
          </div>
          <ul className="space-y-4 font-sans pb-10 text-2xl ">
            <li className='pb-5'>
              <NavLink
                to="/"
                exact
                className="text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
              >
                Home
              </NavLink>
            </li>
           
            <li className='pb-5'>
              <NavLink
                to="/assessments"
                className="text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
              >
                My Assessments
              </NavLink>
            </li>
           
    
            <li className='pb-5 '>
              <NavLink
                to="/recordings"
                style={{ marginBottom: '20px' }}
                className="text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
              >
                Recordings
              </NavLink>
            </li>
          
            <li className='pb-5 '>
              <NavLink
                to="/student-queries"
                
                className="text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
              >
                Ask queries
              </NavLink>
            </li>
           
          
           
           
          </ul>
        </aside>
      );
    };
    

export default TeacherSidebar


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import AddRecording from './AddRecording'; // Ensure this path is correct

// const TeacherSidebar = () => {
//     const [isAddingRecording, setIsAddingRecording] = useState(false);

//     const toggleAddRecording = () => {
//         setIsAddingRecording(prevState => !prevState);
//     };

//     return (
//         <aside className="bg-gray-800 text-white p-4 md:w-64 h-screen fixed left-0 top-0 overflow-y-auto ">
//             <div className="flex justify-center my-4 p-5 ">
//                 <h2 className="text-white text-3xl font-semibold">Sidebar</h2>
//             </div>
//             <ul className="space-y-4 font-sans pb-10 text-2xl ">
//                 <li className='pb-5'>
//                     <NavLink
//                         to="/"
//                         exact
//                         className="text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
//                     >
//                         Home
//                     </NavLink>
//                 </li>
//                 <li className='pb-5'>
//                     <NavLink
//                         to="/assessments"
//                         className="text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
//                     >
//                         My Assessments
//                     </NavLink>
//                 </li>
//                 {/* <li className='pb-5'>
//                     <NavLink
//                         to="/recordings"
//                         className="text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
//                     >
//                         Recordings
//                     </NavLink>
//                 </li> */}
//                 <li className='pb-5'>
//                     <NavLink
//                         to="/student-queries"
//                         className="text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
//                     >
//                         Ask queries
//                     </NavLink>
//                 </li>
//                 <li className='pb-5'>
//                     <button
//                         onClick={toggleAddRecording}
//                         className="text-white hover:bg-white hover:text-black px-4 py-2 rounded mb-4 w-full"
//                     >
//                         {isAddingRecording ? 'Cancel' : 'Add Recording'}
//                     </button>
//                 </li>
//             </ul>
//             {isAddingRecording && <AddRecording />} {/* Conditionally render AddRecording */}
//         </aside>
//     );
// };

// export default TeacherSidebar;