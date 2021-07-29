import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { editLocation,updateLocation } from '../actions'
import _ from "lodash";

class EditLocation extends Component {
  editLocation =(event)=>{
    event.preventDefault();
    console.log(this.props.item.id)
    console.log(event.target.longitude.value)
    const newData = {
      newLatiude : event.target.latitude.value,
      newLongitude : event.target.longitude.value
    }
    this.props.updateLocation(newData,this.props.item.id)

  }
    render() {
        return (
          <form onSubmit={this.editLocation}>
            <TextField
              style={{ width: 150 ,paddingRight:20}}
              label="Latitude"
              name="latitude"
              placeholder="latitude"
              size="small"
              pattern="[+-]?\d+(?:[.,]\d+)?"
              defaultValue={this.props.item.latitude}
              required
            />
          <TextField
            style={{ width: 150 ,paddingRight:20}}
              label="Longitude"
              name="longitude"
              placeholder="longitude"
              size="small"
              pattern="[+-]?\d+(?:[.,]\d+)?"
              defaultValue={this.props.item.longitude}
              required
            />
            <Button
              size="small"
              type="submit"
              variant="contained"
              color="secondary"
              >Edit</Button>
          </form>
        )
    }
}
export default connect(null,{editLocation,updateLocation})(EditLocation);
