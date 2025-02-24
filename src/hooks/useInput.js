import { useContext } from "react";
import { InputProvider } from "../pages/Home/Form";

function useInput() {
	return useContext(InputProvider);
}

export default useInput;
