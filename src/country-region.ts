import {
  ALPHABET_CHARS,
  ALPHABET_INDEX,
  countries,
  regions,
} from './constants';

const mapCountries = (): { string: string } => {
  const countriesMap: any = {};

  for (let i = 0; i < countries.length; i = i + 2) {
    const rangeStr = countries[i];
    const country = countries[i + 1];

    const rangeStart = rangeStr.substring(1, 2);
    const rangeEnd = rangeStr.substring(4, 5);

    const startIndex =
      ALPHABET_INDEX[rangeStart as keyof typeof ALPHABET_INDEX];
    const endIndex = ALPHABET_INDEX[rangeEnd as keyof typeof ALPHABET_INDEX];

    for (let j = startIndex; j <= endIndex; j++) {
      const code = rangeStr.charAt(0) + ALPHABET_CHARS[j];
      countriesMap[code] = country;
    }
  }
  return countriesMap;
};

const countriesMap = mapCountries();

export const getCountry = (wmi: string): string => {
  return countriesMap[wmi.substring(0, 2) as keyof typeof countriesMap];
};

export const getRegion = (wmi: string): string => {
  return regions[wmi.substring(0, 1) as keyof typeof regions];
};
