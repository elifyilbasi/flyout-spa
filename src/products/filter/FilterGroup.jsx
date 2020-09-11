import React from "react";
import FilterCategoryContainer from "./FilterCategoryContainer";
import "./filterGroup.css";

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
    <aside className="col-sm-2 m-2">
      <div className="row filterGroupWrapper">
        <p>Filter Group</p>
        <button
          onClick={() => resetFilters()}
          type="button"
          className="btn btn-outline-primary"
        >
          Reset Filters
        </button>
      </div>
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
