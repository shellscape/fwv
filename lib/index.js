const intoStream = require('into-stream');
const isStream = require('is-stream');
const isString = require('is-string');
const getStream = require('get-stream');
const split = require('split2');

const defaults = {
  columns: [],
  input: null,
  skipHeader: false
};

class FixedWidthError extends Error {}

module.exports = async (opts) => {
  const options = Object.assign({}, defaults, opts);
  const { columns, input } = options;
  const validInput = isString(input) || Buffer.isBuffer(input) || isStream(input);
  const transform = (line) => {
    const result = {};

    for (const [index, { name, from, to }] of columns.entries()) {
      result[name || index.toString()] = line.slice(from || 0, to || line.length).trim();
    }
    return result;
  };

  if (!Array.isArray(columns)) {
    throw new TypeError('`columns` must be of type Array');
  }

  if (!columns.length) {
    throw new FixedWidthError('`columns` requires at least one column definition.');
  }

  if (!validInput) {
    throw new TypeError('`input` must be of type Buffer, Stream, or String');
  }

  const stream = isStream(input) ? input : intoStream(input);
  const result = await getStream.array(stream.pipe(split(transform)));

  return result;
};
