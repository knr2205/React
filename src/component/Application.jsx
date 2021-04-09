import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieComponent from "./movie";

class AppComponent extends Component {
  state = {
    MovieGrid: getMovies(),
  };
  DeleteFun = (GetMovie) => {
    const FilterMovie = this.state.MovieGrid.filter((m) => m._id !== GetMovie);
    this.setState({ MovieGrid: FilterMovie });
  };
  StateChange = (GetState) => {
    const NewMovie = [...this.state.MovieGrid];
    const Index = NewMovie.indexOf(GetState);
    // const Index = NewMovie.indexOf(GetState);
    NewMovie[Index] = { ...NewMovie[Index] };
    NewMovie[Index].islike = !NewMovie[Index].islike;
    this.setState({ MovieGrid: NewMovie });
    console.log(GetState);
  };
  render() {
    return (
      <React.Fragment>
        <MovieComponent
          MovieProp={this.state.MovieGrid}
          OnDelete={this.DeleteFun}
          Onstate={this.StateChange}
        />
      </React.Fragment>
    );
  }
}

export default AppComponent;
