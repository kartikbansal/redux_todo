import React from "react";
import LinkContainer from "../containers/LinkContainer";
import { VisibilityFilters } from "../actions/actions";

const Footer = () => (
  <p>
    Show: <LinkContainer filter="all">All</LinkContainer>
    {", "}
    <LinkContainer filter="active">Active</LinkContainer>
    {", "}
    <LinkContainer filter="completed">Completed</LinkContainer>
  </p>
);
export default Footer;
