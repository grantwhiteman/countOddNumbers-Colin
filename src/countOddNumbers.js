const countOddNumbers = (arr) => {
    let newArr = arr.filter(num => num % 2 === 1)
    return newArr.length
}
module.exports = countOddNumbers