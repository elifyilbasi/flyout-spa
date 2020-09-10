import { connect } from "react-redux";
import { resetFilters } from "../productDucks";
import FilterGroup from "./FilterGroup";

function mapStateToProps(state) {
  return { selectedFilters: state.products.selectedFilters };
}

const mapDispatchToProps = {
  resetFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterGroup);
