import { StyledTitle } from "./SectionStyled";

export const Section = ({ title, children }) => (
  <>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </>
);