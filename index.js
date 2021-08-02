/**
 * create a diversity index from one or more factors
 * @param factors Array.<Array.<number>>
 * @param options Object
 * @param options.round Boolean - set to false to get the full number rather than rounding to two decimal places
 * @returns number
*/
export function diversityIndex (factors, options = {}) {
  const totals = factors.map((categories) => {
    return categories.reduce((int, item) => {
      int += item ** 2
      return int
    }, 0)
  })

  const num = 1 - (
    totals.reduce((a, b) => {
      return a * b
    }, 1)
  )

  if (options.round !== false) {
    return Math.round(num * 100 + Number.EPSILON) / 100
  } else {
    return num
  }
}
