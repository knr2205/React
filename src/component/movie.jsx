import React, { Component } from "react";
import Like from "./like";

class MovieComponent extends Component {
  render() {
    // ClassChange = () => {
    //   let ClassList = "fa fa-heart";
    //   ClassList += this.props.MovieProp[0].islike ? " " : "-o";
    //   return ClassList;
    // };
    return (
      <div className="main">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.props.MovieProp.map((movie) => (
              <tr key={movie._id}>
                <th scope="row">{movie.genre.name}</th>
                <td>{movie.title}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>{movie.numberInStock}</td>
                <td>
                  <Like
                    liked={movie.islike}
                    MovieArray={movie}
                    IsMovieLike={this.props.Onstate}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.OnDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieComponent;
