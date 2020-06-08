import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active'

export const Link = styled.a``;
export const Logo = styled.img`
  width: 120rem;
  height: auto;
  object-fit: contain;
`;

export const Navbar = styled.nav`
  z-index: 100;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  pointer-events: none;
`;

export const BasicNav = styled.div`
  width: 100%;
  padding: 20rem;
  height: 60rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  border-bottom: 1px solid #eee;  
  background: white;
`;

export const SideBar = styled.aside`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SideTop = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: flex-end;
`;

export const NavItem = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: #000;
  };
  font-size: 10rem;
  color: #bdbdbd;
  text-transform: uppercase;
  letter-spacing: .2em;
  padding: 0 15rem;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  transition: all 0.5s ease;
  background: white;

  ${props => props.vertical && css`
    height: 100%;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    > * {
      margin-bottom: 20rem
    };

    ${NavItem} {
      font-size: 20rem;
      font-weight: 700;
    }
  `};

  ${({ vertical, isOpen }) => vertical && !isOpen && css`
    opacity: 0;
    ${NavItem} {
      pointer-events: none;
    }`
  };
`;

export const Burger = styled.button`
  transition: all .5s ease;
  padding: 20rem;
`;

export const Line = styled.div`
  width: 20px;
  height: 2px;
  margin: 2px 0;
  background: #000;
  overflow: hidden;
`;



