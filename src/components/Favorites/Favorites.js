import React, { Component } from "react";
import { connect } from "react-redux";
// import { removeArticle } from "../../actions/index";
// import { NavLink } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions/index.js";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
           this.props.movies && this.props.movies.map((el, i) => (
             <div key = {i}>
              <h3>{el.title}</h3>
              <button onClick={() => this.props.removeMovieFavorite({title: el.title, id: el.imdbID})}> X</button>
             </div>
           ))
         }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
