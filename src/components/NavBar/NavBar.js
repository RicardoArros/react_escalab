import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import {
  NavBarCartCont,
  NavBarCont,
  NavBarLogoCont,
  NavBarMenu,
  NavBarMenuItem,
  NavBarMenuItemLink,
  NavBarMobileIconCont,
  NavBarWrap,
} from "./NavBarStyled";

import { navItems } from "./NavBarData";
import { Layout } from "../Reusable";

import Logo from "../../assets/img/logo.svg";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  let navigate = useNavigate();

  const handleLink = () => {
    navigate("/cart");
  };

  return (
    <NavBarWrap>
      <NavBarCont>
        <Layout isNav>
          <NavBarMobileIconCont
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <FaTimes /> : <HiMenu />}
          </NavBarMobileIconCont>

          <NavBarLogoCont>
            <img src={Logo} alt="" />
          </NavBarLogoCont>

          <IconContext.Provider
            value={{ style: { fontSize: "1.4em", color: "#333" } }}
          >
            <NavBarMenu showMobileMenu={showMobileMenu}>
              {navItems.map((item) => (
                <NavBarMenuItem
                  key={item.id}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <NavBarMenuItemLink to={item.url}>
                    {item.icon}
                    <p>{item.text}</p>
                  </NavBarMenuItemLink>
                </NavBarMenuItem>
              ))}
            </NavBarMenu>
          </IconContext.Provider>

          <NavBarCartCont>
            <MdOutlineShoppingCart onClick={handleLink} />
          </NavBarCartCont>
        </Layout>
      </NavBarCont>
    </NavBarWrap>
  );
};

export default NavBar;
