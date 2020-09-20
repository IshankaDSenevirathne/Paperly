import React, { Component } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ViewModule from "@material-ui/icons/ViewModule";
import Announcement from "@material-ui/icons/Announcement";

const navTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1fa2ff",
    },
    text: {
      secondary: "#383838",
    },
  },
});

const styles = {
  root: {
    position: "sticky",
    top: 0,
    zIndex: 99,
    borderBottom: "1px solid #e4e4e4",
    backgroundColor: "#F8F8F8",
  },
};

class Navigation extends Component {
  state = {
    value: "home",
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;

    return (
      <ThemeProvider theme={navTheme}>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            href="#home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Past Papers"
            value="papers"
            href="#pastpapers"
            icon={<ViewModule />}
          />
          <BottomNavigationAction
            label="News"
            value="news"
            href=""
            icon={<Announcement />}
          />
        </BottomNavigation>
      </ThemeProvider>
    );
  }
}
export default withStyles(styles)(Navigation);
