// import React from 'react';
// import PropTypes from 'prop-types';
// import { Table } from 'semantic-ui-react';

// const QNA = ({ questionsAndAnswers }) => {
//   return (
//     <Table celled striped selectable size="large">
//       <Table.Header>
//         <Table.Row>
//           <Table.HeaderCell>No.</Table.HeaderCell>
//           <Table.HeaderCell>Questions</Table.HeaderCell>
//           <Table.HeaderCell>Your Answers</Table.HeaderCell>
//           <Table.HeaderCell>Correct Answers</Table.HeaderCell>
//           <Table.HeaderCell>Points</Table.HeaderCell>
//         </Table.Row>
//       </Table.Header>
//       <Table.Body>
//         {questionsAndAnswers.map((item, i) => (
//           <Table.Row key={i + 1}>
//             <Table.Cell>{i + 1}</Table.Cell>
//             <Table.Cell>{item.question}</Table.Cell>
//             <Table.Cell>{item.user_answer}</Table.Cell>
//             <Table.Cell>{item.correct_answer}</Table.Cell>
//             <Table.Cell>{item.point}</Table.Cell>
//           </Table.Row>
//         ))}
//       </Table.Body>
//     </Table>
//   );
// };

// QNA.propTypes = {
//   questionsAndAnswers: PropTypes.array.isRequired,
// };

// export default QNA;
import React from 'react';
import PropTypes from 'prop-types';

const QNA = ({ questionsAndAnswers }) => {
  return (
    <div className="space-y-4">
      {questionsAndAnswers.map((item, i) => (
        <div key={i} className="p-4 border rounded-lg shadow-lg">
          <p className="font-semibold">Q{i + 1}: {item.question}</p>
          <div className={`mt-2 p-3 rounded-lg ${item.user_answer === item.correct_answer ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            <p>Your Answer: {item.user_answer}</p>
            <p>Correct Answer: {item.correct_answer}</p>
          </div>
          <p className="mt-2">Points: {item.point}</p>
        </div>
      ))}
    </div>
  );
};

QNA.propTypes = {
  questionsAndAnswers: PropTypes.array.isRequired,
};

export default QNA;
