import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import AutoRenew from '@material-ui/icons/Autorenew';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class FindBatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
    console.log(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="enter batch payment ID here"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.props.onClick(this.state.input)}
          >
            Find Batch By ID
            <Icon className={classes.rightIcon}>
              <AutoRenew />
            </Icon>
          </Button>
        </form>
      </div>
    );
  }
}

FindBatch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FindBatch);
