import useStore from "../useStore.cjs";

export default function subscribeStatus(setContent, options) {
	useStore.subscribe(
		(state) => state.status,
		(status) => {
			console.log(status);

			const { inDefault, isLoading } = status;
			if (!inDefault) {
				const { weather, prediction } = isLoading;
				if (!weather) {
					setContent(<Loading />);
				} else {
					if (weather && !prediction) {
						setContent(<Success />);
					} else {
						// set nothing
					}
				}
			} else {
				// error handling or in default?
				const { isError } = status;
				if (isError) {
					setContent(<h1>{isError}</h1>);
				} else {
					setContent(<></>);
				}
			}
		},
		options
	);
}
