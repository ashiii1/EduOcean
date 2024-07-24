// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import { Segment, Header, Button } from 'semantic-ui-react';

// // import ShareButton from '../ShareButton';
// // import { calculateScore, calculateGrade, timeConverter } from '../../utils';

// // const Stats = ({
// //   totalQuestions,
// //   correctAnswers,
// //   timeTaken,
// //   replayQuiz,
// //   resetQuiz,
// // }) => {
// //   const score = calculateScore(totalQuestions, correctAnswers);
// //   const { grade, remarks } = calculateGrade(score);
// //   const { hours, minutes, seconds } = timeConverter(timeTaken);

// //   return (
// //     <Segment>
// //       <Header as="h1" textAlign="center" block>
// //         {remarks}
// //       </Header>
// //       <Header as="h2" textAlign="center" block>
// //         Grade: {grade}
// //       </Header>
// //       <Header as="h3" textAlign="center" block>
// //         Total Questions: {totalQuestions}
// //       </Header>
// //       <Header as="h3" textAlign="center" block>
// //         Correct Answers: {correctAnswers}
// //       </Header>
// //       <Header as="h3" textAlign="center" block>
// //         Your Score: {score}%
// //       </Header>
// //       <Header as="h3" textAlign="center" block>
// //         Passing Score: 60%
// //       </Header>
// //       <Header as="h3" textAlign="center" block>
// //         Time Taken:{' '}
// //         {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
// //       </Header>
// //       <div style={{ marginTop: 35 }}>
// //         <Button
// //           primary
// //           content="Play Again"
// //           onClick={replayQuiz}
// //           size="big"
// //           icon="redo"
// //           labelPosition="left"
// //           style={{ marginRight: 15, marginBottom: 8 }}
// //         />
// //         <Button
// //           color="teal"
// //           content="Back to Home"
// //           onClick={resetQuiz}
// //           size="big"
// //           icon="home"
// //           labelPosition="left"
// //           style={{ marginBottom: 8 }}
// //         />
// //         <ShareButton />
// //       </div>
// //     </Segment>
// //   );
// // };

// // Stats.propTypes = {
// //   totalQuestions: PropTypes.number.isRequired,
// //   correctAnswers: PropTypes.number.isRequired,
// //   timeTaken: PropTypes.number.isRequired,
// //   replayQuiz: PropTypes.func.isRequired,
// //   resetQuiz: PropTypes.func.isRequired,
// // };

// // export default Stats;
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Header, Button } from 'semantic-ui-react';

// import ShareButton from '../ShareButton';
// import { calculateScore, calculateGrade, timeConverter } from '../../utils';

// const Stats = ({
//   totalQuestions,
//   correctAnswers,
//   timeTaken,
//   replayQuiz,
//   resetQuiz,
// }) => {
//   const score = calculateScore(totalQuestions, correctAnswers);
//   const { grade, remarks } = calculateGrade(score);
//   const { hours, minutes, seconds } = timeConverter(timeTaken);

//   return (
//     <div className="p-16 space-y-36">
//       <div className="text-center">
//         <Header as="h1" className="bg-white text-black p-4 rounded-lg">
//           {remarks}
//         </Header>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 size-11/12">
//         <div className="p-6 bg-green-400 rounded-lg shadow-lg">
//           <Header as="h2" className="text-center">
//             Grade: {grade}
//           </Header>
//         </div>
//         <div className="p-6 bg-blue-400 rounded-lg shadow-lg">
//           <Header as="h3" className="text-center">
//             Total Questions: {totalQuestions}
//           </Header>
//         </div>
//         <div className="p-6 bg-pink-500 rounded-lg shadow-lg">
//           <Header as="h3" className="text-center">
//             Correct Answers: {correctAnswers}
//           </Header>
//         </div>
//         <div className="p-6 bg-yellow-400 rounded-lg shadow-lg">
//           <Header as="h3" className="text-center">
//             Your Score: {score}%
//           </Header>
//           <div className="relative pt-1">
//             <div className="flex mb-2 items-center justify-between">
//               <div>
//                 <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
//                   Score
//                 </span>
//               </div>
//             </div>
//             <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
//               <div
//                 style={{ width: `${score}%` }}
//                 className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
//               ></div>
//             </div>
//           </div>
//         </div>
//         <div className="p-6 bg-red-400 rounded-lg shadow-lg">
//           <Header as="h3" className="text-center">
//             Passing Score: 60%
//           </Header>
//           <div className="relative pt-1">
//             <div className="flex mb-2 items-center justify-between">
//               <div>
//                 <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
//                   Passing Score
//                 </span>
//               </div>
//             </div>
//             <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
//               <div
//                 style={{ width: '60%' }}
//                 className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
//               ></div>
//             </div>
//           </div>
//         </div>
//         <div className="p-6 bg-sky-500 rounded-lg shadow-lg">
//           <Header as="h3" className="text-center">
//             Time Taken
//           </Header>
//           <p className="text-center">{`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}</p>
//         </div>
//       </div>
//       <div className="flex justify-center space-x-4 mt-8">
//         <Button
//           className="bg-black text-white px-6 py-3 rounded-lg"
//           primary
//           content="Play Again"
//           onClick={replayQuiz}
//           size="big"
//           icon="redo"
//           labelPosition="left"
//         />
//         <Button
//           className="bg-gray-700 text-white px-6 py-3 rounded-lg"
//           content="Back to Home"
//           onClick={resetQuiz}
//           size="big"
//           icon="home"
//           labelPosition="left"
//         />
//         <ShareButton />
//       </div>
//     </div>
//   );
// };

// Stats.propTypes = {
//   totalQuestions: PropTypes.number.isRequired,
//   correctAnswers: PropTypes.number.isRequired,
//   timeTaken: PropTypes.number.isRequired,
//   replayQuiz: PropTypes.func.isRequired,
//   resetQuiz: PropTypes.func.isRequired,
// };

// export default Stats;
import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button } from 'semantic-ui-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the default styles

import ShareButton from '../ShareButton';
import { calculateScore, calculateGrade, timeConverter } from '../../utils';

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz,
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <div className="p-12 space-y-32">
      <div className="text-center">
        <Header as="h1" className="bg-white text-black p-4 rounded-lg">
          {remarks}
          <p className='p-5'>Check your answers in QNA</p>
        </Header>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 size-11/12">
        <div className="p-6 bg-yellow-600 rounded-lg shadow-lg">
          <Header as="h2" className="text-center">
            Grade: {grade}
          </Header>
        </div>
        <div className="p-6 bg-red-500 rounded-lg shadow-lg">
          <Header as="h3" className="text-center">
            Total Questions: {totalQuestions}
          </Header>
        </div>
        <div className="p-6 bg-pink-500 rounded-lg shadow-lg">
          <Header as="h3" className="text-center">
            Correct Answers: {correctAnswers}
          </Header>
        </div>
        <div className="p-6 bg-green-600 rounded-lg shadow-lg flex items-center justify-center">
          <div className="w-48 h-48">
            <CircularProgressbar
              value={score}
              text={`${score}%`}
              styles={buildStyles({
                textColor: '#fff',
                pathColor: '#F59E0B',
                trailColor: '#FEE2E2',
                strokeLinecap: 'round',
                pathTransitionDuration: 0.5,
              })}
            />
          </div>
          <Header as="h3" className="text-center mt-4">
            Your Score
          </Header>
        </div>
        <div className="p-6 bg-blue-600 rounded-lg shadow-lg flex items-center justify-center">
          <div className="w-48 h-48">
            <CircularProgressbar
              value={60} // Passing Score is always 60%
              text="60%"
              styles={buildStyles({
                textColor: '#fff',
                pathColor: '#F87171',
                trailColor: '#FEE2E2',
                strokeLinecap: 'round',
                pathTransitionDuration: 0.5,
              })}
            />
          </div>
          <Header as="h3" className="text-center mt-4">
            Passing Score
          </Header>
        </div>
        <div className="p-6 bg-sky-500 rounded-lg shadow-lg">
          <Header as="h3" className="text-center">
            Time Taken
          </Header>
          <p className="text-center">{`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        <Button
          className="bg-black text-white px-6 py-3 rounded-lg"
          primary
          content="Play Again"
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
        />
        <Button
          className="bg-black text-white px-6 py-3 rounded-lg"
          content="Back to Home"
          onClick={resetQuiz}
          size="big"
          icon="home"
          labelPosition="left"
        />
        <ShareButton />
      </div>
    </div>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default Stats;
