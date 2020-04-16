import React from "react";
import { Box, withStyles, Grid } from "@material-ui/core";
import "./../sass/svg.css";
import Footer from "./Footer";
import { Link, withRouter, Redirect } from "react-router-dom";
import UsersLogin from "./Users/UsersLogin";

const style = (theme) => ({
  social_icon_css: {
    height: 30,
    width: 30,
  },
  but_css: {
    background: "transparent",
    outline: "none",
    border: "none",
    cursor: "pointer",
    height: "fit-content",
    width: "fit-content",
    padding: 15,
    "&:hover": {
      "& path": {
        fill: "black",
      },
    },
  },
  width_50: {
    width: "50%",
  },
  footer_coponent_css: {
    marginTop: "10%",
  },
});

let log = console.log;

class Social extends React.Component {
  handleFBClick = () => {
    return (window.location.href = "https://www.facebook.com/PanAngelo.99/");
  };

  handleINSClick = () => {
    return (window.location.href = "https://www.instagram.com/aintducc/");
  };
  loginHandle = (event) => {
    // log("footer is touching social");
    const { location } = this.props;

    // history.push("/social/users/login");
    // location.pathname = "/social/users/login";

    // log(location);
    // log(history);
    // log("event " + event);

    if (location.pathname === "/social") {
      return true;
    } else if (location.pathname === "/social/users/login") {
      return false;
    }
    // return true;
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid>
        <Grid item>
          {this.loginHandle() ? (
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              height="50vh"
            >
              <button className={classes.but_css} onClick={this.handleFBClick}>
                <Box className={classes.social_icon_css}>
                  <svg
                    viewBox="-110 1 511 511.99996"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m180 512h-81.992188c-13.695312 0-24.835937-11.140625-24.835937-24.835938v-184.9375h-47.835937c-13.695313 0-24.835938-11.144531-24.835938-24.835937v-79.246094c0-13.695312 11.140625-24.835937 24.835938-24.835937h47.835937v-39.683594c0-39.347656 12.355469-72.824219 35.726563-96.804688 23.476562-24.089843 56.285156-36.820312 94.878906-36.820312l62.53125.101562c13.671875.023438 24.792968 11.164063 24.792968 24.835938v73.578125c0 13.695313-11.136718 24.835937-24.828124 24.835937l-42.101563.015626c-12.839844 0-16.109375 2.574218-16.808594 3.363281-1.152343 1.308593-2.523437 5.007812-2.523437 15.222656v31.351563h58.269531c4.386719 0 8.636719 1.082031 12.289063 3.121093 7.878906 4.402344 12.777343 12.726563 12.777343 21.722657l-.03125 79.246093c0 13.6875-11.140625 24.828125-24.835937 24.828125h-58.46875v184.941406c0 13.695313-11.144532 24.835938-24.839844 24.835938zm-76.8125-30.015625h71.632812v-193.195313c0-9.144531 7.441407-16.582031 16.582032-16.582031h66.726562l.027344-68.882812h-66.757812c-9.140626 0-16.578126-7.4375-16.578126-16.582031v-44.789063c0-11.726563 1.191407-25.0625 10.042969-35.085937 10.695313-12.117188 27.550781-13.515626 39.300781-13.515626l36.921876-.015624v-63.226563l-57.332032-.09375c-62.023437 0-100.566406 39.703125-100.566406 103.609375v53.117188c0 9.140624-7.4375 16.582031-16.578125 16.582031h-56.09375v68.882812h56.09375c9.140625 0 16.578125 7.4375 16.578125 16.582031zm163.0625-451.867187h.003906zm0 0" />
                  </svg>
                </Box>
              </button>
              <button className={classes.but_css} onClick={this.handleINSClick}>
                <Box className={classes.social_icon_css}>
                  <svg
                    viewBox="0 0 512.00096 512.00096"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" />
                    <path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" />
                    <path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" />
                  </svg>
                </Box>
              </button>
            </Box>
          ) : (
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              height="50vh"
            >
              <UsersLogin />
            </Box>
          )}
        </Grid>
        <Grid item className={classes.footer_coponent_css}>
          <Footer loginHandle={this.loginHandle} />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(style)(Social));
