import React from 'react'
import { NavLink } from 'react-router-dom';

const StudentSidebar = () => {
    return (
        <aside className="bg-gray-800 text-white p-4 md:w-64 h-screen fixed left-0 top-0 overflow-y-auto ">
          <div className="flex justify-center my-4 ">
            <h2 className="text-white text-2xl font-semibold">Sidebar</h2>
          </div>
          <ul className="space-y-4 font-sans ">
            <li>
              <NavLink
                to="/"
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
                Recording Sessions
              </NavLink>
            </li>
          
            <li>
              <NavLink
                to="/student-queries"
                className={({ isActive }) => 
                  isActive ? "block px-4 py-2 rounded bg-white text-black" : "block px-4 py-2 rounded"
                }
              >
                Ask queries
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
    

export default StudentSidebar