export const groupBy = (array, getKey) =>
  array.reduce((obj, cur, idx, src) => {
    const key = getKey(cur, idx, src)
    ;(obj[key] || (obj[key] = [])).push(cur)
    return obj
  }, {})

export const reducer = (accumulator, currentValue) => accumulator + currentValue

export const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))
