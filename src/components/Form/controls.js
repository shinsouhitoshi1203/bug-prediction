import useStore from "../../store/useStore.cjs";

const form = {
	disable() {
		useStore.setState((state) => ({
			disabledInput: true
		}));
	},
	enable() {
		useStore.setState((state) => ({
			disabledInput: false
		}));
	}
};

export default form;
