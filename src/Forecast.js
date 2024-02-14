import React from "react";
import PropTypes from "prop-types";
import ForecastRow from "./ForecastRow";

export default class Forecast extends React.Component {
  static propTypes = {
    forecast: PropTypes.object
  };

  render() {

    const dateRange = getDateRangefromForecast(this.props.forecast);
    const summary = this.props.forecast?.Headline?.Text
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
        { this.props.forecast?.DailyForecasts?.map(dailyForecast => (
          <ForecastRow
            date={dailyForecast.Date}
            dayIcon={dailyForecast.Day.Icon}
            tempHigh={Math.round(dailyForecast.Temperature.Maximum.Value)}
            tempLow={Math.round(dailyForecast.Temperature.Minimum.Value)}
            precipitation={dailyForecast.Day.PrecipitationProbability}
            forecastSummary={dailyForecast.Day.LongPhrase}
            realFeel={Math.round(dailyForecast.RealFeelTemperature.Maximum.Value)}
            uvIndex={dailyForecast.AirAndPollen.find(item => item.Name === 'UVIndex').Value}
            uvCategory={dailyForecast.AirAndPollen.find(item => item.Name === 'UVIndex').Category}
            realFeelShade={Math.round(dailyForecast.RealFeelTemperatureShade.Maximum.Value)}
            windDirection={dailyForecast.Day.Wind.Direction.Localized}
            windSpeed={Math.round(dailyForecast.Day.Wind.Speed.Value)}
            windUnits={dailyForecast.Day.Wind.Speed.Unit}
          />
        ))}
      </div>
    );
  }
}

function getMonthName(date) {

  date = new Date(date);

	const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"];

	return monthNames[date.getMonth()];

}

function getDateRangefromForecast(forecast) {

  if (!forecast?.DailyForecasts) return '';
  //add date range and summary text to page
  var startDate = new Date(forecast.DailyForecasts[0].Date);
  var endDate = new Date(forecast.DailyForecasts[forecast.DailyForecasts.length - 1].Date);

  var dateRange = startDate.getUTCDate() + ' ' + getMonthName(startDate);
  dateRange += ' to ' + endDate.getUTCDate() + ' ' + getMonthName(endDate);

  return dateRange;

}