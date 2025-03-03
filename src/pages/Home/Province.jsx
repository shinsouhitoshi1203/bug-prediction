import { Autocomplete, TextField } from "@mui/material";
import useInput from "../../hooks/useInput";
import useStore from "../../store/useStore.cjs";
import list from "../../data/province";
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
	const disabled = useStore((state) => state.disabledInput);

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
				value={province || null}
				disabled={disabled}
				disablePortal
				options={list.sort((a, b) => -b.label.localeCompare(a.label))}
				renderInput={render}
			/>
		</>
	);
}
export default Province;
