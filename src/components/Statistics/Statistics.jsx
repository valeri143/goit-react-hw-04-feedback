import { StyledBox } from "./StatisticsStyled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StyledBox >
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </StyledBox>
  );