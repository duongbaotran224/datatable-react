import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as S from './styled';
import logo from '../../logo.png'

const links = [
  { href: ROUTES.ABOUT, title: "About" },
  { href: ROUTES.STATS, title: "Stats" },
  { href: ROUTES.CONTACT, title: "Contact" },
]

const Burger = ({ toggleMenu }) => (
  <S.Burger onClick={toggleMenu}>
    <S.Line />
    <S.Line />
    <S.Line />
  </S.Burger>
)

const NavItem = ({ href, title, index, toggleMenu }) => (
  <li>
    <S.NavItem as={NavLink} exact to={href} index={index} onClick={toggleMenu}>
      {title}
    </S.NavItem>
  </li>
)
const NavList = ({ vertical, isOpen, toggleMenu }) => (
  <S.List vertical={vertical} isOpen={isOpen}>
    {
      links.map((item, index) => (
        <NavItem
          key={item.title}
          index={index}
          toggleMenu={toggleMenu}
          {...item}
        />
      ))
    }
  </S.List>
)

const BasicNav = () => (
  <S.BasicNav>
    <S.Link as={Link} to={ROUTES.ABOUT}>
      <S.Logo src={logo} />
    </S.Link>
    <NavList />
  </S.BasicNav>
)

class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  toggleMenu = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    const { open } = this.state
    return (
      <S.SideBar>
        <S.SideTop>
          <Burger isOpen={open} toggleMenu={this.toggleMenu} />
        </S.SideTop>
        <NavList vertical={true} isOpen={open} toggleMenu={this.toggleMenu} />
      </S.SideBar>
    )
  }
}

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenWidth: 0
    }
  }

  componentDidMount() {
    this.getScreenWidth();
    window.addEventListener('resize', this.getScreenWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getScreenWidth);
  }

  getScreenWidth = () => {
    this.setState({
      screenWidth: window.innerWidth
    })
  }

  render() {
    return (
      <S.Navbar>
        {
          this.state.screenWidth > 600 ?
            <BasicNav />
            : <SideBar />
        }
      </S.Navbar>
    )
  }
}

export default Navigation
