import React from "react";
import "./homepage.styles.css";
import { Jumbotron, Container } from "reactstrap";
import Box from "../../components/cards/card";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const HomePage = props => {
  return (
    <div>
      <Jumbotron fluid className="jb">
        <Container fluid>
          <UncontrolledDropdown>
            <DropdownToggle>
              <h1>Where To ?</h1>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Travel forum</DropdownItem>
              <DropdownItem>Best of 2020</DropdownItem>
              <DropdownItem>Airelines</DropdownItem>
              <DropdownItem>Package Holidays</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Help Centre</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Container>
      </Jumbotron>

      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/Restaurants/">Restaurants</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="Cruises">Cruises</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="Cruises">Things To Do</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Travel forum</DropdownItem>
              <DropdownItem>Best of 2020</DropdownItem>
              <DropdownItem>Airelines</DropdownItem>
              <DropdownItem>Package Holidays</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Help Centre</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
      <Box />
    </div>
  );
};

export default HomePage;
