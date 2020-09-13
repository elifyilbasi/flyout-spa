import { connect } from "react-redux";
import { resetFilters } from "../productDucks";
import { showLoading, hideLoading } from "../../app/loading/loadingDucks";
import FilterGroup from "./FilterGroup";

function mapStateToProps(state) {
  return { selectedFilters: state.products.selectedFilters };
}

const mapDispatchToProps = {
  resetFilters,
  showLoading,
  hideLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterGroup);
