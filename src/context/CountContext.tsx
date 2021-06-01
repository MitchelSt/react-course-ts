import React, { createContext, useReducer } from "react";

type AppState = typeof initialState;
type Action =
  | { type: "SET_INPUT_VALUE"; payload: number }
  | { type: "SET_INPUT_VALUE_TO_100"; payload: number };

interface InputProviderProps {
  children: React.ReactNode;
}

const initialState = {
  inputValue: 0,
};

const reducer = (state: AppState, action: Action) => {
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

const InputValueContext = createContext({
  get state(): { inputValue: number } {
    throw new Error("Some error message");
  },
  get dispatch(): React.Dispatch<Action> {
    throw new Error("Some error message");
  },
});

function InputValueProvider({ children }: InputProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {children}
    </InputValueContext.Provider>
  );
}

export { InputValueContext, InputValueProvider };
