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
      const response = await axios.post('https://lmsdatabase.onrender.com/student_login', {
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
<div className="flex items-center justify-center min-h-screen bg-white p-6 w-full" style={{ backgroundImage: "url('https://www.creativefabrica.com/wp-content/uploads/2023/01/14/Floral-Frame-Background-Graphics-57610572-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className="card shadow-2xl h-1/2 md:w-1/2 xl:w-1/3 bg-white rounded-md">
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
              className="bg-green-600 text-black hover:bg-green-800 hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-64"
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
