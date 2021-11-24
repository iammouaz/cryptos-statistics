import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { IoChevronBack } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';

const Header = (data) => {
  function titleCase(string) {
    return string.substring(1).charAt(0).toUpperCase() + string.slice(2).toLowerCase();
  }

  const { sendData } = data;
  const location = useLocation().pathname;

  return (
    <Navbar className="nav-bg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/" className="nav-link">
            {location === '/' ? (
              <AiOutlineHome />
            ) : (
              <IoChevronBack />
            )}
          </NavLink>
        </Navbar.Brand>
      </Container>
      <Container fluid>
        <Navbar.Text className="fs-3">
          {location === '/' ? (
            'Home'
          ) : (
            titleCase(location)
          )}
        </Navbar.Text>
      </Container>
      {location === '/' ? (
        <input onChange={(e) => { sendData(e.target.value); }} type="text" name="search" id="search" placeholder="Search" />
      ) : (
        <input className="placeholder" />
      )}
    </Navbar>
  );
};

export default Header;
