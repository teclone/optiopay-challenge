import {toRoman} from '.';

export const testsData: Array<{roman: string; digit: number}> = [
  {roman: 'M', digit: 1000}, 
  {roman: 'MDXXXV', digit: 1535},
  {roman: 'MMMMMMMMMMDCXLI', digit: 10641},
];

describe('lib', function() {
  describe('toRoman', function() {
    it(`should convert the given numeric value to roman numerals`, function() {

      for (const testData of testsData) {
        expect(toRoman(testData.digit)).toEqual(testData.roman);
      }
    })
  })
});
