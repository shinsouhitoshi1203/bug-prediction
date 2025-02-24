import { createContext, useCallback, useState } from "react";
import Province from "./Province";
import Day from "./Day";
import { Button, Checkbox, FormControl, FormControlLabel } from "@mui/material";
import dayjs from "dayjs";

export const InputProvider = createContext();
function Form() {
	const [province, setProvince] = useState(null);
	const [date, setDate] = useState(new Date().toISOString());
	const [remember, setRemember] = useState(true);
	const handleSelectProvince = useCallback((event, newValue) => {
		setProvince(newValue);
	}, []);
	const handleRemember = useCallback((event, newValue) => {
		setRemember(newValue);
	}, []);

	const getToday = useCallback(() => {
		setDate(new Date().toISOString());
	}, []);
	const submit = useCallback(() => {
		const tinh = province?.label;
		const ngay = date;
		const ghinho = remember;
		if (!tinh || !ngay) return;
		console.log({ province: tinh, date: ngay, remember: ghinho });
	}, [province, date, remember]);
	return (
		<InputProvider.Provider value={{ province, handleSelectProvince }}>
			<div className="form-weather p-6 rounded-sm shadow-[3px_3px_0_0] shadow-text/40 bg-white max-w-[550px] mx-auto">
				<FormControl className="form-real grid gap-4">
					<div className="form-field grid gap-4 grid-cols-1">
						<div className="select form-province w-full">
							<Province />
						</div>
					</div>
					<div className="form-options flex flex-col md:flex-row flex-wrap items-center justify-between gap-3 ">
						<FormControlLabel
							control={<Checkbox />}
							label="Tự động nhớ vào lần sau"
							classes={{ label: "font-sans" }}
							checked={remember}
							onChange={handleRemember}
						/>
						<div className="options flex gap-2">
							<Button
								variant="outlined"
								classes={{ root: "font-sans" }}
							>
								Trợ giúp
							</Button>
							<Button
								variant="contained"
								classes={{ root: "font-sans" }}
								onClick={submit}
							>
								Xem dự báo
							</Button>
						</div>
					</div>
				</FormControl>
			</div>
		</InputProvider.Provider>
	);
}
export default Form;
