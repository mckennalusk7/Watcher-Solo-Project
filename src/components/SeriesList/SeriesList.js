import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ozark from "../Posters/ozark.jpg";

class SeriesList extends Component {
  handleSelectSeries = (id) => (event) => {
    this.props.history.push(`/api/tvshow/${id}`);
  };
  render() {
    const seriesId = this.props.series.id;
    return (
      <div>
        <div className="container">
          <div className="series_episode">
            <h2> {this.props.series.series}</h2>
          </div>
        </div>

        <div className="series_posterImage">
          <img src={ozark} alt="ozark" />
        </div>
        <div>
          {" "}
          <button
            id="series-selection"
            onClick={this.handleSelectSeries(seriesId)}
          >
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
    );
  }
}

export default withRouter(SeriesList);
