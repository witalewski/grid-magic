import React from 'react';
import styled from '@emotion/styled';
import { Upload, TextControls, Download } from '../';

const NavStyled = styled.nav`
  width: 100%;
`;

export const Nav = () => (
  <NavStyled className="navbar navbar-expand-md navbar-light bg-light">
    <a className="navbar-brand" href="/">
      <span role="img" aria-label="Wizard emoji">
        🧙🏻‍♀️
      </span>{' '}
      Grid Magic
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Upload />
        </li>
      </ul>
      <TextControls />
      <Download />
    </div>
  </NavStyled>
);

export default Nav;
