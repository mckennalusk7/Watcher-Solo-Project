import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import top10 from "../../Posters/top10.jpg";

class SearchPage extends Component {
  state = {
    genres: "",
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <div className="top10">
          <img src={top10} alt="top10" />
        </div>
        <div></div>
        <h2> TV Series Search </h2>
        <div>
          <input type="text" onChange={this.onInputChange("genres")}></input>
          <button onClick={this.onSearchClick}> Next </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchPage);
