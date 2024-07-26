// // components/TeacherRegisterPage.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const TeacherRegisterPage = () => {
//   const [teachername, setTeacherName] = useState("");
//   const [teacheremail, setTeacherEmail] = useState("");
//   const [teacherpass, setTeacherPass] = useState("");
//   const [teacherqualification, setTeacherQualification] = useState("");

//   const handleTeacherSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       username: teachername,
//       email: teacheremail,
//       password: teacherpass,
//       highestQualification: teacherqualification,
//     };

//     console.log('Teacher data to be submitted:', data); // Debugging line

//     axios.post("https://lmsdatabase.onrender.com/teacher_add", data)
//       .then((res) => {
//         if (res.status === 201) {
//           alert('Teacher registered successfully');
//         } else {
//           return Promise.reject();
//         }
//       })
//       .catch((err) => {
//         if (err.response) {
//           // The request was made and the server responded with a status code
//           // that falls out of the range of 2xx
//           console.error('Error response:', err.response.data);
//           alert(`Error: ${err.response.data.message}`);
//         } else if (err.request) {
//           // The request was made but no response was received
//           console.error('Error request:', err.request);
//           alert('Error: No response from server');
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.error('Error', err.message);
//           alert(`Error: ${err.message}`);
//         }
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-zinc-900 p-6">
//       <div className="card shadow-2xl h-1/2 md:w-1/2 xl:w-1/3 bg-zinc-800">
//         <div className="form-container p-6">
//           <div className="form teacher-form">
//             <h2 className="text-white text-md mb-8">Teacher Registration</h2>
//             <form onSubmit={handleTeacherSubmit}>
//               <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-600 text-white" onChange={(event) => setTeacherName(event.target.value)} type="text" placeholder="Username" value={teachername} />
//               <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-600 text-white" onChange={(event) => setTeacherEmail(event.target.value)} type="email" placeholder="Email" value={teacheremail} />
//               <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-600 text-white" onChange={(event) => setTeacherPass(event.target.value)} type="password" placeholder="Password" value={teacherpass} />
//               <input className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-600 text-white" onChange={(event) => setTeacherQualification(event.target.value)} type="text" placeholder="Qualification" value={teacherqualification} />
//               <button className="bg-orange-500 text-white hover:bg-orange-700 mt-10 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64">SignUp as Instructor</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherRegisterPage;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';

const TeacherRegisterPage = () => {
  const [teachername, setTeacherName] = useState("");
  const [teacheremail, setTeacherEmail] = useState("");
  const [teacherpass, setTeacherPass] = useState("");
  const [teacherqualification, setTeacherQualification] = useState("");
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTeacherSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: teachername,
      email: teacheremail,
      password: teacherpass,
      highestQualification: teacherqualification,
    };

    console.log('Teacher data to be submitted:', data); // Debugging line

    // axios.post("https://lmsdatabase.onrender.com/teacher_add", data)
    axios.post("https://lms-backend-1-l5v8.onrender.com/teacher_add", data)

      .then((res) => {
        if (res.status === 201) {
          alert('Teacher registered successfully');
          navigate('/open-teacher'); // Redirect to teacher login page
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error response:', err.response.data);
          alert(`Error: ${err.response.data.message}`);
        } else if (err.request) {
          // The request was made but no response was received
          console.error('Error request:', err.request);
          alert('Error: No response from server');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', err.message);
          alert(`Error: ${err.message}`);
        }
      });
  };

  return (
<div className="flex items-center justify-center min-h-screen bg-white p-6 w-full" style={{ backgroundImage: "url('https://www.creativefabrica.com/wp-content/uploads/2023/01/14/Floral-Frame-Background-Graphics-57610572-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className="card shadow-2xl h-1/2 md:w-1/2 xl:w-1/3 bg-gray-300">
        <div className="form-container p-6">
          <div className="form teacher-form">
            <h2 className="text-black text-md mb-8">Teacher Registration</h2>
            <form onSubmit={handleTeacherSubmit}>
              <input 
                className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-600 text-white" 
                onChange={(event) => setTeacherName(event.target.value)} 
                type="text" 
                placeholder="Username" 
                value={teachername} 
              />
              <input 
                className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-600 text-white" 
                onChange={(event) => setTeacherEmail(event.target.value)} 
                type="email" 
                placeholder="Email" 
                value={teacheremail} 
              />
              <input 
                className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-600 text-white" 
                onChange={(event) => setTeacherPass(event.target.value)} 
                type="password" 
                placeholder="Password" 
                value={teacherpass} 
              />
              <input 
                className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-600 text-white" 
                onChange={(event) => setTeacherQualification(event.target.value)} 
                type="text" 
                placeholder="Qualification" 
                value={teacherqualification} 
              />
              <button 
                className="bg-black text-white hover:bg-orange-700 mt-10 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64"
              >
                SignUp as Instructor
              </button>
              <p className="mt-4">Already have an account? <Link to="/open-teacher" className="text-red-500">Login</Link></p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegisterPage;
