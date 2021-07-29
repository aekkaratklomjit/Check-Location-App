import React, { Component } from "react";
import { connect } from "react-redux";
import ShowLocation from "./ShowLocation";
import EditLocation from "./EditLocation";
import _ from "lodash";
class Location extends Component {
  render() {
    return (
      <div style={{display: 'table-cell'}}>
        {this.props.blogsLocation.map((item) => (item.editing ? <EditLocation key={item.id} item={item}/> :<ShowLocation key={item.id} item={item}/>))}
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
export default connect(mapStateToProps)(Location);
