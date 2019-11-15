import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../img/logo.jpg";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: "/"
    };
  }

  onMenuItemClick = link => {
    this.setState({ activeMenuItem: link });
  };

  isActiveMenuItem = link => {
    return this.state.activeMenuItem === link ? "active" : "";
  };

  render() {
    return (
      <header>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className={`${this.isActiveMenuItem("/")} smooth-scroll`}>
                  <Link onClick={() => this.onMenuItemClick("/")} to="/">
                    Главная
                  </Link>
                </li>
                <li
                  className={`${this.isActiveMenuItem(
                    "/events"
                  )} smooth-scroll`}
                >
                  <Link
                    onClick={() => this.onMenuItemClick("/events")}
                    to="/events"
                  >
                    Календарь событий
                  </Link>
                </li>
                <li
                  className={`${this.isActiveMenuItem("/video")} smooth-scroll`}
                >
                  <Link
                    onClick={() => this.onMenuItemClick("/video")}
                    to="/video"
                  >
                    Фильмы о войне
                  </Link>
                </li>
                <li
                  className={`${this.isActiveMenuItem("/music")} smooth-scroll`}
                >
                  <Link
                    onClick={() => this.onMenuItemClick("/music")}
                    to="/music"
                  >
                    Песни
                  </Link>
                </li>
                <li
                  className={`${this.isActiveMenuItem("/books")} smooth-scroll`}
                >
                  <Link
                    onClick={() => this.onMenuItemClick("/books")}
                    to="/books"
                  >
                    Книги
                  </Link>
                </li>
                <li
                  className={`${this.isActiveMenuItem("/lenta")} smooth-scroll`}
                >
                  <Link
                    onClick={() => this.onMenuItemClick("/lenta")}
                    to="/lenta"
                  >
                    Лента памяти
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
