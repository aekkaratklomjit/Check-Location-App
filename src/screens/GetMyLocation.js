import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {addCurrentLocation} from "../actions"
import _ from "lodash";
class GetMyLocation extends Component {
  getLocation = async () => {
    let promise = new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    let pos = await promise;
    let data = {
      id: Date.now(),
      longitude: pos.coords.longitude,
      latitude: pos.coords.latitude,
    };
    this.props.addCurrentLocation(data)
  };
  render() {
    return (
      <div>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => this.getLocation()}
        >
          Getlocation
        </Button>
        {this.props.blogsCurrentLocation.map((item) => (
          <div>
            <h2 className="font-getLocation">
              Current Location
              <br />
              Latitude: {item.latitude} <br />
              Longitude: {item.longitude}
            </h2>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const blogsCurrentLocation = _.map(state.blogsCurrentLocation, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });
  return {
    blogsCurrentLocation,
  };
};
export default connect(mapStateToProps,{addCurrentLocation})(GetMyLocation);
