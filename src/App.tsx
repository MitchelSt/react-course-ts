import { useContext } from "react";
import { InputValueContext } from "./context/CountContext";

export default function App() {
  const { state, dispatch } = useContext(InputValueContext);

  console.log(state);
  console.log(dispatch);

  return <></>;
}
