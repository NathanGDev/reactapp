import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <header>
      <NavBar className="header">
        <NavbarBrand href="/"> React Library </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/NathanGDev/reactapp.git">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </NavBar>
    </header>
  );
};

export default Header;
