import styled from "styled-components";

const ProductsCont = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  & > li {
    //max-width: 30rem;
  }
`;

const ProductCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem;

  min-height: 38rem;

  border-radius: 1rem;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & img {
    max-height: 24.5rem;
  }
`;

//
const ProductDetailWrap = styled.div``;

const ProductDetailTitle = styled.div`
  margin-bottom: 5rem;
`;

const ProductDetailMain = styled.div`
  display: grid;
  // grid-template-columns: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductDetailImg = styled.div``;

const ProductDetailInfo = styled.div`
  & > * {
    margin-bottom: 3rem;
  }
`;

export {
  ProductCont,
  ProductsCont,
  ProductDetailWrap,
  ProductDetailTitle,
  ProductDetailMain,
  ProductDetailImg,
  ProductDetailInfo,
};
