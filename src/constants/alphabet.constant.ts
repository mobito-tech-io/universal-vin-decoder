// To avoid errors of misreading, the letters I, O, and Q are not part of any VIN combination.
export const ALPHABET_CHARS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];
export const ALPHABET_INDEX = ALPHABET_CHARS.map((v, i) => [v, i]).reduce(
  (acc, [v, i]) => ({ ...acc, [v]: i }),
  {},
);
