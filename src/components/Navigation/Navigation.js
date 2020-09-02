import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/DeveloperMode";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import CreateIcon from "@material-ui/icons/Create";

const styles = {
  root: {
    position: "sticky",
    top: 0,
    zIndex: 99,
    borderBottom: "1px solid #E6E6E6",
    backgroundColor: "#ECF0F1",
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
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          href=""
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          href="#about"
          label="About"
          value=""
          icon={<PersonIcon />}
        />
        <BottomNavigationAction
          label="Portfolio"
          value="projects"
          href=""
          icon={<WorkIcon />}
        />
        <BottomNavigationAction
          label="Blog"
          value="blog"
          href=""
          icon={<CreateIcon />}
        />
        <BottomNavigationAction
          label="Contact"
          value="contact"
          href=""
          icon={<PhoneIcon />}
        />
      </BottomNavigation>
    );
  }
}
export default withStyles(styles)(Navigation);
