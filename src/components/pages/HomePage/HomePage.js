import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import SeriesList from "../../SeriesList/SeriesList";

import "./HomePage.css";

class HomePage extends Component {
  handleSelectSeries = (id) => (event) => {
    this.props.history.push(`/tvshow/${id}`);
  };
  componentDidMount() {
    this.props.dispatch({ type: "GET_SERIES" });
  }
  render() {
    return (
      <div>
        <h1> Your Top Series</h1>
        <div>
          {this.props.store.seriesReducer.map((series, index) => {
            <div key={series.id}>
              <h2>{series.series}</h2>
              <h4>{series.episode}</h4>
              <h4>{series.season}</h4>
              <h4>{series.platform}</h4>
              <h4>{series.genre}</h4>
            </div>;
            <div className="series_posterImage">
              <img src={this.props.series.posters} />
            </div>;
          })}
        </div>
        <div>
          <button id="genre-selection" onClick={this.handleSelectSeries}>
            {" "}
            Select{" "}
          </button>
        </div>
      </div>
    );
  }
}
<SeriesList />;
export default connect(mapStoreToProps)(HomePage);
