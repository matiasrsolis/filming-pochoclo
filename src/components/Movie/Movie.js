import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {


    componentDidMount() {
        const { match: { params: { id }}} = this.props;
        this.props.getMovieDetail(id)
    }


    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.movies.Title}</h1>
                <h3>{this.props.movies.Year}</h3>
                <img src={this.props.movies.Poster}></img>
                <p>{this.props.movies.Genre}</p>
                <p>{this.props.movies.Plot}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id))
    };
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);