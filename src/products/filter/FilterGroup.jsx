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

export default function FilterGroup({
  resetFilters,
  hideLoading,
  showLoading,
}) {
  const onResetFilter = () => {
    showLoading();
    resetFilters();
    setTimeout(() => {
      hideLoading();
    }, 500);
  };

  return (
    <aside className="col-sm-2 m-2">
      <div className="filter-group-wrapper">
        <p>Filter Group</p>
        <button
          onClick={() => onResetFilter()}
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
