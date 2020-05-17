import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class WatchingList extends Component {
  render() {
    return (
      <div>
        <div className="watching_posterImage">
          <img src={this.props.watching.poster} />
        </div>
        <div className="container">
          <div className="watching_episode">
            <h2> {this.props.watching.series}</h2>
          </div>
        </div>
        <div key={this.props.series.id}>
          <div>
            <h4> Episode: {this.props.watching.episode}</h4>
          </div>
          <div>
            <h4>Season: {this.props.watching.season}</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(WatchingList);
