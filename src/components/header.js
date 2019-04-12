import React, { Component } from 'react';
// import Img from "gatsby-image";
import { toElement as scrollToElement } from './../utils/scroll';
import './../styles/header.scss';
import { Link } from "gatsby";
import logo from "../images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const stickyClass = this.state.isSticky ? 'sticky' : '';
    // const logoImg = this.props.logoImg;

    return (
      <nav
        className = {`${stickyClass} content-grid`}
        ref={(elem) => {
          this.nav = elem;
        }}
      >
      <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="lgo" style={{ width: "150px" }} />
            </Link>
       {/* <Img
              title="logo"
              alt="logo"
              sizes={logoImg.sizes}
              className="img-responsive center-block"
            /> */}
       
        
        <div className="menu">
          <div
            className="menu__item active"
            onClick={(e) => this.scrollToPage('.about-page')}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={(e) => this.scrollToPage('#experience')}
          >
            Experience
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
