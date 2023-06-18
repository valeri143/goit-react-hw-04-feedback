// import { useState } from "react";


// export const FeedbackOptions = ({ options}) => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   const onLeaveFeedback = (option) => {
//     switch(option){
//       case good: setGood(state => state + 1);
//       break;
//       case neutral: setNeutral(state => state + 1);
//       break;
//       case bad: setBad(state => state + 1);
//       break;
//       default:
//     console.log(`Sorry, we are out of ${option}.`);
//     }
//   };

// return ( <div>
//   {options.map((option) => (
//     <StyledButton key={option} onClick={() => onLeaveFeedback(option)}>
//       {option}
//     </StyledButton>
//   ))}
// </div>)
// }
  




  // export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  //   <div>
  //     {options.map((option) => (
  //       <StyledButton key={option} onClick={() => onLeaveFeedback(option)}>
  //         {option}
  //       </StyledButton>
  //     ))}
  //   </div>
  // );