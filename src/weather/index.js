import form from "../components/Form/controls";
import { getWeather } from "./api";
import store from "../store/controls";

function filter(jsonData, rest) {
	const getTime = (time) => {
		// day or night
		const hour = time.split(":")[0];
		const r = time.split(" ")[1];
		return "day";
	};
	const { province, date } = rest;

	const month = date.split("-")[1];
	const season = month >= 5 && month <= 10 ? "Mùa mưa" : "Mùa khô";

	const { current } = jsonData;
	const { observation_time, temperature, weather_descriptions, humidity } =
		current;
	const weather_icon = current.weather_icons[0];

	const time = getTime(observation_time);

	return {
		city: province,
		weather: {
			description: weather_descriptions,
			img: weather_icon,
			temperature,
			humidity
		},
		data: {
			date,
			season,
			time,
			location: "Đồng bằng sông Cửu Long",
			riceSeason: "",
			riceStage: ""
		}
	};
}

async function sendWeatherRequest(data) {
	// province, date, remember,
	const { provinceCode, remember, ...rest } = data;
	function prepare() {
		store.loading();
		form.disable();
	}
	function stop() {
		store.setBack(true);
		form.enable();
	}
	// prepare data;
	prepare();
	getWeather(provinceCode)
		.then((res) => {
			// handle response
			const newData = filter(res, rest);
			console.log("JSON: ", JSON.stringify(newData, null, ""));
			return newData;
		})
		.then((data) => {
			store.render.weather(data);
			// send to gemini
		})
		.catch((error) => {
			store.error.new(error);
			stop();
		});
}

export default sendWeatherRequest;
