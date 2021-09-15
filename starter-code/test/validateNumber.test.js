import {divisibleNumber, isLeapYear, sumArrayElements} from '../validateNumber.js';

describe('ValidateNumber', () => {
    describe('#divisibleNumber(x)', () => {

        test('should number is divisible by 3', () => {
            expect(divisibleNumber(3)).toMatch("Fizz");
        });
        test('should number is divisible by 5', () => {
            expect(divisibleNumber(5)).toMatch("Buzz");
        });
        test('should number is divisible by both 3 and 5', () => {
            expect(divisibleNumber(15)).toMatch("FizzBuzz");
        });
    });
    describe('#leapYear(x)', () => {
        test('should it is a leap year', () => {
            expect(isLeapYear(2060)).toBeTruthy();
        });
    });

    describe('#sumArrayElments(x)', () => {
        test('the sum of all the positive numbers in the array', () => {
            expect(sumArrayElements([1,2,-2,1])).toBe(4);
        });
        test('if the array is empty then the sum 0', () => {
            expect(sumArrayElements([])).toBe(0);
        });
        test('the sum of all the positive numbers in the array', () => {
            expect(sumArrayElements([1,"2",-2,1])).toBe(4);
        });
    });
});