import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

export default class Navbar extends Component {
  state = {
    isUserLogin: false,
    username: "",

    isOpenSnack: false,
    SnackbarMessage: "",
  };

  componentDidMount() {
    let userdata = localStorage.getItem("username");
    if (userdata) {
      this.setState({ isUserLogin: true, username: userdata });
    }
  }

  logoutFunction = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    this.setState({
      isOpenSnack: true,
      SnackbarMessage: "You have sucessfully logged out!",
    });
  };

  closeSnack = () => {
    this.setState({ isOpenSnack: false });
  };

  render() {
    return (
      <>
<<<<<<< HEAD
        <div className="bg-fef0ef">
          <nav class="navbar navbar-expand-lg navbar-light bg-fef0ef sticky-top">
            <NavLink class="navbar-brand" to="/">
              Edu Website
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item mr-4 active">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Home <span class="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li class="nav-item mr-4">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li class="nav-item mr-4">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </ul>

              {this.state.isUserLogin ? (
                <>
                  <div class="nav-item dropdown mr-5">
                    <a
                      class="nav-link dropdown-toggle  relative"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.state.username}
                    </a>
                    <div
                      class="dropdown-menu justify-content-end"
                      aria-labelledby="navbarDropdown"
                    >
                      <a class="dropdown-item" href="#">
                        Profile
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => this.logoutFunction()}
                      >
                        Log Out
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink to="/login" className="text-dark mr-5">
                  <Button
                    className="py-2 px-4 text-light"
                    variant="outlined"
                    style={{ backgroundColor: "#f66962" }}
                  >
                    Login
                  </Button>
                </NavLink>
              )}
            </div>
          </nav>

          <Snackbar
            open={this.state.isOpenSnack}
            onClose={(e) => this.closeSnack(e)}
            TransitionComponent="Fade"
            message={this.state.SnackbarMessage}
          />
        </div>
=======
        <nav className="navbar navbar-expand-lg navbar-light bg-fef0ef sticky-top">
          <NavLink className="navbar-brand" to="#">
            Edu Website
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mr-4">
                <NavLink to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>

            {/* <button className="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Search</button> */}

            {this.state.isUserLogin ? (
              <>
                <div className="nav-item dropdown mr-5">
                  <NavLink
                    className="nav-link dropdown-toggle  relative"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {this.state.username}
                  </NavLink>
                  <div
                    className="dropdown-menu justify-content-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" href="#">
                      Profile
                    </NavLink>
                    <NavLink
                      className="dropdown-item"
                      href="#"
                      onClick={() => this.logoutFunction()}
                    >
                      Log Out
                    </NavLink>
                  </div>
                </div>
              </>
            ) : (
              <NavLink to="/login" className="text-dark mr-5">
                <Button
                  className="py-2 px-4 text-light"
                  variant="outlined"
                  style={{ backgroundColor: "#f66962" }}
                >
                  Login
                </Button>
              </NavLink>
            )}
          </div>
        </nav>

        <Snackbar
          open={this.state.isOpenSnack}
          onClose={(e) => this.closeSnack(e)}
          TransitionComponent="Fade"
          message={this.state.SnackbarMessage}
        />
>>>>>>> da6e62ef44f49a259f70fa7c67709dc1707eb96d
      </>
    );
  }
}
