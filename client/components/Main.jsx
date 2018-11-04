import React from "react";
import PropTypes from "prop-types";

import { get, set } from "../utils/localstorage";
import AllBatches from "./AllBatches";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  },
  header: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing.unit * 6}px 0`,
    borderBottom: "1px solid #3f51b5",
    borderTop: "1px solid #3f51b5"
  }
});

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirm: get("confirmed") || false };
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <Typography
              component="h2"
              variant="headline"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Xero Batch Payments Finder - V1
            </Typography>
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarSecondary} />
          <main />
        </div>
        <Typography
          className={classes.content}
          variant="title"
          align="center"
          gutterBottom
        >
          Enter an ID below or find all batch payments.
        </Typography>
        <AllBatches />
      </React.Fragment>
    );
  }
}

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
