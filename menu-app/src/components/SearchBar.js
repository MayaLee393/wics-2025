import React, { useState } from "react";
import menuData from "../menu-items.json";
import MenuItems from "./MenuItems.js"; // Import the corrected component

function SearchBar() {
  const [query, setQuery] = useState("");

  // Filter the data based on the search query
  const filteredData = menuData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          display: "flex",          // Enable flexbox
        flexDirection: "column",  // Stack items vertically
        alignItems: "center",     // Center items horizontally
          padding: "8px",
          margin: "0 auto",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "32px",
        }}
      />
      {/* Use the MenuItems component */}
      <div
        style={{
          display: "flex",         // Flex container for menu items
          textAlign: "center",    // Center items horizontally
          flexDirection: "column",  // Stack items vertically

        }}
      >
        {filteredData.map((item, index) => (
          <MenuItems
            key={index}
            name={item.name}
            meal_time={item.meal_time}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;