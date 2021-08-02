# @njam-data/diversity-index

Based on the [USA Today diversity index](https://www.academia.edu/860996/The_USA_Today_index_of_ethnic_diversity).

## Install

```shell
npm i @njam-data/diversity-index
```

## Examples

### creating an index from one factor
```js
const race = [0.7, 0.3]
const result = diversityIndex([
  race
])
console.log('result', result)
// result === 0.42
```

### creating an index from two factors
```js
const race = [0.3, 0.2, 0.1, 0.5]
const ethnicity = [0.1, 0.9]
const result = diversityIndex([
  race,
  ethnicity
])
console.log('result', result)
// result === 0.75
```

## See also
- https://www.academia.edu/860996/The_USA_Today_index_of_ethnic_diversity
- https://gist.github.com/eyeseast/a1288c5df88187b457f4
