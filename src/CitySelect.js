import React from "react";
import PropTypes from "prop-types";

export default class CitySelect extends React.Component {
  static propTypes = {
    cities: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.cities = [];
  }


  render() {

    return (
        <div>
            <select className="city-dropdown">{
                this.props.cities.map( (e, key) => 
                <option value={e.key}>{e.LocalizedName}, {e.AdministrativeArea.LocalizedName}, {e.Country.LocalizedName}</option> )  } 
            </select>
        </div>
    );
  }
}