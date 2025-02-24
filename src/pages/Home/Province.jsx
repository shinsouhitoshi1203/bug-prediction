import { Autocomplete, TextField } from "@mui/material";
import useInput from "../../hooks/useInput";
const list = [
	// use the Data from JSON list
	{ label: "An Giang" },
	{ label: "Bạc Liêu" },
	{ label: "Bến Tre" },
	{ label: "Cà Mau" },
	{ label: "Long An" },
	{ label: "Tiền Giang" },
	{ label: "Trà Vinh" },
	{ label: "Vĩnh Long" },
	{ label: "Đồng Tháp" },
	{ label: "Hậu Giang" },
	{ label: "Kiên Giang" },
	{ label: "Sóc Trăng" },
	{ label: "Cần Thơ" }
];
const render = (params) => {
	return (
		<TextField
			{...params}
			label="Tỉnh / Thành phố"
			slotProps={{
				inputLabel: {
					sx: {
						fontFamily: "var(--font-sans)",
						fontSize: 20
					}
				}
			}}
		/>
	);
};
function Province() {
	const { province, handleSelectProvince } = useInput();
	return (
		<>
			<Autocomplete
				slotProps={{
					paper: {
						sx: {
							fontFamily: "var(--font-sans)",
							fontSize: 16
						}
					}
				}}
				classes={{
					input: "font-sans text-[20px]",
					inputRoot: "font-sans"
				}}
				onChange={handleSelectProvince}
				value={province}
				disablePortal
				options={list.sort((a, b) => -b.label.localeCompare(a.label))}
				renderInput={render}
			/>
		</>
	);
}
export default Province;
