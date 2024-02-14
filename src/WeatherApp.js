import React from "react";
import PropTypes from "prop-types";
import Forecast from "./Forecast";

const citySearchEndpoint = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const forecastEndpoint = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';

export default class WeatherApp extends React.Component {
  static propTypes = {
    cityString: PropTypes.string,
    cities: PropTypes.array,
    forecast: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {cityString: '', cityKey: ''};
    this.handleChange = this.handleChange.bind(this);
    this.citySubmitClick = this.citySubmitClick.bind(this);
    this.forecastSubmitClick = this.forecastSubmitClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
 
  citySubmitClick() {
    fetch(citySearchEndpoint + '?' + new URLSearchParams({
        apikey: 'tqJu3kLI7pbXRMGwjbCDAd5igpazX6nz',
        q: this.state.cityString,
    }))     
    .then(response => response.json())
    .then(result => {this.cities = result})
    .then(result => {this.setState({'cityKey': this.cities[0].Key})})
    .catch(error => console.error(error));
  }
 
  forecastSubmitClick(e) {

    fetch(forecastEndpoint + this.state.cityKey + '?' + new URLSearchParams({
        apikey: 'tqJu3kLI7pbXRMGwjbCDAd5igpazX6nz',
        details: true,
     metric: true
    }))     
    .then(response => response.json())
    .then(result => {this.forecast = result})
    .then(result => {this.setState({'cityKey': this.state.cityKey})})
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <div className="accuweather-city-container">
          <div>
            <input className="city-text-input" 
            value={this.state.cityString} 
            name="cityString"
            type="text"  
            placeholder="Enter City"
            onChange={ this.handleChange } 
             />
            <input className="city-submit"  
            onClick={this.citySubmitClick} 
            type="button" 
            value="City Submit" 
            />
          </div>
          <div>
            <select className="city-dropdown"
            onChange={ this.handleChange }
            >
              {this.cities?.map( (e, key) => 
                <option value={e.Key} key={e.Key}>{e.LocalizedName}, {e.AdministrativeArea.LocalizedName}, {e.Country.LocalizedName}</option> )  } 
            </select>
            <input className="forecast-submit" 
            onClick={this.forecastSubmitClick} 
            name="forecast-submit" 
            type="button" 
            value="Forecast Submit" 
            />
          </div>
        </div>
        <Forecast 
        id="forecast"
        key={this.state.cityKey}
        name="forecast"
        forecast={this.forecast}
        />  
      </div>
    );
  }
}