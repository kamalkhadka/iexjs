/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { convertToList } from "./common";
import { _get } from "../../common";
import { Client } from "../../client";

/**
 * This call returns an array of futures symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#futures-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const futuresSymbols = ({
  token = "",
  version = "",
  filter = "",
  format = "json",
} = {}) =>
  _get({
    url: `ref-data/futures/symbols`,
    token,
    version,
    filter,
    format,
  });

Client.prototype.futuresSymbols = function ({ filter, format } = {}) {
  return futuresSymbols({
    token: this._token,
    version: this._version,
    filter,
    format,
  });
};

export const futuresSymbolsList = ({ token, version } = {}) =>
  convertToList(futuresSymbols({ token, version, filter: "symbol" }));

Client.prototype.futuresSymbolsList = function () {
  return convertToList(
    futuresSymbols({
      token: this._token,
      version: this._version,
      filter: "symbol",
    }),
  );
};
