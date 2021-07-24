import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import _ from "lodash";
class ShowLocation extends Component {
  delete = (id) => {
    this.props.dispatch({ type: "DELETE_LOCARION", id });
  };
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {this.props.blogsLocation.map((item) => (
              <tr key={item.id}>
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => this.delete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
export default connect(mapStateToProps)(ShowLocation);
