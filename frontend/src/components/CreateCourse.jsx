// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateCourse = () => {
//   const { teacherId } = useParams();

//   // State variables
//   const [courseTitle, setCourseTitle] = useState("");
//   const [courseDescription, setCourseDescription] = useState("");
//   const [courseThumbnail, setCourseCoverPhoto ] = useState("");

//   const handleCreateCourse = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Add the teacherId to the course data
//       const requestData = {
//         title: courseTitle,
//         description: courseDescription,
//         coverphoto: courseThumbnail,
//       };
  
//       console.log("Data being sent to the server:", requestData);
  
//       const response = await axios.post(`https://lmsdatabase.onrender.com/create-course/${teacherId}`, requestData);
  
//       console.log("Full response from the server:", response); // Log the full response
  
//       console.log("Course created:", response.data);
  
//       // Handle success, e.g., redirect to the teacher's landing page or show a success toast
//       toast.success("Course created successfully!");
//     } catch (error) {
//       console.error("Error creating course", error);
//       // Handle errors, e.g., show an error toast
//       toast.error("Error creating course");
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen">
//       <nav className="bg-green-500 p-4 flex items-center justify-between">
//         <div className="flex items-center">
//           <div className="xl:h-10 xl:w-10 h-8 w-8 bg-orange-500 rounded-full mr-4"></div>
//           <p className="text-black text-xl">Instructor Name</p>
//         </div>
//       </nav>

//       <div className="container mx-auto p-6">
//         <h2 className="text-black text-2xl mb-14">Create a New Course</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="courseTitle" className="block text-black xl:text-xl text-sm font-semibold mb-2">
//               Course Title
//             </label>
//             <input
//               type="text"
//               id="courseTitle"
//               className="w-full px-4 py-2 border rounded-md bg-zinc-800 text-white"
//               placeholder="Enter the course title"
//               value={courseTitle}
//               onChange={(e) => setCourseTitle(e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="courseDescription" className="block text-white xl:text-xl text-sm font-semibold mb-2">
//               Course Description
//             </label>
//             <textarea
//               id="courseDescription"
//               className="w-full px-4 py-2 border rounded-md bg-gray-400 text-white"
//               placeholder="Enter the course description"
//               rows="4"
//               value={courseDescription}
//               onChange={(e) => setCourseDescription(e.target.value)}
//             ></textarea>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="courseThumbnail" className="block text-white xl:text-xl text-sm font-semibold mb-2">
//               Course CoverPhoto URL
//             </label>
//             <input
//               type="text"
//               id="courseThumbnail"
//               className="w-full px-4 py-2 border rounded-md bg-zinc-800 text-white"
//               placeholder="Enter the course thumbnail URL"
//               value={courseThumbnail}
//               onChange={(e) => setCourseCoverPhoto(e.target.value)}
//             />
//           </div>

//           <div className="flex justify-end mt-8">
//             <button
//               type="button"
//               className="bg-black text-white hover:bg-gray-500 px-4 py-2 rounded focus:outline-none focus:shadow-outline"
//               onClick={handleCreateCourse}
//             >
//               Create Course
//             </button>
//           </div>
//         </form>
//       </div>

//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//     </div>
//   );
// };

// // export default CreateCourse;
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CreateCourse = () => {
//   const { teacherId } = useParams();

//   // State variables
//   const [courseTitle, setCourseTitle] = useState("");
//   const [courseDescription, setCourseDescription] = useState("");
//   const [courseThumbnail, setCourseCoverPhoto] = useState("");

//   const handleCreateCourse = async (e) => {
//     e.preventDefault();

//     try {
//       // Add the teacherId to the course data
//       const requestData = {
//         title: courseTitle,
//         description: courseDescription,
//         coverphoto: courseThumbnail,
//       };

//       console.log("Data being sent to the server:", requestData);

//       // const response = await axios.post(`https://lmsdatabase.onrender.com/create-course/${teacherId}`, requestData);
//       const response = await axios.post(`https://lms-backend-1-l5v8.onrender.com/create-course/${teacherId}`, requestData);

//       console.log("Full response from the server:", response); // Log the full response

//       console.log("Course created:", response.data);

//       // Handle success, e.g., redirect to the teacher's landing page or show a success toast
//       toast.success("Course created successfully!");
//     } catch (error) {
//       console.error("Error creating course", error);
//       // Handle errors, e.g., show an error toast
//       toast.error("Error creating course");
//     }
//   };

//   return (
//     <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/07/21/42/77/360_F_721427746_lUH6mQG2AvlLkdKlNhHq2gZfQmrRLpqp.jpg')` }}>
//       <nav className="bg-green p-4 flex items-center justify-between">
//         <div className="flex items-center">
//           <div className="xl:h-10 xl:w-10 h-8 w-8 bg-black rounded-full mr-4"></div>
//         </div>
//       </nav>

//       <div className="container mx-auto p-6 bg-gray-200 bg-opacity-90 rounded-lg shadow-lg mt-8 max-w-md">
//         <h2 className="text-black text-2xl mb-6">Create a New Course</h2>
//         <form onSubmit={handleCreateCourse}>
//           <div className="mb-4">
//             <label htmlFor="courseTitle" className="block text-black xl:text-xl text-sm font-semibold mb-2">
//               Course Title
//             </label>
//             <input
//               type="text"
//               id="courseTitle"
//               className="w-full px-4 py-2 border rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//               placeholder="Enter the course title"
//               value={courseTitle}
//               onChange={(e) => setCourseTitle(e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="courseDescription" className="block text-black xl:text-xl text-sm font-semibold mb-2">
//               Course Description
//             </label>
//             <textarea
//               id="courseDescription"
//               className="w-full px-4 py-2 border rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//               placeholder="Enter the course description"
//               rows="4"
//               value={courseDescription}
//               onChange={(e) => setCourseDescription(e.target.value)}
//             ></textarea>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="courseThumbnail" className="block text-black xl:text-xl text-sm font-semibold mb-2">
//               Course Cover Photo URL
//             </label>
//             <input
//               type="text"
//               id="courseThumbnail"
//               className="w-full px-4 py-2 border rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//               placeholder="Enter the course thumbnail URL"
//               value={courseThumbnail}
//               onChange={(e) => setCourseCoverPhoto(e.target.value)}
//             />
//           </div>

//           <div className="flex justify-end mt-8">
//             <button
//               type="submit"
//               className="bg-black text-white hover:bg-gray-600 px-4 py-2 rounded focus:outline-none focus:shadow-outline"
//             >
//               Create Course
//             </button>
//           </div>
//         </form>
//         <div className="p-5">
//           <p>After creating course , Go back and click "Add video" to add your source video</p>
//         </div>
//       </div>

//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//     </div>
//   );
// };

// export default CreateCourse;
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCourse = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate(); // Hook for navigation

  // State variables
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseThumbnail, setCourseCoverPhoto] = useState("");


  const handleCreateCourse = async (e) => {
    e.preventDefault();

    try {
      // Add the teacherId to the course data
      const requestData = {
        title: courseTitle,
        description: courseDescription,
        coverphoto: courseThumbnail,
      };

      console.log("Data being sent to the server:", requestData);

      // const response = await axios.post(`https://lmsdatabase.onrender.com/create-course/${teacherId}`, requestData);
      const response = await axios.post(`https://lms-backend-1-l5v8.onrender.com/create-course/${teacherId}`, requestData);

      console.log("Full response from the server:", response); // Log the full response

      console.log("Course created:", response.data);

      // Handle success, e.g., redirect to the teacher's landing page or show a success toast
      toast.success("Course created successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "text-2xl", // Make the toast message large
      });

      // Redirect to the TeacherLand page
      setTimeout(() => {
        navigate(`/teacher-land/${teacherId}`);
      }, 3000); // Wait for 3 seconds before redirecting
    } catch (error) {
      console.error("Error creating course", error);
      // Handle errors, e.g., show an error toast
      toast.error("Error creating course", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "text-2xl", // Make the toast message large
      });
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/07/21/42/77/360_F_721427746_lUH6mQG2AvlLkdKlNhHq2gZfQmrRLpqp.jpg')` }}>
      <nav className="bg-green p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="xl:h-10 xl:w-10 h-8 w-8 bg-black rounded-full mr-4"></div>
        </div>
      </nav>

      <div className="container mx-auto p-6 bg-gray-200 bg-opacity-90 rounded-lg shadow-lg mt-8 max-w-md">
        <h2 className="text-black text-2xl mb-6">Create a New Course</h2>
        <form onSubmit={handleCreateCourse}>
          <div className="mb-4">
            <label htmlFor="courseTitle" className="block text-black xl:text-xl text-sm font-semibold mb-2">
              Course Title
            </label>
            <input
              type="text"
              id="courseTitle"
              className="w-full px-4 py-2 border rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter the course title"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="courseDescription" className="block text-black xl:text-xl text-sm font-semibold mb-2">
              Course Description
            </label>
            <textarea
              id="courseDescription"
              className="w-full px-4 py-2 border rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter the course description"
              rows="4"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="courseThumbnail" className="block text-black xl:text-xl text-sm font-semibold mb-2">
              Course Cover Photo URL
            </label>
            <input
              type="text"
              id="courseThumbnail"
              className="w-full px-4 py-2 border rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter the course thumbnail URL"
              value={courseThumbnail}
              onChange={(e) => setCourseCoverPhoto(e.target.value)}
            />
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-black text-white hover:bg-gray-600 px-2 py-2 rounded focus:outline-none focus:shadow-outline"
            >
              Create Course
            </button>
            </div>
            {/* <div>
            <button className="bg-black p-2 text-white pl-10 cursor-pointer " onClick={handleBack}>⬅️Back</button>
          </div> */}
        </form>
        <div className="p-5">
          <p>After creating course , Go back and click "Add video" to add your source video</p>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default CreateCourse;
