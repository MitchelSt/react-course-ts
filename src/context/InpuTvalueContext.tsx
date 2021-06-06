import { createContext, useReducer } from "react";

const initialState = {
  inputValue: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: payload,
      };
    case "SET_INPUT_VALUE_TO_100":
      return {
        ...state,
        inputValue: 100,
      };
    default:
      return state;
  }
};

const InputValueContext = createContext(initialState);

function InputValueProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {props.children}
    </InputValueContext.Provider>
  );
}

export { InputValueContext, InputValueProvider };
