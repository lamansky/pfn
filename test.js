'use strict'

const assert = require('assert')
const pfn = require('.')
const pfnStrict = require('./strict')

function sharedTests (fn) {
  it('should call the underlying value if it’s a function', function (done) {
    fn(done)()
  })

  it('should pass through the first argument if value is not a function', function () {
    assert.strictEqual(fn(null)('test'), 'test')
  })

  it('should return fallback value if value is not a function', function () {
    assert.strictEqual(fn(null, 'fallback')('test'), 'fallback')
  })

  it('should support a fallback function', function () {
    assert.strictEqual(fn(null, arg => arg ? 'yes' : 'no')(true), 'yes')
  })

  it('should support a fallback function', function () {
    assert.strictEqual(fn(null, arg => arg ? 'yes' : 'no')(true), 'yes')
  })
}

describe('pfn()', function () {
  sharedTests(pfn)

  it('should ignore a non-function, non-nil value', function () {
    assert.strictEqual(pfn('hi')('test'), 'test')
  })
})

describe('pfnStrict()', function () {
  sharedTests(pfnStrict)

  it('should throw an error if a non-function, non-nil value is given', function () {
    assert.throws(() => { pfnStrict('hi')('test') }, TypeError)
  })
})
