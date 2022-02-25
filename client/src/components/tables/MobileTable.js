import React, { useState } from "react";
import PropTypes from "prop-types";

import SelectInput from "../shared/SelectInput";

const DoubleCategory = (props) => {
  const { data, options } = props;

  const { headers, header, headerOptions, headerHandler } = options;

  const subCategories = [...new Set(data.map((d) => d.x2))];

  const dataTable = {};

  for (let d = 0; d < data.length; d++) {
    const datum = data[d];

    if (Object.keys(dataTable).includes(datum.x)) {
      if (Object.keys(dataTable[datum.x]).includes(datum.x2)) {
        dataTable[datum.x][datum.x2].push(datum.y);
      } else {
        let key = datum.x2;
        dataTable[datum.x][key] = [datum.y];
      }
    } else {
      let key = datum.x2;
      dataTable[datum.x] = {};
      dataTable[datum.x][key] = [datum.y];
    }
  }

  let rows = 0;

  for (let header in dataTable) {
    const main = dataTable[header];

    for (let subCategory in main) {
      const subArray = main[subCategory];
      const len = subArray.length;

      if (len > rows) {
        rows = len;
      }
    }
  }

  const rowsArray = new Array(rows).fill(0);

  return (
    <div className="mobile-table-single">
      <div className="mb-2 py-2">
        <SelectInput
          options={headerOptions}
          value={header}
          handler={headerHandler}
        />
      </div>
      <table className="table table-bordered mb-0">
        <thead>
          <tr>
            <th>SubCategory</th>
            <th key={`header-${header}`}>{header}</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.map((subCategory, s) => {
            const element = dataTable[header][subCategory];
            return (
              <tr key={`table-row-${s}`}>
                <th>{subCategory}</th>
                <td key={`cell-${s}`}>
                  {element[0] == undefined ? "N/A" : element[0]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

DoubleCategory.propTypes = {
  data: PropTypes.any,
  options: PropTypes.object,
};

const SingleCategory = (props) => {
  const { data, options } = props;

  const { headers, header, headerOptions, headerHandler } = options;

  const dataTable = {};

  for (let d = 0; d < data.length; d++) {
    const datum = data[d];

    if (Object.keys(dataTable).includes(datum.x)) {
      dataTable[datum.x].push(datum.y);
    } else {
      dataTable[datum.x] = [datum.y];
    }
  }

  let rows = 0;

  for (let header in dataTable) {
    const len = dataTable[header].length;

    if (len > rows) {
      rows = len;
    }
  }

  const rowsArray = new Array(rows).fill(0);

  return (
    <div className="mobile-table-single">
      <div className="mb-2 py-2">
        <SelectInput
          options={headerOptions}
          value={header}
          handler={headerHandler}
        />
      </div>
      <table className="table table-striped table-bordered mb-0">
        <thead>
          <tr>
            <th key={`header-${header}`}>{header}</th>
          </tr>
        </thead>
        <tbody>
          {rowsArray.map((row, r) => {
            return (
              <tr key={`table-row-${r}`}>
                <td key={`cell-${header}`}>
                  {dataTable[header][r] == undefined
                    ? "N/A"
                    : dataTable[header][r]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

SingleCategory.propTypes = {
  data: PropTypes.any,
  options: PropTypes.object,
};

const MobileTable = (props) => {
  const { data, type } = props;

  const createTableOptions = (headers) => {
    return headers.map((header, h) => {
      return { key: header, value: header };
    });
  };

  const headers = [...new Set(data.map((d) => d.x))];

  const headerOptions = createTableOptions(headers);

  const [header, setHeader] = useState(headers[0]);

  const headerHandler = (value) => {
    setHeader(value);
  };

  const options = {
    headers,
    header,
    headerOptions,
    headerHandler,
  };

  return (
    <div className="mobile-table-container">
      {type == "single" ? (
        <SingleCategory data={data} options={options} />
      ) : (
        <DoubleCategory options={options} data={data} />
      )}
    </div>
  );
};

MobileTable.propTypes = {
  data: PropTypes.any,
  type: PropTypes.string,
};

export default MobileTable;
