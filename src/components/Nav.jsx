import React from "react";
import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';
import StyleConst from '../style/constants';
import Menu from './Menu.jsx';

const MenuContainer = styled('nav')`
  display: flex;
  align-items: center;
  height: ${StyleConst.menuHeight};
  border-bottom: 1px solid #b3b3b3;
  box-sizing: border-box;
  
  @media (max-width: ${StyleConst.xs}) and (max-height: ${StyleConst.xs}) {
    height: ${StyleConst.menuHeightSlim};
  }
`;

const MenuLink = styled(NavLink)`
  padding: 0.8rem 1rem;
  margin: 0.5rem;
  color: rgba(255,255,255,.4);
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  user-select: none;
  
  &.active {
    color: #fff;
  }
  
  &:hover:not(.active),
  &:active:not(.active) {
    color: rgba(255,255,255,.8);
  }
`;

const Nav = () => {
    return (
        <MenuContainer>
            <Menu linkComponent={({ path, title }) => (
                <MenuLink
                    key={path}
                    to={path}>
                    {title}
                </MenuLink>
            )} />
        </MenuContainer>
    )
};

export default Nav;