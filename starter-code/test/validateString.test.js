import {eliminateRemoveRepeated, elimanteLowerCaseDNA, canonicalDNA} from '../validateString.js';

describe('ValidateString', () => {
    describe('#non-canonicalDNA(x)', () => {

        test('should be canonical DNA (non-repeated)', () => {
            expect(eliminateRemoveRepeated("CTAGGGTA")).toMatch("CTAG");
        });
        test('should be canonical DNA (lower case)', () => {
            expect(elimanteLowerCaseDNA("CTAbdG")).toMatch("CTAG");
        });
        test('should be canonical DNA', () => {
            expect(canonicalDNA("CTAbdGGGTA")).toMatch("CTAG");
        });
        test('should be canonical DNA (empty string)', () => {
            expect(canonicalDNA('')).toMatch('');
        });
    });
    describe('#findRepeatingCharacter(x)', () => {
        test('find first-consecutively-repeating character, return index', () => {
            expect(indexFirstRepetingChar("abccd")).toBe(2);
        });
    });

});