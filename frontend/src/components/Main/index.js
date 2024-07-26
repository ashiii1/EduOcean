// // import React, { useState } from 'react';
// // import PropTypes from 'prop-types';
// // import {
// //   Container,
// //   Segment,
// //   Item,
// //   Dropdown,
// //   Divider,
// //   Button,
// //   Message,
// // } from 'semantic-ui-react';

// // // import mindImg from '../../images/mind.svg';

// // import {
// //   CATEGORIES,
// //   NUM_OF_QUESTIONS,
// //   DIFFICULTY,
// //   QUESTIONS_TYPE,
// //   COUNTDOWN_TIME,
// // } from '../../constants';
// // import { shuffle } from '../../utils';

// // import Offline from '../Offline';

// // const Main = ({ startQuiz }) => {
// //   const [category, setCategory] = useState('0');
// //   const [numOfQuestions, setNumOfQuestions] = useState(5);
// //   const [difficulty, setDifficulty] = useState('easy');
// //   const [questionsType, setQuestionsType] = useState('0');
// //   const [countdownTime, setCountdownTime] = useState({
// //     hours: 0,
// //     minutes: 120,
// //     seconds: 0,
// //   });
// //   const [processing, setProcessing] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [offline, setOffline] = useState(false);

// //   const handleTimeChange = (e, { name, value }) => {
// //     setCountdownTime({ ...countdownTime, [name]: value });
// //   };

// //   let allFieldsSelected = false;
// //   if (
// //     category &&
// //     numOfQuestions &&
// //     difficulty &&
// //     questionsType &&
// //     (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)
// //   ) {
// //     allFieldsSelected = true;
// //   }

// //   const fetchData = () => {
// //     setProcessing(true);

// //     if (error) setError(null);

// //     const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

// //     fetch(API)
// //       .then(respone => respone.json())
// //       .then(data =>
// //         setTimeout(() => {
// //           const { response_code, results } = data;

// //           if (response_code === 1) {
// //             const message = (
// //               <p>
// //                 The API doesn't have enough questions for your query. (Ex.
// //                 Asking for 50 Questions in a Category that only has 20.)
// //                 <br />
// //                 <br />
// //                 Please change the <strong>No. of Questions</strong>,{' '}
// //                 <strong>Difficulty Level</strong>, or{' '}
// //                 <strong>Type of Questions</strong>.
// //               </p>
// //             );

// //             setProcessing(false);
// //             setError({ message });

// //             return;
// //           }

// //           results.forEach(element => {
// //             element.options = shuffle([
// //               element.correct_answer,
// //               ...element.incorrect_answers,
// //             ]);
// //           });

// //           setProcessing(false);
// //           startQuiz(
// //             results,
// //             countdownTime.hours + countdownTime.minutes + countdownTime.seconds
// //           );
// //         }, 1000)
// //       )
// //       .catch(error =>
// //         setTimeout(() => {
// //           if (!navigator.onLine) {
// //             setOffline(true);
// //           } else {
// //             setProcessing(false);
// //             setError(error);
// //           }
// //         }, 1000)
// //       );
// //   };

// //   if (offline) return <Offline />;

// //   return (
// //     <div className=' w-[2200px]  p-48'>
// //     <Container className='bg-black'>
// //       <Segment>
// //         <Item.Group divided>
// //           <Item>
// //             <Item.Image  />
// //             <Item.Content>
// //               <Item.Header>
// //                 <h1>The Ultimate Trivia Quiz</h1>
// //               </Item.Header>
// //               {error && (
// //                 <Message error onDismiss={() => setError(null)}>
// //                   <Message.Header>Error!</Message.Header>
// //                   {error.message}
// //                 </Message>
// //               )}
// //               <Divider />
// //               <Item.Meta>
// //                 <p>In which category do you want to play the quiz?</p>
// //                 <Dropdown
// //                   fluid
// //                   selection
// //                   name="category"
// //                   placeholder="Select Quiz Category"
// //                   header="Select Quiz Category"
// //                   options={CATEGORIES}
// //                   value={category}
// //                   onChange={(e, { value }) => setCategory(value)}
// //                   disabled={processing}
// //                 />
// //                 <br />
// //                 <p>How many questions do you want in your quiz?</p>
// //                 <Dropdown
// //                   fluid
// //                   selection
// //                   name="numOfQ"
// //                   placeholder="Select No. of Questions"
// //                   header="Select No. of Questions"
// //                   options={NUM_OF_QUESTIONS}
// //                   value={numOfQuestions}
// //                   onChange={(e, { value }) => setNumOfQuestions(value)}
// //                   disabled={processing}
// //                 />
// //                 <br />
// //                 <p>How difficult do you want your quiz to be?</p>
// //                 <Dropdown
// //                   fluid
// //                   selection
// //                   name="difficulty"
// //                   placeholder="Select Difficulty Level"
// //                   header="Select Difficulty Level"
// //                   options={DIFFICULTY}
// //                   value={difficulty}
// //                   onChange={(e, { value }) => setDifficulty(value)}
// //                   disabled={processing}
// //                 />
// //                 <br />
// //                 <p>Which type of questions do you want in your quiz?</p>
// //                 <Dropdown
// //                   fluid
// //                   selection
// //                   name="type"
// //                   placeholder="Select Questions Type"
// //                   header="Select Questions Type"
// //                   options={QUESTIONS_TYPE}
// //                   value={questionsType}
// //                   onChange={(e, { value }) => setQuestionsType(value)}
// //                   disabled={processing}
// //                 />
// //                 <br />
// //                 <p>Please select the countdown time for your quiz.</p>
// //                 <Dropdown
// //                   search
// //                   selection
// //                   name="hours"
// //                   placeholder="Select Hours"
// //                   header="Select Hours"
// //                   options={COUNTDOWN_TIME.hours}
// //                   value={countdownTime.hours}
// //                   onChange={handleTimeChange}
// //                   disabled={processing}
// //                 />
// //                 <Dropdown
// //                   search
// //                   selection
// //                   name="minutes"
// //                   placeholder="Select Minutes"
// //                   header="Select Minutes"
// //                   options={COUNTDOWN_TIME.minutes}
// //                   value={countdownTime.minutes}
// //                   onChange={handleTimeChange}
// //                   disabled={processing}
// //                 />
// //                 <Dropdown
// //                   search
// //                   selection
// //                   name="seconds"
// //                   placeholder="Select Seconds"
// //                   header="Select Seconds"
// //                   options={COUNTDOWN_TIME.seconds}
// //                   value={countdownTime.seconds}
// //                   onChange={handleTimeChange}
// //                   disabled={processing}
// //                 />
// //               </Item.Meta>
// //               <Divider />
// //               <Item.Extra>
// //                 <Button
// //                   style={{ backgroundColor: 'black', color: 'white' }}

// //                   primary
// //                   size="big"
// //                   icon="play"
// //                   labelPosition="left"
// //                   content={processing ? 'Processing...' : 'Play Now'}
// //                   onClick={fetchData}
// //                   disabled={!allFieldsSelected || processing}
// //                 />
// //               </Item.Extra>
// //             </Item.Content>
// //           </Item>
// //         </Item.Group>
// //       </Segment>
// //       <br />
// //     </Container>
// //     </div>
// //   );
// // };

// // Main.propTypes = {
// //   startQuiz: PropTypes.func.isRequired,
// // };

// // // export default Main;
// // import React, { useState } from 'react';
// // import PropTypes from 'prop-types';
// // import { CATEGORIES, NUM_OF_QUESTIONS, DIFFICULTY, QUESTIONS_TYPE, COUNTDOWN_TIME } from '../../constants';
// // import { shuffle } from '../../utils';
// // import Offline from '../Offline';

// // const Main = ({ startQuiz }) => {
// //   const [category, setCategory] = useState('0');
// //   const [numOfQuestions, setNumOfQuestions] = useState(5);
// //   const [difficulty, setDifficulty] = useState('easy');
// //   const [questionsType, setQuestionsType] = useState('0');
// //   const [countdownTime, setCountdownTime] = useState({ hours: 0, minutes: 120, seconds: 0 });
// //   const [processing, setProcessing] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [offline, setOffline] = useState(false);

// //   const handleTimeChange = (e, { name, value }) => {
// //     setCountdownTime({ ...countdownTime, [name]: value });
// //   };

// //   let allFieldsSelected = false;
// //   if (category && numOfQuestions && difficulty && questionsType && (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)) {
// //     allFieldsSelected = true;
// //   }
// //   const getRandomColor = () => {
// //     const colors = [
// //       'bg-red-100',
// //       'bg-green-100',
// //       'bg-blue-100',
// //       'bg-yellow-100',
// //       'bg-purple-100',
// //       'bg-pink-100',
// //     ];
// //     return colors[Math.floor(Math.random() * colors.length)];
// //   };
  
// //   const fetchData = () => {
// //     setProcessing(true);

// //     if (error) setError(null);

// //     const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

// //     fetch(API)
// //       .then(respone => respone.json())
// //       .then(data =>
// //         setTimeout(() => {
// //           const { response_code, results } = data;

// //           if (response_code === 1) {
// //             const message = (
// //               <p>
// //                 The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
// //                 <br /><br />
// //                 Please change the <strong>No. of Questions</strong>, <strong>Difficulty Level</strong>, or <strong>Type of Questions</strong>.
// //               </p>
// //             );

// //             setProcessing(false);
// //             setError({ message });

// //             return;
// //           }

// //           results.forEach(element => {
// //             element.options = shuffle([element.correct_answer, ...element.incorrect_answers]);
// //           });

// //           setProcessing(false);
// //           startQuiz(results, countdownTime.hours + countdownTime.minutes + countdownTime.seconds);
// //         }, 1000)
// //       )
// //       .catch(error =>
// //         setTimeout(() => {
// //           if (!navigator.onLine) {
// //             setOffline(true);
// //           } else {
// //             setProcessing(false);
// //             setError(error);
// //           }
// //         }, 1000)
// //       );
// //   };

// //   if (offline) return <Offline />;

// //   return (
// //     <div className="p-8 h-screen">
// //       <div className="max-w-6xl w-11/12 mx-auto bg-white shadow-lg rounded-lg p-6">
// //         <h1 className="text-2xl font-bold mb-6">The Ultimate Trivia Quiz</h1>
// //         {error && (
// //           <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
// //             <strong>Error!</strong> {error.message}
// //           </div>
// //         )}
  
// //         <div className="mb-6">
// //           <h2 className="text-lg font-semibold mb-2">Select Quiz Category</h2>
// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
// //             {CATEGORIES.map(({ key, text, value }) => (
// //               <div
// //                 key={key}
// //                 className={`p-6 border rounded-lg cursor-pointer ${category === value ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} ${getRandomColor()}`}
// //                 onClick={() => setCategory(value)}
// //               >
// //                 {text}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
  
// //         <div className="mb-6">
// //           <h2 className="text-lg font-semibold mb-2">Select No. of Questions</h2>
// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
// //             {NUM_OF_QUESTIONS.map(({ key, text, value }) => (
// //               <div
// //                 key={key}
// //                 className={`p-6 border rounded-lg cursor-pointer ${numOfQuestions === value ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
// //                 onClick={() => setNumOfQuestions(value)}
// //               >
// //                 {text}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
  
// //         <div className="mb-6">
// //           <h2 className="text-lg font-semibold mb-2">Select Difficulty Level</h2>
// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
// //             {DIFFICULTY.map(({ key, text, value }) => (
// //               <div
// //                 key={key}
// //                 className={`p-6 border rounded-lg cursor-pointer ${difficulty === value ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
// //                 onClick={() => setDifficulty(value)}
// //               >
// //                 {text}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
  
// //         <div className="mb-6">
// //           <h2 className="text-lg font-semibold mb-2">Select Questions Type</h2>
// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
// //             {QUESTIONS_TYPE.map(({ key, text, value }) => (
// //               <div
// //                 key={key}
// //                 className={`p-6 border rounded-lg cursor-pointer ${questionsType === value ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
// //                 onClick={() => setQuestionsType(value)}
// //               >
// //                 {text}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
  
// //         <div className="mb-6">
// //           <h2 className="text-lg font-semibold mb-2">Select Countdown Time</h2>
// //           <div className="flex space-x-4">
// //             <select
// //               className="p-2 border rounded"
// //               value={countdownTime.hours}
// //               onChange={(e) => handleTimeChange(e, { name: 'hours', value: e.target.value })}
// //             >
// //               {COUNTDOWN_TIME.hours.map(({ key, text, value }) => (
// //                 <option key={key} value={value}>{text}</option>
// //               ))}
// //             </select>
// //             <select
// //               className="p-2 border rounded"
// //               value={countdownTime.minutes}
// //               onChange={(e) => handleTimeChange(e, { name: 'minutes', value: e.target.value })}
// //             >
// //               {COUNTDOWN_TIME.minutes.map(({ key, text, value }) => (
// //                 <option key={key} value={value}>{text}</option>
// //               ))}
// //             </select>
// //             <select
// //               className="p-2 border rounded"
// //               value={countdownTime.seconds}
// //               onChange={(e) => handleTimeChange(e, { name: 'seconds', value: e.target.value })}
// //             >
// //               {COUNTDOWN_TIME.seconds.map(({ key, text, value }) => (
// //                 <option key={key} value={value}>{text}</option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>
  
// //         <button
// //           className="w-full p-4 bg-black text-white font-semibold rounded-lg"
// //           onClick={fetchData}
// //           disabled={!allFieldsSelected || processing}
// //         >
// //           {processing ? 'Processing...' : 'Play Now'}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }  

// // Main.propTypes = {
// //   startQuiz: PropTypes.func.isRequired,
// // };

// // export default Main;
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { CATEGORIES, NUM_OF_QUESTIONS, DIFFICULTY, QUESTIONS_TYPE, COUNTDOWN_TIME } from '../../constants';
// import { shuffle } from '../../utils';
// import Offline from '../Offline';

// const Main = ({ startQuiz }) => {
//   const [category, setCategory] = useState('0');
//   const [numOfQuestions, setNumOfQuestions] = useState(5);
//   const [difficulty, setDifficulty] = useState('easy');
//   const [questionsType, setQuestionsType] = useState('0');
//   const [countdownTime, setCountdownTime] = useState({ hours: 0, minutes: 120, seconds: 0 });
//   const [processing, setProcessing] = useState(false);
//   const [error, setError] = useState(null);
//   const [offline, setOffline] = useState(false);

//   const handleTimeChange = (e, { name, value }) => {
//     setCountdownTime({ ...countdownTime, [name]: value });
//   };

//   let allFieldsSelected = false;
//   if (category && numOfQuestions && difficulty && questionsType && (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)) {
//     allFieldsSelected = true;
//   }

//   const getRandomColor = () => {
//     const colors = [
//       'bg-red-100',
//       'bg-green-100',
//       'bg-blue-100',
//       'bg-yellow-100',
//       'bg-purple-100',
//       'bg-pink-100',
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const fetchData = () => {
//     setProcessing(true);

//     if (error) setError(null);

//     const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

//     fetch(API)
//       .then(response => response.json())
//       .then(data =>
//         setTimeout(() => {
//           const { response_code, results } = data;

//           if (response_code === 1) {
//             const message = (
//               <p>
//                 The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
//                 <br /><br />
//                 Please change the <strong>No. of Questions</strong>, <strong>Difficulty Level</strong>, or <strong>Type of Questions</strong>.
//               </p>
//             );

//             setProcessing(false);
//             setError({ message });

//             return;
//           }

//           results.forEach(element => {
//             element.options = shuffle([element.correct_answer, ...element.incorrect_answers]);
//           });

//           setProcessing(false);
//           startQuiz(results, countdownTime.hours + countdownTime.minutes + countdownTime.seconds);
//         }, 1000)
//       )
//       .catch(error =>
//         setTimeout(() => {
//           if (!navigator.onLine) {
//             setOffline(true);
//           } else {
//             setProcessing(false);
//             setError(error);
//           }
//         }, 1000)
//       );
//   };

//   if (offline) return <Offline />;
//   return (
//     <div className="p-8 h-screen ">
//       <div className="max-w-7xl w-full mx-auto bg-white shadow-lg rounded-lg p-16">
//         <h1 className="text-3xl font-bold mb-6">The Ultimate Trivia Quiz</h1>
//         {error && (
//           <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
//             <strong>Error!</strong> {error.message}
//           </div>
//         )}
  
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold mb-2">Select Quiz Category</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//             {CATEGORIES.map(({ key, text, value }) => (
//               <div
//                 key={key}
//                 className={`p-10 border rounded-lg cursor-pointer ${category === value ? 'border-black bg-black' : 'border-gray-300'} ${getRandomColor()} h-40 flex items-center justify-center`}
//                 onClick={() => setCategory(value)}
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
  
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold mb-2">Select No. of Questions</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//             {NUM_OF_QUESTIONS.map(({ key, text, value }) => (
//               <div
//                 key={key}
//                 className={`p-10 border rounded-lg cursor-pointer ${numOfQuestions === value ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} ${getRandomColor()} h-40 flex items-center justify-center`}
//                 onClick={() => setNumOfQuestions(value)}
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
  
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold mb-2">Select Difficulty Level</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//             {DIFFICULTY.map(({ key, text, value }) => (
//               <div
//                 key={key}
//                 className={`p-10 border rounded-lg cursor-pointer ${difficulty === value ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} ${getRandomColor()} h-40 flex items-center justify-center`}
//                 onClick={() => setDifficulty(value)}
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
  
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold mb-2">Select Questions Type</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//             {QUESTIONS_TYPE.map(({ key, text, value }) => (
//               <div
//                 key={key}
//                 className={`p-10 border rounded-lg cursor-pointer ${questionsType === value ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} ${getRandomColor()} h-40 flex items-center justify-center`}
//                 onClick={() => setQuestionsType(value)}
//               >
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
  
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold mb-2">Select Countdown Time</h2>
//           <div className="flex space-x-4">
//             <select
//               className="p-2 border rounded"
//               value={countdownTime.hours}
//               onChange={(e) => handleTimeChange(e, { name: 'hours', value: e.target.value })}
//             >
//               {COUNTDOWN_TIME.hours.map(({ key, text, value }) => (
//                 <option key={key} value={value}>{text}</option>
//               ))}
//             </select>
//             <select
//               className="p-2 border rounded"
//               value={countdownTime.minutes}
//               onChange={(e) => handleTimeChange(e, { name: 'minutes', value: e.target.value })}
//             >
//               {COUNTDOWN_TIME.minutes.map(({ key, text, value }) => (
//                 <option key={key} value={value}>{text}</option>
//               ))}
//             </select>
//             <select
//               className="p-2 border rounded"
//               value={countdownTime.seconds}
//               onChange={(e) => handleTimeChange(e, { name: 'seconds', value: e.target.value })}
//             >
//               {COUNTDOWN_TIME.seconds.map(({ key, text, value }) => (
//                 <option key={key} value={value}>{text}</option>
//               ))}
//             </select>
//           </div>
//         </div>
  
//         <button
//           className="w-full p-4 bg-black text-white font-semibold rounded-lg"
//           onClick={fetchData}
//           disabled={!allFieldsSelected || processing}
//         >
//           {processing ? 'Processing...' : 'Play Now'}
//         </button>
//       </div>
//     </div>
//   );
  
// }

// Main.propTypes = {
//   startQuiz: PropTypes.func.isRequired,
// };

// export default Main;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES, NUM_OF_QUESTIONS, DIFFICULTY, QUESTIONS_TYPE, COUNTDOWN_TIME } from '../../constants';
import { shuffle } from '../../utils';
import Offline from '../Offline';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState('0');
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const [questionsType, setQuestionsType] = useState('0');
  const [countdownTime, setCountdownTime] = useState({ hours: 0, minutes: 120, seconds: 0 });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);
  const [categoryColors, setCategoryColors] = useState({});

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };

  let allFieldsSelected = false;
  if (category && numOfQuestions && difficulty && questionsType && (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)) {
    allFieldsSelected = true;
  }

  const getRandomColor = () => {
    const colors = [
      'bg-red-400',
      'bg-green-400',
      'bg-blue-400',
      'bg-yellow-400',
      'bg-purple-400',
      'bg-pink-400',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const colors = {};
    CATEGORIES.forEach(({ key }) => {
      colors[key] = getRandomColor();
    });
    setCategoryColors(colors);
  }, []);

  const fetchData = () => {
    setProcessing(true);

    if (error) setError(null);

    const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

    fetch(API)
      .then(response => response.json())
      .then(data =>
        setTimeout(() => {
          const { response_code, results } = data;

          if (response_code === 1) {
            const message = (
              <p>
                The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
                <br /><br />
                Please change the <strong>No. of Questions</strong>, <strong>Difficulty Level</strong>, or <strong>Type of Questions</strong>.
              </p>
            );

            setProcessing(false);
            setError({ message });

            return;
          }

          results.forEach(element => {
            element.options = shuffle([element.correct_answer, ...element.incorrect_answers]);
          });

          setProcessing(false);
          startQuiz(results, countdownTime.hours + countdownTime.minutes + countdownTime.seconds);
        }, 1000)
      )
      .catch(error =>
        setTimeout(() => {
          if (!navigator.onLine) {
            setOffline(true);
          } else {
            setProcessing(false);
            setError(error);
          }
        }, 1000)
      );
  };

  if (offline) return <Offline />;

  return (
    <div className="p-8 h-screen">
      <div className="max-w-7xl w-full mx-auto bg-white shadow-lg rounded-lg p-16">
        <h1 className="text-3xl font-bold mb-6">The Ultimate Trivia Quiz</h1>
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            <strong>Error!</strong> {error.message}
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select Quiz Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {CATEGORIES.map(({ key, text, value }) => (
              <div
                key={key}
                className={`p-10 border rounded-lg cursor-pointer ${category === value ? 'border-black bg-slate-400' : 'border-gray-300'} ${categoryColors[key]} h-40 flex items-center justify-center`}
                onClick={() => setCategory(value)}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select No. of Questions</h2>
          <div className="flex space-x-4">
            {NUM_OF_QUESTIONS.map(({ key, text, value }) => (
              <div
                key={key}
                className={`p-4 border rounded-lg cursor-pointer ${numOfQuestions === value ? 'border-blue-500 bg-slate-400' : 'border-gray-300'} flex-1 font-bold text-center`}
                onClick={() => setNumOfQuestions(value)}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select Difficulty Level</h2>
          <div className="flex space-x-4">
            {DIFFICULTY.map(({ key, text, value }) => (
              <div
                key={key}
                className={`p-4 border rounded-lg cursor-pointer ${difficulty === value ? 'border-blue-500 bg-slate-400' : 'border-gray-300'} flex-1 font-bold text-center`}
                onClick={() => setDifficulty(value)}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select Questions Type</h2>
          <div className="flex space-x-4">
            {QUESTIONS_TYPE.map(({ key, text, value }) => (
              <div
                key={key}
                className={`p-4 border rounded-lg cursor-pointer ${questionsType === value ? 'border-blue-500 bg-slate-400' : 'border-gray-300'} flex-1 font-bold text-center`}
                onClick={() => setQuestionsType(value)}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select Countdown Time</h2>
          <div className="flex space-x-4">
            <select
              className="p-2 border rounded"
              value={countdownTime.hours}
              onChange={(e) => handleTimeChange(e, { name: 'hours', value: e.target.value })}
            >
              {COUNTDOWN_TIME.hours.map(({ key, text, value }) => (
                <option key={key} value={value}>{text}</option>
              ))}
            </select>
            <select
              className="p-2 border rounded"
              value={countdownTime.minutes}
              onChange={(e) => handleTimeChange(e, { name: 'minutes', value: e.target.value })}
            >
              {COUNTDOWN_TIME.minutes.map(({ key, text, value }) => (
                <option key={key} value={value}>{text}</option>
              ))}
            </select>
            <select
              className="p-2 border rounded"
              value={countdownTime.seconds}
              onChange={(e) => handleTimeChange(e, { name: 'seconds', value: e.target.value })}
            >
              {COUNTDOWN_TIME.seconds.map(({ key, text, value }) => (
                <option key={key} value={value}>{text}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="w-full p-4 bg-black text-white font-semibold rounded-lg"
          onClick={fetchData}
          disabled={!allFieldsSelected || processing}
        >
          {processing ? 'Processing...' : 'Play Now'}
        </button>
      </div>
    </div>
  );
}

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;
