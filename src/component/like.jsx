import React, { Component } from "react";

class Like extends Component {
  //   Badgeclasses = () => {
  //     let classList = "fa fa-heart";
  //     classList += this.props.liked === true ? " " : " -o";
  //     return classList;
  //   };

  render() {
    // let classList = ;
    // //console.log(this.props.liked);
    // if (!this.props.liked) {
    //   classList += "-o";
    // }
    // //console.log(classList);
    return (
      <i
        style={{ cursor: "pointer" }}
        className={this.props.liked ? "fa fa-heart" : "fa fa-heart-o"}
        aria-hidden="true"
        onClick={() => this.props.IsMovieLike(this.props.MovieArray)}
      ></i>
    );
  }
}

export default Like;
