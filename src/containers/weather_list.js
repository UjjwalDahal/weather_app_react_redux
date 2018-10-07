import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/gmap';

class WeatherList extends Component {
  renderWeather = cityData => {
    const { name } = cityData.location;
    const { forecastday } = cityData.forecast;
    const temps = forecastday.map(weather => weather.day.maxtemp_c);
    const wind = forecastday.map(weather => weather.day.maxwind_mph);
    const humidity = forecastday.map(weather => weather.day.avghumidity);
    const icon = forecastday.map(weather => weather.day.condition.icon);
    const { lon, lat } = cityData.location;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="°C" />
        </td>
        <td>
          <Chart data={wind} color="blue" units="mph" />
        </td>

        <td>
          <Chart data={humidity} color="gold" units="%" />
        </td>

        <td>
          <img src={icon[0]} alt="" />
        </td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Wind (mph)</th>
            <th>Humidity (%)</th>
            <th>Icon</th>
          </tr>
        </thead>

        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

export default connect(mapStateToProps)(WeatherList);
