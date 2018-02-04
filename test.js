'use strict'

const assert = require('assert')
const pfn = require('.')

describe('pfn()', function () {
  it('should call the underlying value if it’s a function', function (done) {
    pfn(done)()
  })

  it('should pass through the first argument if value is not a function', function () {
    assert.strictEqual(pfn(null)('test'), 'test')
  })

  it('should return fallback value if value is not a function', function () {
    assert.strictEqual(pfn(null, 'fallback')('test'), 'fallback')
  })

  it('should support a fallback function', function () {
    assert.strictEqual(pfn(null, arg => arg ? 'yes' : 'no')(true), 'yes')
  })
})
