import { useState } from "react";

export const TestStatePass = () => {
  const [stateFoo, setStateFoo] = useState("foo");
  const [stateBar, setStateBar] = useState(stateFoo);

  return (
    <div>
      <p>State Foo: {stateFoo}</p>
      <p>State Bar: {stateBar}</p>
      <button onClick={() => setStateFoo("Foo changed")}>Change Foo</button>
    </div>
  );
};
