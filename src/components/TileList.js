import React, {useState} from "react";
import Tile from "./Tile";
import SortHogs from "./SortHogs"


function TileList({ hogs }) {
    const [showGreasedOnly, setShowGreasedOnly] = useState(false);
    const [sortCriteria, setSortCriteria] = useState(null);

    const toggleGreasedOnly = () => {
        setShowGreasedOnly(!showGreasedOnly);
    };

    const filteredHogs = showGreasedOnly ? hogs.filter((hog) => hog.greased === true) : hogs;

    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
      };

      const sortedHogs = () => {
        let sorted = [...filteredHogs];
        if (sortCriteria === "name") {
          sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortCriteria === "weight") {
          sorted = sorted.sort((a, b) => a.weight - b.weight);
        }
        return sorted;
      };

return (
  <main className="ui grid container">
  <SortHogs sortCriteria={sortCriteria} handleSortChange={handleSortChange} />
  <button onClick={toggleGreasedOnly}>
    {showGreasedOnly ? "Show All Hogs" : "Show Greased Hogs Only"}
  </button>
  {sortedHogs().map((hog) => (
    <Tile key={hog.name} hog={hog} />
  ))}
</main>
);
}

export default TileList;