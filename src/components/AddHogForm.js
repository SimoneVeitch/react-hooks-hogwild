import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newHog = {
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      "highest medal achieved": medal,
    };
    onAddHog(newHog);
    setName("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setMedal("");
  };

  return (
    <form class="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="specialty">Specialty:</label>
      <input
        type="text"
        id="specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        required
      />

      <label htmlFor="weight">Weight:</label>
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />

<label htmlFor="greased">Greased:</label>
      <select id="greased" value={greased ? "yes" : "no"} onChange={(e) => setGreased(e.target.value === "yes")}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label htmlFor="medal">Highest Medal Achieved:</label>
      <input
        type="text"
        id="medal"
        value={medal}
        onChange={(e) => setMedal(e.target.value)}
        required
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;