import React, { useMemo } from "react";
import FilterCategoryItem from "./filterCategoryItem/FilterCategoryItem";
import "./filterCategory.css";

export default function FilterCategory({
  filterType,
  updateFilter,
  selectedFilters,
  showLoading,
  hideLoading,
}) {
  const filters = useMemo(() => selectedFilters[filterType.categoryName], [
    selectedFilters,
    filterType,
  ]);

  const onItemCheckChange = (changedItemName, newValue) => {
    showLoading();
    const shouldAdd = !!newValue;
    const newValues = [...filters];

    if (shouldAdd) {
      newValues.push(changedItemName);
    } else {
      newValues.splice(newValues.indexOf(changedItemName), 1);
    }

    updateFilter(filterType.categoryName, newValues);
    setTimeout(() => {
      hideLoading();
    }, 500);
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
                  key={filterItem.displayName}
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
