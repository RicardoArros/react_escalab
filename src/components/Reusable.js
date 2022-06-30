import styled from "styled-components";

// Max width Cont
const MaxWidthCont = styled.div(
  ({ theme }) => `
    max-width: 650px;

    margin: auto;

    @media ${theme.breakpoints.lg} {
      max-width: 1170px;
    }
  `
);

export {
  MaxWidthCont
}