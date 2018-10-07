import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // fetch weather data

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            placeholder="Get a forecast of your favourite cities"
            type="text"
            className="form-control"
            name="term"
            value={this.state.term}
          />

          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
