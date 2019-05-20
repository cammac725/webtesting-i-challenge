const enhancer = require('./enhancer.js');
const { repair, fail, succeed, get } = require('./enhancer')

describe('enhancer.js', () => {

  describe('repair()', () => {
    it('should return item with durability at 100', () => {

      const item = {
        name: 'The Sword',
        durability: 85,
        enhancement: 15
      }

      //arrange
      const expected = {
        name: 'The Sword',
        durability: 100,
        enhancement: 15
      }

      // act
      const repairedItem = repair(item);

      // assert
      expect(repairedItem).toEqual(expected)
    })

    it('should return null when no args passed', () => {
      const expected = null

      const actual = repair();

      expect(actual).toEqual(expected)
    })

    it('should return null or undefined when not passed a valid object', () => {
      const invalidItem = {
        name: "Shield",
        speed: 44,
        enhancement: 15
      }

      expect(repair(invalidItem)).toBeUndefined();
    })

  })

  describe('succeed', () => {
    it('should increase the enhancement by 1', () => {
      const item = {
        name: 'The Sword',
        durability: 85,
        enhancement: 14
      }

      //arrange
      const expected = {
        name: 'The Sword',
        durability: 85,
        enhancement: 15
      }

      // act
      const enhancedItem = succeed(item)

      // assert
      expect(enhancedItem).toEqual(expected)
    })

    it('should return undefined when called with no args', () => {
      expect(succeed()).toBeNull()
    })
  })

  describe('fail', () => {
    it('should decrease durability by 5 if the enhance is less than 15', () => {
      const failItem = {
        name: 'The Sword',
        durability: 85,
        enhancement: 13
      }

      const returnedItem = {
        name: 'The Sword',
        durability: 80,
        enhancement: 13
      }

      expect(fail(failItem)).toEqual(returnedItem)
    })

    it('should decrease durability by 10 if enhance is greater than 15', () => {
      const failItem = {
        name: 'The Sword',
        durability: 85,
        enhancement: 15
      }
      const returnedItem = {
        name: 'The Sword',
        durability: 75,
        enhancement: 15
      }

      expect(fail(failItem)).toEqual(returnedItem)
    })

    it('should decrease enhancement by 1 if existing enhancement is > 16', () => {
      const failItem = {
        name: 'The Sword',
        durability: 85,
        enhancement: 19
      }
      const returnedItem = {
        name: 'The Sword',
        durability: 75,
        enhancement: 18
      }
      expect(fail(failItem)).toEqual(returnedItem)
    })
  })
})