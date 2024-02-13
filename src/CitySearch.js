import React from "react";
import PropTypes from "prop-types";
import CitySelect from "./CitySelect";

export default class CitySearch extends React.Component {
  static propTypes = {
    cityString: PropTypes.string,
    cities: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {cityString: '', cities: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.cities = [];
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
 
  handleClick() {
    fetch('http://dataservice.accuweather.com/locations/v1/cities/search?' + new URLSearchParams({
        apikey: 'tqJu3kLI7pbXRMGwjbCDAd5igpazX6nz',
        q: this.state.cityString,
    }))     
    .then(response => response.json())
    .then(result => {this.cities = result})
    .then(result => {this.setState({cities: ''})})
    .catch(error => console.error(error));
  }

  render() {
    return (
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
            onClick={this.handleClick} 
            type="button" 
            value="City Submit" />
          </div>
          <div>
            <CitySelect id="citySelect" cities={this.cities} key={this.cityString} />
            <input className="forecast-submit" 
            name="forecast-submit" 
            type="button" 
            value="Forecast Submit" />
          </div>
        </div>
    );
  }
}