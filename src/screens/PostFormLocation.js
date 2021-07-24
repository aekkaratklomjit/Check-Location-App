import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import _ from "lodash";
class PostFormLocation extends Component {
  add = (event) => {
    event.preventDefault();
    if (this.props.blogsLocation.length < 4) {
      const data = {
        id: Date.now(),
        latitude: event.target.latitude.value,
        longitude: event.target.longitude.value,
      };
      this.props.dispatch({ type: "ADD_LOCATION", data });
    } else {
      alert("Sorry, Location can add 4 row.");
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.add}>
          <label style={{ paddingLeft: 20 }}>
            <TextField
              label="Latitude"
              name="latitude"
              placeholder="latitude"
              size="small"
              pattern="[+-]?\d+(?:[.,]\d+)?"
              required
            />
          </label>
          <label style={{ paddingLeft: 20 }}>
            <TextField
              label="Longitude"
              name="longitude"
              placeholder="longitude"
              size="small"
              pattern="[+-]?\d+(?:[.,]\d+)?"
              required
            />
          </label>
          <label style={{ paddingTop: 20 }}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              type="submit"
              value="Submit"
            >
              Add
            </Button>
          </label>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const blogsLocation = _.map(state.blogsLocation, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });
  return {
    blogsLocation,
  };
};

export default connect(mapStateToProps)(PostFormLocation);
