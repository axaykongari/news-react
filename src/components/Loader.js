import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <div className="spinner-border text-secondary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
            <p className="text-secondary">Loading ...</p>
        </div>
      </>
    );
  }
}
