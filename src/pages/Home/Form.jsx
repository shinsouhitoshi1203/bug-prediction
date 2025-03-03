import { createContext, memo, useCallback, useRef, useState } from "react";
import Province from "./Province";
import Day from "./Day";
import { Button, Checkbox, FormControl, FormControlLabel } from "@mui/material";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import sendWeatherRequest from "../../weather";
import useStore from "../../store/useStore.cjs";
import store from "../../store/controls";

export const InputProvider = createContext();
function Form() {
	const disabled = useStore((state) => state.disabledInput);
	const date = useRef(new Date().toISOString().split("T")[0]);
	const [province, setProvince] = useState(() => {
		if (localStorage.getItem("bug-predict/remember")) {
			return {
				label: localStorage.getItem("bug-predict/province"),
				value: localStorage.getItem("bug-predict/provinceCode")
			};
		} else {
			return;
		}
	});
	const [remember, setRemember] = useState(true);

	const handleSelectProvince = useCallback((event, newValue) => {
		setProvince(newValue);
	}, []);

	const handleRemember = useCallback((event, newValue) => {
		setRemember(newValue);
	}, []);

	const navigate = useNavigate();

	const submit = useCallback(() => {
		const tinh = province?.label;
		const ngay = date.current;
		const ghinho = remember;
		const matinh = province?.value;

		if (!tinh || !ngay) return;

		// process
		const data = {
			province: tinh,
			date: ngay,
			remember: ghinho,
			provinceCode: matinh
		};

		sendWeatherRequest(data);
	}, [province, remember]);

	const goHelp = useCallback(() => {
		store.previous.save();
		navigate("/help");
	}, []);

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
							disabled={disabled}
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
								onClick={goHelp}
							>
								Trợ giúp
							</Button>
							<Button
								disabled={disabled}
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
export default memo(Form);
