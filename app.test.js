// Import the functions to be tested
const { sayHello, twoSum } = require('./app');

// Test for the sayHello function
test('sayHello should log the correct greeting', () => {
    // Arrange
    const name = 'John';
    const consoleSpy = jest.spyOn(console, 'log');

    // Act
    sayHello(name);

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith('Hello John');
    consoleSpy.mockRestore();
});

// Test for the twoSum function
test('twoSum should return the indices of the two numbers that add up to the target', () => {
    // Arrange
    const nums = [2, 7, 11, 15];
    const target = 9;

    // Act
    const result = twoSum(nums, target);

    // Assert
    expect(result).toEqual([0, 1]);
});