import React, { useState } from "react";
import PropTypes from "prop-types";

const SelectInput = (props) => {
  const { options, handler, value } = props;

  return (
    <div className="select-input">
      <select
        className="select-input-element p-1"
        onChange={(e) => handler(e.target.value)}
        value={value}
      >
        {options.map((o) => {
          return (
            <option key={o.value} value={o.value}>
              {o.key}
            </option>
          );
        })}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  options: PropTypes.array,
  handler: PropTypes.func,
  value: PropTypes.any,
};

export default SelectInput;
