import React from "react";

export default function FilterCategoryItem({
  itemName,
  checked,
  onCheckedChange,
}) {
  return (
    <label className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={(event) => onCheckedChange(itemName, event.target.checked)}
      />
      <span className="form-check-label">{itemName}</span>
    </label>
  );
}
