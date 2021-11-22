const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let sample = [1,2,3]
    let value = shuffleArray(sample)

    test('shuffleArray returns an array', () => {
        // expect(typeof arrLength(sample1)).toBe("number");
        expect(Array.isArray(value)).toBe(true)
    })

    test('shuffleArray returns an array with the same length as the original', () => {
        expect(value.length).toEqual(shuffleArray(sample).length)
    })

    test('shuffleArray returns a copied array with unmodified elements', () => {
        expect(value.includes(sample[0])).toBe(true)
        expect(value.includes(sample[1])).toBe(true)
        expect(value.includes(sample[2])).toBe(true)
    })

    test('shuffleArray shuffles the array', () => {
        expect(value).not.toEqual(sample)
    })
})