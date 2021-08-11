import { lookupTupples } from '../constants';

/**
 * converts numbers to roman numerals
 * @param num 
 * @returns 
 */
export const toRoman = (num: number) => {

  let roman = '';
   lookupTupples.forEach(([romanKey, value], index) => {
      while (num >= value) {
        roman += romanKey;
        num -= value;
      }
   })

   return roman;
}