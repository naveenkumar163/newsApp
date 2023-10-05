import React, { Component } from "react";
import loading from "../loading.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" height="80" width="80" />
      </div>
    );
  }
}

export default Spinner;
