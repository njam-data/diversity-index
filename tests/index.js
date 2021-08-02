import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { diversityIndex } from '../index.js'

test('diversityIndex one factor', () => {
  const race = [0.7, 0.3]
  const result = diversityIndex([
    race
  ])
  assert.equal(result, 0.42)
})

test('diversityIndex two factors', () => {
  const race = [0.3, 0.2, 0.1, 0.4]
  const ethnicity = [0.1, 0.9]
  const result = diversityIndex([
    race,
    ethnicity
  ])
  assert.equal(result, 0.75)
})

test.run()
