import styled from "styled-components";

const ProductsCont = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const ProductCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem;

  min-height: 380px;

  border-radius: 1rem;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & img {
    max-height: 245px;
  }
`;

export { ProductCont, ProductsCont };
