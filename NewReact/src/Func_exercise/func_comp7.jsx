

import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "changename":
      return { ...state, name: action.value };
    case "changeage":
      return { ...state, age: action.value };
    default:
      throw new Error("unhandled action type");
  }
}

function ReducerExample() {
  const [{ name, age }, dispatch] = useReducer(reducer, { name: "Default", age: 45 });

  return (
    <>
      <input
        value={name}
        onChange={(e) => dispatch({ type: "changename", value: e.target.value })}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => dispatch({ type: "changeage", value: e.target.value })}
      />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
}

export default ReducerExample;
