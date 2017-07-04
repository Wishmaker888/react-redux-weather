import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		// const lat = cityData.city.coord.lat;
		// const lon = cityData.city.coord.lan;
		const { lat, lon } = cityData.city.coord;  //Identical. ES6 feature

		return(
			<tr key={ name }>
				<td>
					<GoogleMap lat={lat} lon={lon} />
				</td>
				<td>
					<Chart data={temps} color="green" />
				</td>
				<td>
					<Chart data={pressures} color="orange" />
				</td>
				<td>
					<Chart data={humidities} color="blue" />
				</td>
			</tr>
		)
	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

// function mapStateToProps(state) {
// 	return {weather: state.weather};
// }
function mapStateToProps({ weather }) {   // Identical, ES6 feature
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);