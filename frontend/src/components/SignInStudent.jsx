// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignInStudent = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignin = async (e) => {
//     e.preventDefault();

//     try {
//       console.log(email);
//       console.log(password);
//       const response = await axios.post('https://lmsdatabase.onrender.com/student_login', {
//         email,
//         password,
//       });

//       if (response.data.success) {
//         // Redirect to StudentLand component with student ID
//         const studentId = response.data.student._id;
//         navigate(`/student-land/${studentId}`);
//       } else {
//         console.log("Login failed:", response.data.error);
//         // Handle unsuccessful login, show an error message or take appropriate action
//       }
//     } catch (error) {
//       console.error("Error during sign-in", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white p-6">
//       <div className="card shadow-2xl h-1/2 md:w-1/2 xl:w-1/3 bg-white rounded-md">
//         <div className="form-container p-6">
//           <h2 className="text-black text-xl mb-8">Login</h2>
//           <form onSubmit={handleSignin}>
//             <input
//               className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-200 text-black"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-200 text-black"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               className="bg-green-600 text-black hover:bg-green-800 hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64"
//               type="submit" // Use type="submit" for the form submission
//             >
//               Sign In
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInStudent;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';






 
const SignInStudent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const response = await axios.post('https://lmsdatabase.onrender.com/student_login', {
        const response = await axios.post('https://lms-backend-1-l5v8.onrender.com/student_login', {

        email,
        password,
      });

      if (response.data.success) {
        const studentId = response.data.student._id;
        navigate(`/student-land/${studentId}`);
      } else {
        setErrorMessage("Login failed: " + response.data.error);
      }
    } catch (error) {
      setErrorMessage("Error during sign-in: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
<div className="flex items-center justify-center min-h-screen bg-white p-6 w-full" style={{ backgroundImage: "url('https://i5.walmartimages.com/asr/e21ceefb-6299-4864-9652-0abbac0e7797_1.f6e16f75b5e5d302e81c5902d0e0f186.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className="card shadow-2xl h-1/2 md:w-1/2 xl:w-1/3 bg-white rounded-md">
<h2 className='text-center font-bold text-3xl p-10'>Login to Enroll </h2>
        <div className="form-container p-6">

          <h2 className="text-black text-xl mb-8">Login</h2>
          <form onSubmit={handleSignin}>
            <input
              className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-200 text-black"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full xl:h-10 md:h-8 rounded-md p-4 mb-5 bg-zinc-200 text-black"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-black text-white hover:bg-gray-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            <p className="mt-4">Don't have an account? <Link to="/register-student" className="text-red-500">Register</Link></p>
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}          </form>
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignInStudent;
