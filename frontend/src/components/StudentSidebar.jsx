// import React from 'react'
// import { NavLink } from 'react-router-dom';

// const StudentSidebar = () => {
//     return (
//         <aside className="bg-gray-800 text-white p-4 md:w-64 h-screen fixed left-0 top-0 overflow-y-auto ">
//           <div className="flex justify-center my-4 p-5 ">
//             <h2 className="text-white text-3xl font-semibold">Sidebar</h2>
//           </div>
//           <ul className="space-y-4 font-sans pb-10 text-2xl ">
//             <li>
//               <NavLink
//                 to="/student-land/:studentId/studenthome"
//                 exact
//                 className={({ isActive }) => 
//                   isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
//                 }
//               >
//                 Home
//               </NavLink>
//             </li>
           
//             <li>
//               <NavLink
//                 to="/assessments"
//                 className={({ isActive }) => 
//                   isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
//                 }
//               >
//                 My Assessments
//               </NavLink>
//             </li>
           
    
//             <li>
//               <NavLink
//                 to="/open-student"
//                 className={({ isActive }) => 
//                   isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
//                 }
//               >
//                 Recordings
//               </NavLink>
//             </li>
          
//             <li>
//               <NavLink
//                 to="/student-queries"
//                 className={({ isActive }) => 
//                   isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
//                 }
//               >
//                 Ask queries
//               </NavLink>
//             </li>
           
          
           
//             <li>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) => 
//                   isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
//                 }
//               >
//                 About Page
//               </NavLink>
//             </li> 
//             <li>
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) => 
//                   isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
//                 }
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </aside>
//       );
//     };
    

// export default StudentSidebar
import React from 'react'
import { NavLink } from 'react-router-dom';

const StudentSidebar = () => {
    return (
        <aside className="bg-gray-800 text-white p-4 md:w-64 h-screen fixed left-0 top-0 overflow-y-auto">
            <div className="flex justify-center my-4 p-5">
                <h2 className="text-white text-3xl font-semibold">Sidebar</h2>
            </div>
            <ul className="space-y-4 font-sans pb-10 text-2xl">
                <li>
                    <NavLink
                        to="/student-land/:studentId/studenthome"
                        exact
                        className={({ isActive }) => 
                            isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/assessments"
                        className={({ isActive }) => 
                            isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
                        }
                    >
                        My Assessments
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/open-student"
                        className={({ isActive }) => 
                            isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
                        }
                    >
                        Recordings
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/student-queries"
                        className={({ isActive }) => 
                            isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
                        }
                    >
                        Ask Queries
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => 
                            isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
                        }
                    >
                        About Page
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => 
                            isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
                        }
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default StudentSidebar;
