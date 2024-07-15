// StudentEnrolled.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentEnrolled = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch student data
        const studentResponse = await axios.get(`https://lmsdatabase.onrender.com/getStudentData/${studentId}`);
        setStudent(studentResponse.data);

        // Fetch enrolled courses
        const enrolledCoursesResponse = await axios.get(`https://lmsdatabase.onrender.com/enrolled-courses/${studentId}`);
        setEnrolledCourses(enrolledCoursesResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [studentId]);

  // Function to handle the click event of the "Go to Course" button
  const goToCourse = (courseId) => {
    navigate(`/see-videos/${courseId}`);
  };

  // Function to handle the click event of the "Delete Course" button
  const deleteCourse = async (courseId) => {
    try {
      // Make a DELETE request to the server endpoint
      await axios.delete(`https://lmsdatabase.onrender.com/delete-enrolled-course/${studentId}/${courseId}`);

      // After successful deletion, update the state to reflect the changes
      setEnrolledCourses((prevCourses) => prevCourses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error('Error deleting course', error);
    }
  };

  return (
    <div className="bg-white min-h-screen p-6">
      {student ? (
        <div className="text-green-400">
          <h2 className="text-3xl font-semibold mb-4">Welcome, {student.username}!</h2>
          {/* Display other student information */}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="bg-zinc-800 p-4 rounded shadow-md relative h-96">
            {/* Thumbnail */}
            <div className="mb-4 h-44 bg-zinc-700 rounded">
              <img src={course.coverphoto} alt={course.title} className="h-full w-full" />
            </div>

            <h3 className="text-white text-lg font-semibold mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
              {course.title}
            </h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Teacher: {course.teacher.username}</p>
            <p className="text-gray-400 overflow-hidden overflow-ellipsis whitespace-nowrap">{course.description}</p>

            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={() => goToCourse(course._id)}
                className="bg-orange-500 text-white hover:bg-orange-700 px-2 py-1 rounded focus:outline-none focus:shadow-outline"
              >
                Start course
              </button>
              <button
                onClick={() => deleteCourse(course._id)}
                className="bg-red-500 text-white hover:bg-red-700 px-2 py-1 rounded focus:outline-none focus:shadow-outline"
              >
                Delete course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentEnrolled;
