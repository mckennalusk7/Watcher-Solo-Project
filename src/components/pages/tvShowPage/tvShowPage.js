import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class tvShowPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "SET_SERIES" });
  }

  handleBackButton = () => {
    this.props.history.push("/");
  };

  render() {
    //    get series Id
    const id = Number(this.props.match.params.id);

    //   select series
    const seriesSelection = this.props.store.seriesReducer.filter(
      (seriesReducer) => {
        return seriesReducer.id === id;
      }
    );

    return (
      <div>
        <button onClick={this.handleBackButton}>Back</button>
        <div>
          {seriesSelection.map((series) => {
            return (
              <div key={series.id}>
                <h2>{series.series}</h2>
                <h4>{series.episode}</h4>
                <h4>{series.season}</h4>
                <h4>{series.platform}</h4>
                <h4>{series.genre}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(tvShowPage);
