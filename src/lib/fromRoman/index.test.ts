import {fromRoman} from '.';
import { testsData } from '../toRoman/index.test';

describe('lib', function() {
  describe('fromRoman', function() {
    it(`should convert the given roman numerals to digits`, function() {

      for (const testData of testsData) {
        expect(fromRoman(testData.roman)).toEqual(testData.digit);
      }
    })
  })
});
