import { useContext } from "react";
import { InputValueContext } from "./context/InputValueContext";

export default function App() {
  const { state, dispatch } = useContext(InputValueContext);

  return (
    <>
      <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
        SET VALUE TO 100
      </button>
    </>
  );
}
