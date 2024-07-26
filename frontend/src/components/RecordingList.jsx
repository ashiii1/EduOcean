// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function RecordingsList() {
//   const [recordings, setRecordings] = useState([]);

//   useEffect(() => {
//     const fetchRecordings = async () => {
//       try {
//         const response = await axios.get('https://your-backend-url/getRecordings');
//         setRecordings(response.data);
//       } catch (error) {
//         console.error('Error fetching recordings:', error);
//       }
//     };

//     fetchRecordings();
//   }, []);

//   return (
//     <div>
//       <h2>Recordings</h2>
//       {recordings.map(recording => (
//         <div key={recording._id}>
//           <h3>{recording.name}</h3>
//           <p>{recording.description}</p>
//           <a href={recording.url} target="_blank" rel="noopener noreferrer">Watch Recording</a>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RecordingsList;
