import { connect } from "react-redux";
import { updateFilter } from "../productDucks";
import FilterCategory from "./FilterCategory";

function mapStateToProps(state) {
  return { selectedFilters: state.products.selectedFilters };
}

const mapDispatchToProps = {
  updateFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCategory);
