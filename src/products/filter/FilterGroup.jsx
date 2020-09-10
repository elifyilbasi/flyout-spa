import React from "react";
import FilterCategoryContainer from "./FilterCategoryContainer";

const FILTERS = [
  {
    categoryName: "color",
    displayName: "Colors",
    values: ["RED", "GREEN", "BLUE"],
  },
  {
    categoryName: "size",
    displayName: "Sizes",
    values: ["SMALL", "MEDIUM", "LARGE"],
  },
  {
    categoryName: "gender",
    displayName: "Genders",
    values: ["WOMEN", "MEN"],
  },
];

export default function FilterGroup({ resetFilters }) {
  return (
    <aside className="col-sm-4">
      <p>Filter Group</p>
      <button
        onClick={() => resetFilters()}
        type="button"
        className="btn btn-lg btn-block btn-outline-primary"
      >
        Reset Filters
      </button>
      {FILTERS.map((filter) => {
        return (
          <FilterCategoryContainer
            filterType={filter}
            key={filter.categoryName}
          />
        );
      })}
    </aside>
  );
}
