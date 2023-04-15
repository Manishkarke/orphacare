import { useEffect, useState } from "react";
import "./SearchBox.css"

function SearchBox({ onSearch, searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <div className="searchbox">
      <input
        type="text"
        name="searchbox"
        id="searchbox"
        placeholder={`Search ${searchFor}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
