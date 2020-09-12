import { connect } from "react-redux";
import { updateFilter } from "../productDucks";
import { showLoading, hideLoading } from "../../app/loading/loadingDucks";
import FilterCategory from "./FilterCategory";

function mapStateToProps(state) {
  return { selectedFilters: state.products.selectedFilters };
}

const mapDispatchToProps = {
  updateFilter,
  showLoading,
  hideLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCategory);
