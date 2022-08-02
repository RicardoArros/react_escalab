import styled from "styled-components";

import { Link } from "react-router-dom";

const NavBarWrap = styled.div`
  width: 100%;

  background-color: #f5f5f5;

  // Desktop First rule
  @media screen and (max-width: 960px) {
    position: fixed;
    top: 0;
  }
`;

const NavBarCont = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavBarLogoCont = styled.div`
  & > img {
    width: 60px;
  }
`;

const NavBarCartCont = styled.div`
  & > svg {
    font-size: 2.7rem;

    cursor: pointer;
  }
`;

const NavBarMenu = styled.ul(
  ({ showMobileMenu }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  // Desktop First rule
  @media screen and (max-width: 960px) {
    position: fixed;
    top: 58px;
    left: ${showMobileMenu ? "0" : "-100%"};

    flex-direction: column;
    align-items: flex-start;

    background: #f5f5f5;

    min-width: 46vw;
    height: calc(100vh - 58px);

    padding: 1rem;

    transition: 0.5s all ease;
  }
`
);

const NavBarMenuItem = styled.li``;

const NavBarMenuItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  @media screen and (min-width: 960px) {
    & > svg {
      display: none;
    }
  }
`;

// Mobile
const NavBarMobileIconCont = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  & > svg {
    font-size: 2em;
    //color: ;
  }

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export {
  NavBarWrap,
  NavBarCont,
  NavBarMenu,
  NavBarMenuItem,
  NavBarMenuItemLink,
  NavBarLogoCont,
  NavBarCartCont,
  NavBarMobileIconCont,
};
