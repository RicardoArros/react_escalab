import styled from "styled-components";

// Product List
const ProductsCont = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  gap: 3rem;

  
`;

// Product Card
const ProductCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  //max-width: 33rem;
  min-width: 30rem;
  min-height: 38rem;


  padding: 2rem;

  border-radius: 1rem;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & img {
    max-height: 24.5rem;
  }
`;

const ProductInfo = styled.div`
  & > * {
    margin-bottom: 2rem;
  }
`;

// Product Detail
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

// Product Count
const ProductCountWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export {
  ProductCont,
  ProductsCont,
  ProductInfo,
  ProductDetailWrap,
  ProductDetailTitle,
  ProductDetailMain,
  ProductDetailImg,
  ProductDetailInfo,
  ProductCountWrap,
};
