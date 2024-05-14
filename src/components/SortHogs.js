import React from "react";

function SortHogs({ sortCriteria, handleSortChange }) {
  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortCriteria} onChange={handleSortChange}>
        <option value="">--Select--</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default SortHogs;