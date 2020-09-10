import React from "react";
import FilterCategoryItem from "./filterCategoryItem/FilterCategoryItem";

export default function FilterCategory({ filterType }) {
  return <FilterCategoryItem category={filterType} />;
}
