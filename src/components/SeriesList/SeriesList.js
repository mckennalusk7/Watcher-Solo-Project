import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SeriesList extends Component {
  // handleSelectSeries = () => {
  //   this.props.push(`/api/tvshow/${id}`);
  // };
  render() {
    return (
      <div>
        <div className="series_posterImage">
          <img src={this.props.series.poster} />
        </div>
        <div className="container">
          <div className="series_episode">
            <h2> {this.props.series.series}</h2>
          </div>
        </div>
        <div key={this.props.series.id}>
          <div>
            {" "}
            <button id="series-selection" onClick={this.handleSelectSeries}>
              {" "}
              Select{" "}
            </button>{" "}
          </div>
          <div>
            <h4> Episode: {this.props.series.episode}</h4>
          </div>
          <div>
            <h4>Season: {this.props.series.season}</h4>
          </div>
          <div>
            <h4>Platform: {this.props.series.platform}</h4>
          </div>
          <div>
            {" "}
            <h4> Genre: {this.props.series.genre} </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SeriesList);
