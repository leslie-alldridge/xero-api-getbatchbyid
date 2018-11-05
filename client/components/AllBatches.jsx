import React from "react";
import PropTypes from "prop-types";
import RetrieveButton from "./Buttons/Retrieve";
import Send from "./Buttons/Send";
import request from "../utils/api";
import { withStyles } from "@material-ui/core/styles";
import BatchDetail from './BatchDetail'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class AllBatches extends React.Component {
  constructor(props) {
    super(props);
    this.state={batches: []}
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    console.log('hit');
    
    request('get', `/batches`)
      .then(res => {
        console.log('hit');

        console.log(res);
        this.setState({
          batches: res.body.BatchPayments
        })
        
      })
      .catch(err => {
        console.log(err);
        
      })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Send />
        <RetrieveButton onClick={this.getAll} />
        {this.state.batches.length > 1 &&
        <BatchDetail batches={this.state.batches}/>}
      </div>
    );
  }
}

AllBatches.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllBatches);
