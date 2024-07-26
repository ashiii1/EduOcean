import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentSidebar from './StudentSidebar';
import PaymentForm from './PaymentForm';

const StudentHome = () => {
    const { studentId } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [courses, setCourses] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentResponse = await axios.get(`https://lms-backend-1-l5v8.onrender.com/getStudentData/${studentId}`);
                setStudent(studentResponse.data);

                const coursesResponse = await axios.get('https://lms-backend-1-l5v8.onrender.com/getallcourses');
                setCourses(coursesResponse.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, [studentId]);

    const enrollInCourse = async (courseId) => {
        try {
            const response = await axios.post(`https://lms-backend-1-l5v8.onrender.com/enroll-course/${studentId}/${courseId}`);
            toast.success("Course successfully enrolled");
            console.log(response.data);
        } catch (error) {
            toast.error("Course already enrolled");
            console.error("Error during enrollment", error);
        }
    };

    const viewEnrolledCourses = () => {
        navigate(`/enrolled-courses/${studentId}`);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };

    const handlePay = (courseId, amount) => {
        setSelectedCourse(courseId);
        setPaymentAmount(amount);
        setShowPaymentForm(true);
    };

    const closePaymentForm = () => {
        setShowPaymentForm(false);
    };

    const shuffleArray = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    const jumbledCourses = shuffleArray([...courses]);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <StudentSidebar />
            <div className="flex">
                <nav className="bg-white w-64 p-4 flex flex-col h-full shadow-lg">
                    <div className="mt-20 ml-4 text-lg">
                        <p className="block text-black hover:text-gray-500 cursor-pointer" onClick={viewEnrolledCourses}>
                            My Courses
                        </p>
                    </div>
                </nav>

                <div className="flex-1 flex flex-col">
                    <nav className="bg-white p-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="xl:h-10 xl:w-10 h-8 w-8 bg-black rounded-full mr-4"></div>
                            {student ? (
                                <p className="text-black md:text-md sm:text-sm xl:text-xl">Welcome, {student.username}</p>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>

                        <div className="lg:hidden">
                            <button className="text-black focus:outline-none" onClick={toggleSidebar}>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`lg:hidden fixed top-0 right-0 h-96 w-64 bg-white transform ${showSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
                            <div className="p-4 flex justify-between items-center">
                                <div className="mt-20 ml-4 text-lg">
                                    <p className="block text-black hover:text-gray-500 cursor-pointer" onClick={viewEnrolledCourses}>
                                        My Courses
                                    </p>

                                    <Link to="/about-us" className="block text-black hover:text-gray-500">
                                        About Us
                                    </Link>
                                </div>
                                <button className="text-black focus:outline-none -mt-24" onClick={closeSidebar}>
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:flex">
                            <button onClick={viewEnrolledCourses} className="bg-gray-800 text-white hover:bg-gray-500 px-6 py-6 rounded focus:outline-none focus:shadow-outline">
                                My Enrolled Courses
                            </button>
                        </div>
                    </nav>

                    <div className="container mx-auto p-6">
                        <div className="card rounded-md shadow-lg shadow-gray-300 bg-white p-5 mb-10 flex flex-col items-center xl:flex-row xl:justify-between">
                            <div className="xl:2/3 w-full xl:mb-0 mb-0">
                                <p className="text-black xl:-ml-0 md:text-xl sm:text-md xl:text-4xl">
                                    <strong>
                                        Discover a wide range of courses designed to suit your interests and goals.
                                    </strong>
                                </p>
                            </div>
                            <div className="xl:w-1/3 w-full">
                                <img
                                    src="https://cdn.pixabay.com/photo/2017/06/26/23/45/student-2446261_1280.png"
                                    alt="Hero"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {jumbledCourses.map((course) => (
                                <div
                                    key={course._id}
                                    className="course-card bg-white p-4 rounded-lg shadow-lg shadow-gray-300"
                                >
                                    <img
                                        src={`https://picsum.photos/200/300?random=${course._id}`}
                                        alt={course.courseName}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-lg font-semibold mb-2">{course.courseName}</h3>
                                    <p className="text-gray-600 mb-4">{course.description}</p>
                                    <div className="flex justify-between items-center">
                                        <button
                                            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-500"
                                            onClick={() => enrollInCourse(course._id)}
                                        >
                                            Enroll Now
                                        </button>
                                        <button
                                            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-500"
                                            onClick={() => handlePay(course._id, course.price)}
                                        >
                                            Pay Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {showPaymentForm && selectedCourse && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-300 w-full max-w-lg">
                        <PaymentForm
                            courseId={selectedCourse}
                            studentId={studentId}
                            amount={paymentAmount}
                            onClose={closePaymentForm}
                        />
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default StudentHome;
