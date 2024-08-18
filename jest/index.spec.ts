import { palindromNumber, palindromString, secondLargest } from './../src/index';

// test('one', () => {
//   expect(secondLargest([1, 2])).toBe(1);
// });


describe('secondLargest', () => {
  const cases = [
    { input: [1, 2, 3, 4, 5], expected: 4 },
    { input: [5, 5, 4, 4, 3], expected: 4 },
    { input: [10, 10, 10, 9], expected: 9 },
    { input: [7, 7, 7, 7], expected: "No second unique element" }, // No second unique element
    { input: [5], expected: "Array does not have a second element" }, // Only one element
    { input: [], expected: "No elements in array" }, // Empty array
    { input: [-1, -2, -3, -4], expected: -2 },
    { input: [4, 2, 1, 3], expected: 3 }
  ];

  test.each(cases)('returns $expected for input $input', ({ input, expected }) => {
    expect(secondLargest(input)).toBe(expected);
  });
});


describe('Palindrom number',() =>{
  const cases= [
      { input: 0, expected: true },
      { input: 5, expected: true },
      { input: 9, expected: true },
      { input: 121, expected: true },
      { input: 1221, expected: true },
      { input: 12321, expected: true },
      { input: 1, expected: true },
      { input: 123321, expected: true },
      { input: 123, expected: false },
      { input: 10, expected: false },
      { input: 100, expected: false },
      { input: 123456, expected: false },
      { input: -121, expected: false },
      { input: -12321, expected: false },
      { input: -1, expected: false },
      { input: -123, expected: false },
      { input: 123454321, expected: true },
      { input: 123456789, expected: false }
  ];

  test.each(cases)('returns $expected for input $input',({input ,expected})=>{
    expect(palindromNumber(input)).toBe(expected);
  })
});


describe('Palindrom of string', () => {
  test.each([
    { str: "a", expected: true },
    { str: "z", expected: true },
    { str: "madam", expected: true },
    { str: "racecar", expected: true },
    { str: "level", expected: true },
    { str: "radar", expected: true },
    { str: "rotor", expected: true },
    { str: "A man a plan a canal Panama", expected: true },
    { str: "No lemon no melon", expected: true },
    { str: "Was it a car or a cat I saw", expected: true },
    { str: "hello", expected: false },
    { str: "world", expected: false },
    { str: "openai", expected: false },
    { str: "palindrome", expected: false },
    { str: "!@#A!! man @@a plan^^ a caNAL Panama###", expected: true },
    { str: "A Santa at NASA!", expected: true },
    { str: "@Hello!", expected: false },
    { str: "", expected: true },
    { str: " ", expected: true },
    { str: "!!", expected: true },
    { str: "12321", expected: true },
    { str: "12345", expected: false }
  ])('returns $expected for "$str"', ({ str, expected }) => {
    expect(palindromString(str)).toBe(expected);
  });
});