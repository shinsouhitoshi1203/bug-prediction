import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
const useStore = create(
	subscribeWithSelector((set, get) => {
		return {
			disabledInput: false,
			status: {
				error: "",
				inDefault: true,
				isLoading: { weather: false, prediction: false }
			},
			savePrevious: true,
			previous: {
				province: ""
			},
			cache: {
				weather: {},
				prediction: {}
			}
		};
	})
);

export default useStore;
