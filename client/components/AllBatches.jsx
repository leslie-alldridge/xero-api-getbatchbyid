import React from "react";
import PropTypes from "prop-types";
import Retrieve from "./Buttons/Retrieve";
import Send from "./Buttons/Send";
import request from "../utils/api";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import indigo from "@material-ui/core/colors/indigo";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class AllBatches extends React.Component {
  constructor(props) {
    super(props);
    this.getAll = this.getAll.bind(this);
  }

  getAll() {}

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Send />
        <Retrieve onClick={this.getAll} />
      </div>
    );
  }
}

AllBatches.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllBatches);
