// // components/StudentRegisterPage.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const StudentRegisterPage = () => {
//   const [studentname, setStudentName] = useState("");
//   const [studentemail, setStudentEmail] = useState("");
//   const [studentpass, setStudentPass] = useState("");

//   const handleStudentSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       username: studentname,
//       email: studentemail,
//       password: studentpass,
//     };

//     axios.post("https://lmsdatabase.onrender.com/student_add", data)
//       .then((res) => {
//         if (res.status === 201) {
//           // Handle success
//         } else {
//           return Promise.reject();
//         }
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-zinc-900 p-6">
//       <div className="card shadow-2xl h-1/2 md:w-1/2 xl:w-1/3 bg-zinc-800">
//         <div className="form-container p-6">
//           <div className="form student-form">
//             <h2 className="text-white text-md mb-8">Student Registration</h2>
//             <form onSubmit={handleStudentSubmit}>
//               <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-7 bg-zinc-600 text-white" onChange={(event) => setStudentName(event.target.value)} type="text" placeholder="Username" />
//               <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-7 bg-zinc-600 text-white" onChange={(event) => setStudentEmail(event.target.value)} type="email" placeholder="Email" />
//               <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-7 bg-zinc-600 text-white" onChange={(event) => setStudentPass(event.target.value)} type="password" placeholder="Password" />
//               <button className="bg-orange-500 text-white hover:bg-orange-700 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64">SignUp as Student</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentRegisterPage;
import React, { useState } from 'react';
import axios from 'axios';

const StudentRegisterPage = () => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPass, setStudentPass] = useState("");

  const handleStudentSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: studentName,
      email: studentEmail,
      password: studentPass,
    };

    axios.post("https://lmsdatabase.onrender.com/student_add", data)
      .then((res) => {
        if (res.status === 201) {
          alert("Student registered successfully!");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        alert("Registration failed: " + err.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900 p-6">
      <div className="card shadow-2xl h-1/2 md:w-1/2 xl:w-1/3 bg-zinc-800">
        <div className="form-container p-6">
          <div className="form student-form">
            <h2 className="text-white text-md mb-8">Student Registration</h2>
            <form onSubmit={handleStudentSubmit}>
              <input 
                className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-7 bg-zinc-600 text-white" 
                onChange={(event) => setStudentName(event.target.value)} 
                type="text" 
                placeholder="Username" 
                value={studentName} 
              />
              <input 
                className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-7 bg-zinc-600 text-white" 
                onChange={(event) => setStudentEmail(event.target.value)} 
                type="email" 
                placeholder="Email" 
                value={studentEmail} 
              />
              <input 
                className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-7 bg-zinc-600 text-white" 
                onChange={(event) => setStudentPass(event.target.value)} 
                type="password" 
                placeholder="Password" 
                value={studentPass} 
              />
              <button 
                className="bg-orange-500 text-white hover:bg-orange-700 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64"
                type="submit"
              >
                Sign Up as Student
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegisterPage;
