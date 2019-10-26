import React from "react";

const Published = props => {
  let classes = "text-success fa fa-eye";
  if (!props.published) classes = "text-danger fa fa-eye-slash";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Published;
