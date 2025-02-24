import { create } from "zustand";
const useStore = create((set, get) => {
	return {
		savePrevious: true,
		previous: {
			province: ""
		},
		status: "success"
	};
});

export default useStore;
