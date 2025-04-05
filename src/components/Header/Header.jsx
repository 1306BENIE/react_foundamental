import React from "react";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

const Header = ({ NavItems }) => {
  return (
    <>
      <Logo />
      <Navigation props={NavItems} />
    </>
  );
};

export default Header;
