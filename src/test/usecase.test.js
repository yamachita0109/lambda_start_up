/* eslint-disable no-undef */

const usecase = require('../usecase')
const assert = require('assert')

describe('# usecase', () => {
  it('## execute', async () => {
    let res
    await usecase.execute().then((result) => { res = result })
    assert.strictEqual(res, 'yamashita')
  })
})
