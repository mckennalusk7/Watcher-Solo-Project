import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SeriesList extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="series_episode">
            <h2> {this.props.series.genre}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SeriesList);
