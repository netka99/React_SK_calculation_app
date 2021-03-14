import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Smaczny Kąsek
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/sklepy">Sklepy</Link>
        </li>
        <li>
          <Link to="/produkty">Produkty</Link>
        </li>
        <li>
          <Link to="/statystyka">Wykresy</Link>
        </li>
        <li>
          <Link to="/ustawienia">Ustawienia</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 9vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  z-index: 1;
  background: linear-gradient(45deg, #4a1bb5, #6b18a4);
  //  top: 0;
  position: absolute;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.267);
  width: 100%;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 70px;
    position: relative;
  }
`;

export default Nav;
