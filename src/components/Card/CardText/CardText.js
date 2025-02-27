import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CardText = props => {
  const { className, tag: Tag, muted, small, ...attributes } = props;

  const classes = classNames("card-text", muted && "text-muted", className);

  let text = <Tag {...attributes} className={classes} />;

  if (small) {
    text = (
      <Tag {...attributes} className={classes}>
        <small> {props.children} </small>
      </Tag>
    );
  }
  return text;
};

CardText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool
};

CardText.defaultProps = {
  tag: "p"
};

export default CardText;
export { CardText as MDBCardText };