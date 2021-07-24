import React, { Component } from "react";
import "./../App.css";
import PostFormLocation from "./PostFormLocation";
import ShowLocation from "./ShowLocation";
import GetMyLocation from "./GetMyLocation";
import CheckLocation from "./CheckLocation";
export default class HomeScreens extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ paddingTop: 20 }}>
          <h1>Check-Location Web App</h1>
        </div>
        <div style={{ paddingTop: 25 }}>
          <PostFormLocation />
        </div>
        <div className="centered">
          <ShowLocation />
        </div>
        <div className="centered">
          <GetMyLocation />
        </div>
        <div className="centered">
          <CheckLocation />
        </div>
      </div>
    );
  }
}
