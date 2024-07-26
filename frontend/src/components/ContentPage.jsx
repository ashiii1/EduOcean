// // ContentPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { FaPlayCircle } from 'react-icons/fa';


// function ContentPage() {
//   const { courseId } = useParams();
//   const [courseDetails, setCourseDetails] = useState({
//     title: '',
//     description: '',
//     coverphoto: '',
//     videos: [],
//   });

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         // const response = await axios.get(`http://localhost:5000/getCourseDetails/${courseId}`);
//         const response = await axios.get(`https://lmsdatabase.onrender.com/getCourseDetails/${courseId}`);
//         setCourseDetails(response.data);
//         console.log({response});
//       } catch (error) {
//         console.error('Error fetching course details', error);
//       }
//     };

//     fetchCourseDetails();
//   }, [courseId]);

//   return (
//     <div className="container mx-auto min-h-screen p-0">
//       <div className=" card shadow-md flex flex-col md:flex-row mb-6 bg-zinc-800 p-8 xl:p-12 rounded-xl">
//         <div className="md:w-1/4 md:mr-4 mb-4 md:mb-0 h-40 rounded-md bg-zinc-700">
//           {courseDetails.coverphoto && (
//             <img src={courseDetails.coverphoto} alt={courseDetails.title} className="w-full h-44 rounded shadow-md" />
//           )}
//         </div>
//         <div className="md:w-3/4">
//           <h2 className="text-3xl text-white font-semibold mb-4">{courseDetails.title}</h2>
//           <p className="text-white">{courseDetails.description}</p>
//         </div>
//       </div>

//       <div className="flex flex-col ">
//         {courseDetails.videos.map((video, index) => (
//           <div key={index} className="bg-zinc-800 p-2 flex flex-row rounded-xl shadow-md relative h-22 xl:w-96 mt-3 h-20">
//             <div className="flex flex-col items-center justify-center w-14 xl:w-26 h-auto bg-zinc-700 rounded">
//               {/* Use Link to navigate to the PlayVideo component */}
//               <Link to={`/play-video/${encodeURIComponent(video.url)}`}>
//                 <FaPlayCircle className="text-blue-500 hover:underline text-2xl" />
//               </Link>
//             </div>
//             <div className="flex flex-col items-center justify-center w-full text-white text-1xl h-auto">
//               {video.title}
//             </div>
//           </div>
//         ))}
//       </div>

   
//     </div>
//   );
// }

// // export default ContentPage;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { FaPlayCircle } from 'react-icons/fa';
// import ReactPlayer from 'react-player';


// function ContentPage() {
//   const { courseId } = useParams();
//   const [courseDetails, setCourseDetails] = useState({
//     title: '',
//     description: '',
//     coverphoto: '',
//     videos: [],
//   });
//   const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         const response = await axios.get(`https://lmsdatabase.onrender.com/getCourseDetails/${courseId}`);
//         setCourseDetails(response.data);
//         setSelectedVideoUrl(response.data.videos[0]?.url); // Set the first video as default if available
//       } catch (error) {
//         console.error('Error fetching course details', error);
//       }
//     };

//     fetchCourseDetails();
//   }, [courseId]);

//   const handleVideoClick = (url) => {
//     setSelectedVideoUrl(url);
//   };

//   return (
//     <div className="container mx-auto min-h-screen flex">
//       {/* Sidebar */}
//       <div className="w-4 md:w-72 bg-zinc-800 p-2 rounded-xl h-screen">
//         <h3 className="text-xl text-white font-bold mb-4">Videos</h3>
//         {courseDetails.videos.map((video, index) => (
//           <div
//             key={index}
//             className={`bg-gray-700 p-2 flex flex-row rounded-xl shadow-md mb-2 cursor-pointer ${selectedVideoUrl === video.url ? 'bg-gray-200' : ''}`}
//             onClick={() => handleVideoClick(video.url)}
//           >
//             <div className="flex flex-col items-center justify-center w-2 xl:w-6 h-9 rounded ">
//               <FaPlayCircle className="text-red-500 hover:underline text-1xl font-sans" />
//             </div>
//             <div className="flex flex-col items-center justify-center w-full text-black text-xl font-sans ">
//               {video.title}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="w-full md:w-3/4 p-2 flex flex-col ">
//         <div className="card shadow-md bg-gray-800 p-18 xl:p-2 rounded-xl mb-6">
//           <div className="flex flex-col md:flex-row">
//             {/* <div className="md:w-1/3 md:mr-4 mb-1 md:mb-0 h-20 rounded-md bg-zinc-700">
//               {courseDetails.coverphoto && (
//                 <img src={courseDetails.coverphoto} alt={courseDetails.title} className="w-full h-44 rounded shadow-md" />
//               )}
//             </div> */}
//             <div className="md:w-1/3 ">
//               <h2 className="text-xl text-white font-semibold mb-4 ">{courseDetails.title}</h2>
//               <p className="text-white">{courseDetails.description}</p>
//             </div>
//           </div>
//         </div>

//         {/* Video Player */}
//         {selectedVideoUrl && (
//           <div className="flex justify-center items-center flex-grow pt-1 p-11 pb-11">
//             <ReactPlayer
//               url={selectedVideoUrl}
//               controls={true}
//               width="90%"
//               height="90%"
//               style={{ maxHeight: '50vh', marginBottom: '1rem' }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // export default ContentPage;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import ReactPlayer from 'react-player';
// import { FaPlayCircle } from 'react-icons/fa';

// function ContentPage() {
//   const { courseId } = useParams();
  
//   const [courseDetails, setCourseDetails] = useState({
//     title: '',
//     description: '',
//     coverphoto: '',
//     videos: [],
//   });
//   const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   // Fetch course details
//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         const response = await axios.get(`https://lmsdatabase.onrender.com/getCourseDetails/${courseId}`);
//         setCourseDetails(response.data);
//         setSelectedVideoUrl(response.data.videos[0]?.url); // Set the first video as default if available
//       } catch (error) {
//         console.error('Error fetching course details', error);
//       }
//     };

//     fetchCourseDetails();
//   }, [courseId]);

//   // Fetch comments for the selected video
//   useEffect(() => {
//     if (selectedVideoUrl) {
//       const savedComments = localStorage.getItem(`comments-${selectedVideoUrl}`);
//       if (savedComments) {
//         setComments(JSON.parse(savedComments));
//       } else {
//         setComments([]);
//       }
//     }
//   }, [selectedVideoUrl]);

//   // Save comments to localStorage whenever comments or selectedVideoUrl changes
//   useEffect(() => {
//     if (selectedVideoUrl) {
//       localStorage.setItem(`comments-${selectedVideoUrl}`, JSON.stringify(comments));
//     }
//   }, [comments, selectedVideoUrl]);

//   // Handle video selection
//   const handleVideoClick = (url) => {
//     setSelectedVideoUrl(url);
//   };

//   // Add a new comment
//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       const comment = { text: newComment, likes: 0 };
//       setComments([...comments, comment]);
//       setNewComment('');
//     }
//   };

//   // Like a comment
//   const handleLikeComment = (index) => {
//     const updatedComments = [...comments];
//     updatedComments[index].likes += 1;
//     setComments(updatedComments);
//   };

//   return (
//     <div className="container mx-auto min-h-screen flex">
//       {/* Sidebar */}
//       <div className="w-4 md:w-72 bg-zinc-800 p-2 rounded-xl h-screen">
//         <h3 className="text-xl text-white font-bold mb-4">Videos</h3>
//         {courseDetails.videos.map((video, index) => (
//           <div
//             key={index}
//             className={`bg-gray-700 p-2 flex flex-row rounded-xl shadow-md mb-2 cursor-pointer ${selectedVideoUrl === video.url ? 'bg-gray-200' : ''}`}
//             onClick={() => handleVideoClick(video.url)}
//           >
//             <div className="flex flex-col items-center justify-center w-2 xl:w-6 h-9 rounded ">
//               <FaPlayCircle className="text-red-500 hover:underline text-1xl font-sans" />
//             </div>
//             <div className="flex flex-col items-center justify-center w-full text-black text-xl font-sans ">
//               {video.title}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="w-full md:w-3/4 p-4 flex flex-col">
//         <div className="card shadow-md bg-gray-800 p-4 top-0 xl:p-6 rounded-xl mb-4">
//           <div className="flex flex-col md:flex-row">
//             {/* Course Details */}
//             <div className="md:w-1/3 mb-4 md:mb-0">
//               <h2 className="text-xl text-white font-semibold mb-4">{courseDetails.title}</h2>
//               <p className="text-white">{courseDetails.description}</p>
//             </div>
//           </div>
//         </div>

//         {/* Video Player */}
//         {selectedVideoUrl && (
//           <div className="flex flex-col justify-center items-center flex-grow">
//             <ReactPlayer
//               url={selectedVideoUrl}
//               controls={true}
//               width="90%"
//               height="90%"
//               style={{ maxHeight: '50vh', marginBottom: '1rem' }}
//             />
//             {/* Comments Section */}
//             <div className="w-full p-4 pl-20 bg-gray-100 rounded-xl shadow-md mt-4">
//               <h3 className="text-lg font-semibold mb-2">Comments/Feedback</h3>
//               <textarea
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//                 placeholder="Add a comment or feedback..."
//                 className="border p-2 w-full rounded mb-2"
//               />
//               <button
//                 onClick={handleAddComment}
//                 className="bg-black text-white p-2 rounded"
//               >
//                 Add Comment
//               </button>

//               {/* Display comments */}
//               <div className="mt-4">
//                 {comments.map((comment, index) => (
//                   <div key={index} className="border-t pt-2">
//                     <p>{comment.text}</p>
//                     <button
//                       onClick={() => handleLikeComment(index)}
//                       className="bg-pink-800 text-white px-2 py-1 rounded mt-2"
//                     >
//                       Like ({comment.likes})
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ContentPage;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { FaPlayCircle } from 'react-icons/fa';

function ContentPage() {
  const { courseId } = useParams();

  const [courseDetails, setCourseDetails] = useState({
    title: '',
    description: '',
    coverphoto: '',
    videos: [],
  });
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Fetch course details
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        // const response = await axios.get(`https://lmsdatabase.onrender.com/getCourseDetails/${courseId}`);
                const response = await axios.get(`https://lms-backend-1-l5v8.onrender.com/getCourseDetails/${courseId}`);

        setCourseDetails(response.data);
        if (response.data.videos.length > 0) {
          const initialVideoUrl = response.data.videos[0]?.url;
          setSelectedVideoUrl(initialVideoUrl);
        }
      } catch (error) {
        console.error('Error fetching course details', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  // Fetch comments for the selected video
  useEffect(() => {
    if (selectedVideoUrl) {
      const savedComments = localStorage.getItem(`comments-${selectedVideoUrl}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      } else {
        setComments([]);
      }
    }
  }, [selectedVideoUrl]);

  // Save comments to localStorage whenever comments or selectedVideoUrl changes
  useEffect(() => {
    if (selectedVideoUrl) {
      localStorage.setItem(`comments-${selectedVideoUrl}`, JSON.stringify(comments));
    }
  }, [comments, selectedVideoUrl]);

  // Handle video selection
  const handleVideoClick = (url) => {
    setSelectedVideoUrl(url);
  };

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = { text: newComment, likes: 0 };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  // Like a comment
  const handleLikeComment = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes += 1;
    setComments(updatedComments);
  };

  return (
    <div className="container mx-auto min-h-screen flex">
      {/* Sidebar */}
      <div className="w-4 md:w-72 bg-zinc-800 p-2 rounded-xl h-screen">
        <h3 className="text-xl text-white font-bold mb-4">Videos</h3>
        {courseDetails.videos.map((video, index) => (
          <div
            key={index}
            className={`bg-gray-700 p-2 flex flex-row rounded-xl shadow-md mb-2 cursor-pointer ${selectedVideoUrl === video.url ? 'bg-zinc-400'  : ''}`}
            onClick={() => handleVideoClick(video.url)}
          >
            <div className="flex flex-col items-center justify-center w-2 xl:w-6 h-9 rounded ">
              <FaPlayCircle className="text-red-500 hover:underline text-1xl font-sans" />
            </div>
            <div className="flex flex-col items-center justify-center w-full text-slate-200 text-xl font-sans ">
              {video.title}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4 flex flex-col">
          <div className="flex flex-col md:flex-row">
            {/* Course Details */}
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl text-black font-semibold mb-4">{courseDetails.title}</h2>
              <p className="text-white">{courseDetails.description}</p>
            </div>
                  </div>

        {/* Video Player */}
        {selectedVideoUrl && (
          <div className="flex flex-col justify-center items-center flex-grow">
            <ReactPlayer
              url={selectedVideoUrl}
              controls={true}
              width="90%"
              height="90%"
              style={{ maxHeight: '50vh', marginBottom: '1rem' }}
            />
            {/* Comments Section */}
            <div className="w-full p-4 pl-20 bg-gray-100 rounded-xl shadow-md mt-4">
              <h3 className="text-lg font-semibold mb-2">Comments/Feedback</h3>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment or feedback..."
                className="border p-2 w-full rounded mb-2"
              />
              <button
                onClick={handleAddComment}
                className="bg-black text-white p-2 rounded"
              >
                Add Comment
              </button>

              {/* Display comments */}
              <div className="mt-4">
                {comments.map((comment, index) => (
                  <div key={index} className="border-t pt-2">
                    <p>{comment.text}</p>
                    <button
                      onClick={() => handleLikeComment(index)}
                      className="bg-pink-800 text-white px-2 py-1 rounded mt-2"
                    >
                      Like ({comment.likes})
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentPage;
