import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { StyledBox, StyledButton } from './AppStyled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (option) => {
    switch(option){
      case 'good': setGood(state => state + 1);
      break;
      case 'neutral': setNeutral(state => state + 1);
      break;
      case 'bad': setBad(state => state + 1);
      break;
      default:
    console.log(`Sorry, we are out of ${option}.`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  const totalFeedback = countTotalFeedback()
  const options=['good', 'neutral', 'bad']

  return (
      <StyledBox>
        <Section title="Please leave your feedback">
  {options.map((option) => (
    <StyledButton key={option} onClick={() => handleFeedback(option)}>
      {option}
    </StyledButton>
  ))}
        </Section>
  {totalFeedback > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </StyledBox>
    );
  }




// export const App = () => {
//   const [good, setGood] = useState(0);
//   const [b, setGood] = useState(0);
  
  
  
//     state = {
//       good: 0,
//       neutral: 0,
//       bad: 0
//     };
  
//     handleFeedback = (type) => {
//       this.setState((prevState) => ({
//         [type]: prevState[type] + 1
//       }));
//     };
  
//     countTotalFeedback = () => {
//       const { good, neutral, bad } = this.state;
//       return good + neutral + bad;
//     };
  
//     countPositiveFeedbackPercentage = () => {
//       const { good } = this.state;
//       const total = this.countTotalFeedback();
//       return total > 0 ? Math.round((good / total) * 100) : 0;
//     };
  
//     render() {
//       const { good, neutral, bad } = this.state;
//       const totalFeedback = this.countTotalFeedback();
//       const positivePercentage = this.countPositiveFeedbackPercentage();
  
//       return (
//         <StyledBox>
//           <Section title="Please leave your feedback">
//             <FeedbackOptions
//               options={['good', 'neutral', 'bad']}
//               onLeaveFeedback={this.handleFeedback}
//             />
//           </Section>
  
//           {totalFeedback > 0 ? (
//             <Section title="Statistics">
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={totalFeedback}
//                 positivePercentage={positivePercentage}
//               />
//             </Section>
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </StyledBox>
//       );
//     }
//   };
  