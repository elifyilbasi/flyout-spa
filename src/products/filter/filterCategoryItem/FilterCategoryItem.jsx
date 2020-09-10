import React from "react";

export default function FilterCategoryItem({ category }) {
  return (
    <div className="card">
      <article className="card-group-item">
        <header className="card-header">
          <h6 className="title">{category.CategoryName} </h6>
        </header>
        <div className="filter-content">
          <div className="card-body">
            <form>
              {category.values.map((value) => {
                return (
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <span className="form-check-label">{value}</span>
                  </label>
                );
              })}
            </form>
          </div>
        </div>
      </article>
    </div>
  );
}
