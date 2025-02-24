const humidityStyle = (humidity) => {
	if (humidity > 90) return "bg-red-400";
	if (humidity > 60) return "bg-yellow-400";
	if (humidity > 30) return "bg-green-400";
	return "bg-blue-400";
};
const humidityRate = (humidity) => {
	if (humidity > 90) return "rất cao";
	if (humidity > 60) return "cao";
	if (humidity > 30) return "vừa phải";
	return "thấp";
};
const descriptionColor = (i) => {
	if (i >= 5) return "bg-blue-500";
	return [
		"bg-blue-100",
		"bg-blue-200",
		"bg-blue-300",
		"bg-blue-400",
		"bg-blue-500"
	][i];
};
function Weather({ data }) {
	const city = data?.city;
	const weather = data?.weather;
	return (
		<>
			<h2 className="font-subheading">{city}</h2>
			<div className="weather-info flex gap-4 items-start my-2 md:my-8 ">
				<img src={weather?.img} alt={weather?.description.join(", ")} />
				<div className="temperature flex items-start gap-2 flex-wrap">
					<strong className="text-[36px]/[1] lg:text-[64px]/[1]">
						{weather?.temperature}°
					</strong>
					<span
						className={`rounded-full px-4 ${humidityStyle(
							weather?.humidity
						)} inline-block`}
					>
						Ẩm {humidityRate(weather?.humidity)}
					</span>
				</div>
			</div>
			<p className="description flex items-center gap-2 flex-wrap  my-4 md:my-0">
				{weather?.description?.map((des, index) => (
					<span
						className={`rounded-full px-4 ${descriptionColor(
							index
						)}`}
						key={index}
					>
						{des}
					</span>
				))}
			</p>
		</>
	);
}
export default Weather;
