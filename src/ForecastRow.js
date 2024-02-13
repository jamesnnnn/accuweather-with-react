import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ForecastRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    dayIcon: PropTypes.string,
    tempHigh: PropTypes.string,
    tempLow: PropTypes.string,
    forecastSummary: PropTypes.string,
    realFeel: PropTypes.string,
    uvIndex: PropTypes.string,
    uvCategory: PropTypes.string,
    realFeelShade: PropTypes.string,
    windDirection: PropTypes.string,
    windSpeed: PropTypes.string,
    windUnits: PropTypes.string
  };

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div className="forecast-day-item clone">
			<div className="forecast-day-row">
				<div>
					<div className="forecast-day-date">
						<span className="dow date">{dowDate}</span>
						<span className="sub date">{subDate}]</span>
					</div>
					<div className="forecast-day-icon">
						<img className="icon" width="128" height="128" src={src} />
					</div>
					<div className="forecast-day-temp">
						<span className="high">{tempHigh}°</span>
						<span className="low">/{tempLow}°</span>
					</div>
				</div>				
				<div className="forecast-day-precipitation">
					<svg className="precip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path fill="none" fill-rule="nonzero" stroke="#878787" stroke-width=".714" d="M5.532.891c1.723.952 5.315 5.477 5.775 8.756.028 1.718-.534 3.101-1.45 4.082C8.888 14.766 7.52 15.357 6 15.357a5.532 5.532 0 0 1-3.74-1.425c-.975-.89-1.587-2.124-1.616-3.49.503-4.035 4.013-8.49 4.888-9.551Zm-1.815 7.33a.336.336 0 0 0-.025.043c-.322.62-.59 1.255-.695 2.207.012.408.143.787.358 1.111.234.352.568.641.96.839.035.017.071.021.106.017a.201.201 0 0 0 .104-.044l.01-.005-.078-.1c-.328-.415-.82-1.067-.82-1.946 0-.752.076-1.613.08-2.121Z"></path></svg>
					<span className="value"></span>

				</div>
			</div>
			<div className="forecast-day-row">
				<div className="forecast-day-summary">{forecastSummary}</div>
			</div>
			<div className="forecast-day-row">
				<div className="forecast-day-realfeel">
					RealFeel® <span className="value">{realFeel}°</span>
				</div>
				<div className="forecast-day-uvindex">
					Max UV Index <span className="value">{uvIndex} {uvCategory}</span>
				</div>
			</div>
			<div className="forecast-day-row">
				<div className="forecast-day-realfeel-shade">
					RealFeel Shade™ <span className="value">{realFeelShade}°</span>
				</div>
				<div className="forecast-day-wind">
					Wind <span className="value">{windDirection} {windSpeed}{windUnits}</span>
				</div>
			</div>
		</div>
    );
  }
}
