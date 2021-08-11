import { lookupTupples } from '../constants';

const countRoman = (roman: string, romanKey: string, indexPointer: number) => {
  
  const keyLength = romanKey.length;

  let counts = 0;
  let stop = false;
  do {
    const nextPointer = indexPointer + keyLength;
    if (roman.substring(indexPointer, nextPointer) === romanKey) {
      counts += 1;
      indexPointer = nextPointer;
    }
    else {
      stop = true;
    }
  }
  while(!stop && indexPointer < roman.length);

  return {
    counts,
     nextPointer: indexPointer
  }
}

/**
 * converts roman numerals to digits
 * @param roman 
 * @returns
 */
export const fromRoman = (roman: string) => {

  roman = roman.toUpperCase();
  let digits = 0;
  let indexPointer = 0;

   lookupTupples.forEach(([romanKey, value], index) => {
     const {counts, nextPointer} = countRoman(roman, romanKey, indexPointer);
     digits += (value * counts);
     indexPointer = nextPointer;
   })

   return digits;
}