import { capitalize } from '../src/capitalize.js';
import { strict as assert } from 'assert';

assert.strictEqual(capitalize(''), '');
assert.deepEqual(capitalize('hello'), 'Hello');

console.log('All tests are passed');