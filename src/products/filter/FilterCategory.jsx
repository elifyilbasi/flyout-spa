import React from "react";
import FilterCategoryItem from "./filterCategoryItem/FilterCategoryItem";

export default function FilterCategory({
  filterType,
  updateFilter,
  selectedFilters,
}) {
  console.log(selectedFilters);
  const filters = selectedFilters[filterType.categoryName];

  const onItemCheckChange = (changedItemName, newValue) => {
    const shouldAdd = !!newValue;
    const newValues = [...filters];

    if (shouldAdd) {
      newValues.push(changedItemName);
    } else {
      newValues.splice(newValues.indexOf(changedItemName), 1);
    }

    updateFilter(filterType.categoryName, newValues);
  };

  return (
    <div className="card">
      <div className="card-group-item">
        <div className="card-header">
          <h6 className="title">{filterType.displayName} </h6>
        </div>
        <div className="filter-content">
          <div className="card-body">
            {filterType.values.map((filterItem) => {
              return (
                <FilterCategoryItem
                  checked={filters.includes(filterItem)}
                  onCheckedChange={onItemCheckChange}
                  itemName={filterItem}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
