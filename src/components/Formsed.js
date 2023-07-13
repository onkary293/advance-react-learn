import { React, useState } from "react";

function Formsed ()
{
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    alert("form Submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button disabled={!name} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default Formsed;
