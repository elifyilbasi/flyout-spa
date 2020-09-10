import React from "react";
import FilterCategory from "./FilterCategory";

const FILTERS = [
  {
    CategoryName: "Color",
    values: ["RED", "GREEN", "BLUE"],
  },
  {
    CategoryName: "Size",
    values: ["SMALL", "MEDIUM", "LARGE"],
  },
  {
    CategoryName: "Gender",
    values: ["WOMEN", "MEN"],
  },
];

export default function FilterGroupContainer() {
  return (
    <aside className="col-sm-4">
      <p>Filter Group</p>
      {FILTERS.map((filter) => {
        return <FilterCategory filterType={filter} />;
      })}
    </aside>
  );
}
