import { years } from './constants/year.constant';

// If the manufacturer chooses to designate year, it is recommended that the year be indicated by the first character of the VIS. (10th character)
// The recommended code to be used when designating year is indicated in year.constant file.
export const getModelYear = (vin: string): string => {
  vin = vin.toUpperCase();
  const candidateModelYear = vin.substring(9, 10);
  const candidateYears = years[candidateModelYear as keyof typeof years];

  const validationCharacter = vin.substring(6, 7);

  // Check if the validationCharacter is a Number
  const modelYear: string = /^\d+$/.test(validationCharacter)
    ? candidateYears?.find((year) => year < 2010)?.toString() || '-'
    : candidateYears?.find((year) => year >= 2010)?.toString() || '-';

  return modelYear;
};
