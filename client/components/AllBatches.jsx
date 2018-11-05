import React from 'react';
import PropTypes from 'prop-types';
import RetrieveButton from './Buttons/Retrieve';
import Send from './Buttons/Send';
import request from '../utils/api';
import { withStyles } from '@material-ui/core/styles';
import BatchDetail from './BatchDetail';
import FindBatch from './Buttons/Find';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class AllBatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { batches: [] };
    this.getAll = this.getAll.bind(this);
    this.getSingle = this.getSingle.bind(this);
  }

  getAll() {
    request('get', `/batches`)
      .then(res => {
        this.setState({
          batches: res.body.BatchPayments
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  getSingle(id) {
    request('get', `/single`, { id })
      .then(res => {
        this.setState({
          batches: res.body.BatchPayments
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Send />
        <RetrieveButton onClick={this.getAll} />
        <FindBatch onClick={this.getSingle} />
        {this.state.batches.length >= 1 && (
          <BatchDetail batches={this.state.batches} />
        )}
      </div>
    );
  }
}

AllBatches.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AllBatches);
