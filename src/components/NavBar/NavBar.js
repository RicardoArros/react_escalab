import React, { useState } from "react";

import { IconContext } from "react-icons";

import { HiMenu } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import {
  NavBarCont,
  NavBarLogoCont,
  NavBarMenu,
  NavBarMenuItem,
  NavBarMenuItemLink,
  NavBarMobileIconCont,
  NavBarWrap,
} from "./NavBarStyled";

import { navItems } from "./NavBarData";

import Logo from "../../assets/img/logo.svg";
import { MaxWidthCont } from "../Reusable";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <NavBarWrap>
      <NavBarCont>
        <MaxWidthCont>
          <NavBarLogoCont>
            <img src={Logo} alt="" />
          </NavBarLogoCont>

          <NavBarMobileIconCont
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <FaTimes /> : <HiMenu />}
          </NavBarMobileIconCont>

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
        </MaxWidthCont>
      </NavBarCont>
    </NavBarWrap>
  );
};

export default NavBar;
