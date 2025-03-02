import { sampleData } from "../../../json/bugs";
import { dataSample } from "../../../json/weather";
import Prediction from "../../layouts/Prediction";
import Weather from "../../layouts/Weather";
import useStore from "../../store/useStore.cjs";
const day_of_week = [
	"Chủ Nhật",
	"Thứ Hai",
	"Thứ Ba",
	"Thứ Tư",
	"Thứ Năm",
	"Thứ Sáu",
	"Thứ Bảy"
];

const day = `Hôm nay là ${day_of_week[new Date().getDay()]}, ngày
${new Date().getDate()} tháng ${new Date().getMonth() + 1} năm
${new Date().getFullYear()}`;

function Success({ previousData = false }) {
	const weather = useStore((state) => state.cache.weather);

	return (
		<>
			<p className="dt font-medium my-4">{day}</p>
			<div className="flex flex-col-reverse sm:flex-row gap-4 lg:gap-[24px]">
				<div className="w-full lg:w-1/2 xl:w-1/3">
					<Weather data={weather} />
				</div>
				<div className="w-full lg:w-1/2 xl:w-2/3">
					{previousData ? (
						<Prediction data={sampleData} />
					) : (
						<Prediction />
					)}
				</div>
			</div>
		</>
	);
}
export default Success;
