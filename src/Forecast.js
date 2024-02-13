import React, { PureComponent } from "react";

import ForecastRow from "./ForecastRow";

export default class Forecast extends PureComponent {
  static propTypes = {
    cityId: propTypes.number,
    summary: propTypes.string,
    dateRange: propTypes.string,
    forecastData: PropTypes.array
  };

  render() {
    return (
        
      <div className="output-container">

		<div className="output-title-container">
			<div className="summary">
                {summary}
			</div>
			<div className="date-range">
                {dateRange}
			</div>
		</div>
        {this.props.forecastData.map(forecastData => (
          <ForecastRow
            title={forecastData.title}
            date={forecastData.date}
            dayIcon={forecastData.dayIcon}
            tempHigh={forecastData.tempHigh}
            tempLow={forecastData.tempLow}
            forecastSummary={forecastData.forecastSummary}
            realFeel={forecastData.realFeel}
            uvIndex={forecastData.uvIndex}
            uvCategory={forecastData.uvCategory}
            realFeelShade={forecastData.realFeelShade}
            windDirection={forecastData.windDirection}
            windSpeed={forecastData.windSpeed}
            windUnits={forecastData.windUnits}
          />
        ))}
      </div>
    );
  }
}