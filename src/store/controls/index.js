import useStore from "../useStore.cjs";

const store = {
	has: {
		get data() {
			const { weather, prediction } = useStore.getState().cache;
			console.log(weather, prediction);

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
	loading() {
		useStore.setState((state) => ({
			status: {
				error: "",
				inDefault: false,
				isLoading: { weather: true, prediction: false }
			}
		}));
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
		}
	}
};

export default store;
