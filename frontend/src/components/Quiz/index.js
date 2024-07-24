// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import {
//   Container,
//   Segment,
//   Item,
//   Divider,
//   Button,
//   Icon,
//   Message,
//   Menu,
//   Header,
// } from 'semantic-ui-react';
// import he from 'he';

// import Countdown from '../Countdown';
// import { getLetter } from '../../utils';

// const Quiz = ({ data, countdownTime, endQuiz }) => {
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [userSlectedAns, setUserSlectedAns] = useState(null);
//   const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
//   const [timeTaken, setTimeTaken] = useState(null);

//   useEffect(() => {
//     if (questionIndex > 0) window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [questionIndex]);

//   const handleItemClick = (e, { name }) => {
//     setUserSlectedAns(name);
//   };

//   const handleNext = () => {
//     let point = 0;
//     if (userSlectedAns === he.decode(data[questionIndex].correct_answer)) {
//       point = 1;
//     }

//     const qna = questionsAndAnswers;
//     qna.push({
//       question: he.decode(data[questionIndex].question),
//       user_answer: userSlectedAns,
//       correct_answer: he.decode(data[questionIndex].correct_answer),
//       point,
//     });

//     if (questionIndex === data.length - 1) {
//       return endQuiz({
//         totalQuestions: data.length,
//         correctAnswers: correctAnswers + point,
//         timeTaken,
//         questionsAndAnswers: qna,
//       });
//     }

//     setCorrectAnswers(correctAnswers + point);
//     setQuestionIndex(questionIndex + 1);
//     setUserSlectedAns(null);
//     setQuestionsAndAnswers(qna);
//   };

//   const timeOver = timeTaken => {
//     return endQuiz({
//       totalQuestions: data.length,
//       correctAnswers,
//       timeTaken,
//       questionsAndAnswers,
//     });
//   };

//   return (
//     <Item.Header>
//       <Container>
//         <Segment>
//           <Item.Group divided>
//             <Item>
//               <Item.Content>
//                 <Item.Extra>
//                   <Header as="h1" block floated="left">
//                     <Icon name="info circle" />
//                     <Header.Content>
//                       {`Question No.${questionIndex + 1} of ${data.length}`}
//                     </Header.Content>
//                   </Header>
//                   <Countdown
//                     countdownTime={countdownTime}
//                     timeOver={timeOver}
//                     setTimeTaken={setTimeTaken}
//                   />
//                 </Item.Extra>
//                 <br />
//                 <Item.Meta>
//                   <Message size="huge" floating>
//                     <b>{`Q. ${he.decode(data[questionIndex].question)}`}</b>
//                   </Message>
//                   <br />
//                   <Item.Description>
//                     <h3>Please choose one of the following answers:</h3>
//                   </Item.Description>
//                   <Divider />
//                   <Menu vertical fluid size="massive">
//                     {data[questionIndex].options.map((option, i) => {
//                       const letter = getLetter(i);
//                       const decodedOption = he.decode(option);

//                       return (
//                         <Menu.Item
//                           key={decodedOption}
//                           name={decodedOption}
//                           active={userSlectedAns === decodedOption}
//                           onClick={handleItemClick}
//                         >
//                           <b style={{ marginRight: '8px' }}>{letter}</b>
//                           {decodedOption}
//                         </Menu.Item>
//                       );
//                     })}
//                   </Menu>
//                 </Item.Meta>
//                 <Divider />
//                 <Item.Extra>
//                   <Button
//                     primary
//                     content="Next"
//                     onClick={handleNext}
//                     floated="right"
//                     size="big"
//                     icon="right chevron"
//                     labelPosition="right"
//                     disabled={!userSlectedAns}
//                   />
//                 </Item.Extra>
//               </Item.Content>
//             </Item>
//           </Item.Group>
//         </Segment>
//         <br />
//       </Container>
//     </Item.Header>
//   );
// };

// Quiz.propTypes = {
//   data: PropTypes.array.isRequired,
//   countdownTime: PropTypes.number.isRequired,
//   endQuiz: PropTypes.func.isRequired,
// };

// export default Quiz;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import Countdown from '../Countdown';
import { getLetter } from '../../utils';

const Quiz = ({ data, countdownTime, endQuiz }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSelectedAns, setUserSelectedAns] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  useEffect(() => {
    if (questionIndex > 0) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questionIndex]);

  const handleItemClick = (e, decodedOption) => {
    setUserSelectedAns(decodedOption);
  };

  const handleNext = () => {
    let point = 0;
    if (userSelectedAns === he.decode(data[questionIndex].correct_answer)) {
      point = 1;
    }

    const qna = [...questionsAndAnswers];
    qna.push({
      question: he.decode(data[questionIndex].question),
      user_answer: userSelectedAns,
      correct_answer: he.decode(data[questionIndex].correct_answer),
      point,
    });

    if (questionIndex === data.length - 1) {
      return endQuiz({
        totalQuestions: data.length,
        correctAnswers: correctAnswers + point,
        timeTaken,
        questionsAndAnswers: qna,
      });
    }

    setCorrectAnswers(correctAnswers + point);
    setQuestionIndex(questionIndex + 1);
    setUserSelectedAns(null);
    setQuestionsAndAnswers(qna);
  };

  const timeOver = timeTaken => {
    return endQuiz({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{`Question No.${questionIndex + 1} of ${data.length}`}</h1>
          <Countdown
            countdownTime={countdownTime}
            timeOver={timeOver}
            setTimeTaken={setTimeTaken}
          />
        </div>
        <div className="mb-16 font-bold ">
          <div className="bg-blue-100 text-black p-4 rounded-lg text-2xl">
            <b>{`Q. ${he.decode(data[questionIndex].question)}`}</b>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Please choose one of the following answers:</h3>
          <div className="grid grid-cols-1 gap-4">
            {data[questionIndex].options.map((option, i) => {
              const letter = getLetter(i);
              const decodedOption = he.decode(option);
              const isSelected = userSelectedAns === decodedOption;

              return (
                <div
                  key={decodedOption}
                  className={`p-4 border rounded-lg cursor-pointer ${isSelected ? 'border-blue-500 bg-slate-400' : 'border-gray-300'}`}
                  onClick={(e) => handleItemClick(e, decodedOption)}
                >
                  <b className="mr-2">{letter}</b>
                  {decodedOption}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-black text-white font-semibold rounded-lg"
            onClick={handleNext}
            disabled={!userSelectedAns}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

Quiz.propTypes = {
  data: PropTypes.array.isRequired,
  countdownTime: PropTypes.number.isRequired,
  endQuiz: PropTypes.func.isRequired,
};

export default Quiz;
