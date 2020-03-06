import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
} from "reactstrap";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">TripAdvisor</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <NavLink href="/holidaypackages/">HolidayPackages</NavLink>
          <NavLink href="/AboutUs/">AboutUs</NavLink>
          <NavLink href="/connect with us">Connect</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
