import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const PageLink = props => {
  const { children, className, tag: Tag, ...attributes } = props;

  const classes = classNames("page-link", className);

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

PageLink.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

PageLink.defaultProps = {
  tag: "a"
};

export default PageLink;
export { PageLink as MDBPageNav };
