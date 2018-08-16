const { createReadStream, readFileSync } = require('fs');
const { join } = require('path');

const test = require('ava');

const fwv = require('../lib');

const config = require('./fixtures/config');

const fixturePath = join(__dirname, '/fixtures/data.txt');

test('buffer', async (t) => {
  const input = readFileSync(fixturePath);
  const options = Object.assign({}, config, { input });
  const result = await fwv(options);
  t.snapshot(result);
});

test('stream', async (t) => {
  const input = createReadStream(fixturePath, { encoding: 'utf-8' });
  const options = Object.assign({}, config, { input });
  const result = await fwv(options);
  t.snapshot(result);
});

test('string', async (t) => {
  const input = readFileSync(fixturePath, 'utf-8');
  const options = Object.assign({}, config, { input });
  const result = await fwv(options);
  t.snapshot(result);
});
