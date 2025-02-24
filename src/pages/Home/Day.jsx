import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import useInput from "../../hooks/useInput";
import "dayjs/locale/vi";

function Day() {
	const { date, setDate } = useInput();
	return (
		<>
			<LocalizationProvider
				dateAdapter={AdapterDayjs}
				adapterLocale="vi"
				sx={{ width: "100%" }}
			>
				<DatePicker
					slotProps={{
						field: {
							sx: {
								width: "100%",
								height: "100%"
							},
							inputProps: {
								sx: {
									fontFamily: "Inter Tight, sans-serif",
									fontSize: 20
								}
							}
						}
					}}
					onChange={(event) => {
						const newValue = event.format();
						setDate(newValue);
					}}
					format="DD/MM/YYYY"
					value={dayjs(date)}
					minDate={dayjs().subtract(30, "days")}
					maxDate={dayjs().add(14, "days")}
				/>
			</LocalizationProvider>
		</>
	);
}
export default Day;
