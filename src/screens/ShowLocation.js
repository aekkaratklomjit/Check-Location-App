import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { deleteLocation, editLocation } from "../actions";
import _ from "lodash";

class ShowLocation extends Component {
  render() {
    return (
      <div key={this.props.item.id} className="divPost">
        <TextField
          style={{ width: 150 ,paddingRight:20}}
          label="Latitude"
          name="latitude"
          placeholder="latitude"
          size="small"
          pattern="[+-]?\d+(?:[.,]\d+)?"
          value={this.props.item.latitude}
          required
        />
        <TextField
          style={{ width: 150 ,paddingRight:20}}
          label="Longitude"
          name="longitude"
          placeholder="longitude"
          size="small"
          pattern="[+-]?\d+(?:[.,]\d+)?"
          value={this.props.item.longitude}
          required
        />
        <label style={{ paddingRight: 20 }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => this.props.editLocation(this.props.item.id)}
        >
          Edit
        </Button>
        </label>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => this.props.deleteLocation(this.props.item.id)}
        >
          Delete
        </Button>
      </div>
    );
  }
}
export default connect(null, { deleteLocation, editLocation })(ShowLocation);
