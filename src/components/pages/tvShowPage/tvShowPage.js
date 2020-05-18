import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class tvShowPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_TVSERIES" });
  }

  render() {
    //    get series Id
    const id = Number(this.props.match.params.id);

    //   select series
    const seriesSelection = this.props.store.tvShowReducer.filter(
      (tvShowReducer) => {
        return tvShowReducer.id === id;
      }
    );

    return (
      <div>
        <button onClick={this.handleBackButton}>Back</button>
        <div>
          {seriesSelection.map((current) => {
            return (
              <div key={current.id}>
                <h2>{current.episode}</h2>
                <h4>{current.series}</h4>
                <h5>{current.poster}</h5>
                <h5>{current.details}</h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(tvShowPage);
