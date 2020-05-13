import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import Grid from "@material-ui/core/Grid";

import "./SeriesList.css";

class SeriesList extends Component {
  handleClickSeries = (id) => (event) => {
    this.props.history.push(`/series/${id}`);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="series_episode">
            <h2> {this.props.series.episode}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SeriesList);
