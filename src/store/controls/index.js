import useStore from "../useStore.cjs";

const store = {
	has: {
		get previous() {
			return useStore.getState().hasPreviousData;
		},
		get data() {
			const { weather, prediction } = useStore.getState().cache;
			return (
				Object.keys(weather).length > 0 ||
				Object.keys(prediction).length > 0
			);
		}
	},
	setBack(keepError = false) {
		useStore.setState((state) => ({
			status: {
				error: keepError ? state.status.error : "",
				inDefault: !this.has.data,
				isLoading: { weather: false, prediction: false }
			}
		}));
	},
	loading(item) {
		switch (item) {
			case "weather":
				useStore.setState((state) => ({
					status: {
						...state.status,
						inDefault: false,
						isLoading: { weather: true, prediction: false }
					}
				}));
				break;
			case "prediction":
				useStore.setState((state) => ({
					status: {
						...state.status,
						isLoading: { weather: false, prediction: true }
					}
				}));
				break;
		}
	},
	error: {
		new(error) {
			useStore.setState((state) => ({
				status: {
					...state.status,
					error: error.message
				}
			}));
		}
	},
	previous: {
		remove() {
			useStore.setState((state) => ({
				hasPreviousData: false
			}));
		},
		save() {
			if (!store.has.data) return;
			useStore.setState((state) => ({
				hasPreviousData: true
			}));
		}
	},
	render: {
		weather(retrievedData) {
			useStore.setState((state) => ({
				status: {
					error: "",
					isLoading: { weather: false, prediction: true }
				},
				cache: {
					...state.cache,
					weather: retrievedData
				}
			}));
		},
		prediction(data) {
			useStore.setState((state) => ({
				status: {
					error: "",
					isLoading: { weather: false, prediction: false }
				},
				cache: {
					...state.cache,
					prediction: data
				}
			}));
		}
	},
	get: {
		get prediction() {
			return useStore.getState().cache.prediction;
		}
	}
};

export default store;
