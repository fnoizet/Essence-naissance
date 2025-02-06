import React from "react";
import "./DateInput.css";

export default function DateInput(props: {
  onUpdate: (value: string | null) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) {
      props.onUpdate(e.target.value);
    } else {
      props.onUpdate(null);
    }
  }

  return (
    <div>
      <label htmlFor="naiss">Date de naissance : </label>
      <input id="naiss" type="date" onChange={handleChange} />
    </div>
  );
}
