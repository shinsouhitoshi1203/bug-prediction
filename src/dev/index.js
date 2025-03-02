// sample: http://api.weatherstack.com/current?access_key&query=Jakarta

const API = import.meta?.env?.VITE_WEATHER_API;
const root = "http://api.weatherstack.com/current";

async function getWeather(provinceCode) {
	try {
		const req = await fetch(
			`${root}?access_key=${API}&query=${provinceCode}`
		);
		const res = await req.json();
		return res;
	} catch (error) {
		throw new Error(error);
	}
}

export { getWeather };
