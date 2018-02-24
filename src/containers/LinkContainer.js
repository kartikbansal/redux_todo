//import Link from "../components/Link";
import React from "react";
import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import { setVisibilityFilter } from "../actions/actions";

const LinkContainer = ({ filter, children }) => (
  <NavLink
    exact
    to={"/" + (filter === "all" ? "" : filter)}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
  >
    {children}
  </NavLink>
);

export default LinkContainer;

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: state.visibilityFilter === ownProps.filter
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Link);
