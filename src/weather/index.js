import form from "../components/Form/controls";
import { getWeather } from "./api";
import store from "../store/controls";
import run from "../predict";

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
			riceSeason: "Đông Xuân",
			riceStage: "Đẻ nhánh"
			// Tạm thời set cứng, sau này sẽ thay đổi
		}
	};
}
function renderRequest(jsData) {
	const jsonData =
		"input: ```json\n" + JSON.stringify(jsData, null, "") + "```";
	return jsonData;
}

function renderResultPrediction(jsonData) {
	const { detailed_list, issue_list } = jsonData;
	const full = detailed_list.map((item) => {
		const { issue_name, issue_type, issue_description, suggestions } = item;
		return {
			name: issue_name,
			type: issue_type,
			description: issue_description,
			suggestion: suggestions
		};
	});
	const shorten = issue_list.map((item) => {
		const { issue_name, issue_type } = item;
		return {
			name: issue_name,
			type: issue_type
		};
	});
	return {
		pest_list: shorten,
		list: full
	};
}
async function sendWeatherRequest(data) {
	// province, date, remember,
	const { provinceCode, remember, ...rest } = data;
	function prepare() {
		store.loading("weather");
		form.disable();
		store.previous.remove();
	}
	function stop() {
		store.setBack(true);
		form.enable();
	}
	function waitPrediction() {
		store.loading("prediction");
	}
	// prepare data;
	prepare();
	// SAVE TO storage?
	if (remember) {
		localStorage.setItem("bug-predict/provinceCode", provinceCode);
		localStorage.setItem("bug-predict/province", rest.province);
		localStorage.setItem("bug-predict/checked", true);
	} else {
		localStorage.removeItem("bug-predict/province");
		localStorage.removeItem("bug-predict/checked");
		localStorage.removeItem("bug-predict/provinceCode");
	}

	// send request;
	getWeather(provinceCode)
		.then((res) => {
			// handle response
			const newData = filter(res, rest);
			return newData;
		})
		.then(async (data) => {
			let geminiResult;
			store.render.weather(data);
			waitPrediction();
			const geminiRequest = renderRequest(data);
			// send to gemini
			try {
				geminiResult = await run(geminiRequest);
				return JSON.parse(geminiResult);
			} catch (error) {
				throw new Error("PREDICT_ERROR");
			}
		})
		.then((geminiResult) => {
			// mapp the prediction before pushing to store
			const newData = renderResultPrediction(geminiResult);
			store.render.prediction(newData);
		})
		.catch((error) => {
			store.error.new(error);
			stop();
		})
		.finally(() => {
			stop();
		});
}

export default sendWeatherRequest;
