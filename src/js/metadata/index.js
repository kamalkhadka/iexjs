/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { _get } from "../common";
import { Client } from "../client";

/**
 * Get inventory of available time series endpoints
 *
 * @param {object} options
 * @param {string} options.id timeseries id
 * @param {string} options.key timeseries key
 * @param {string} options.subkey timeseries subkey
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 * @param {string} format output format
 */
export const queryMetadata = (
  { id, key, subkey } = {},
  { token, version, filter, format } = {},
) => {
  let url = "metadata/time-series";
  if (id) {
    url += `/${id}`;
    if (key) {
      url += `/${key}`;
      if (subkey) {
        url += `/${subkey}`;
      }
    }
  }

  return _get({
    url,
    token,
    version,
    filter,
    format,
  });
};

Client.prototype.queryMetadata = function (
  { id, key, subkey } = {},
  { filter, format } = {},
) {
  return queryMetadata(
    { id, key, subkey },
    {
      token: this._token,
      version: this._version,
      filter,
      format,
    },
  );
};
