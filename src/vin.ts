import { getCountry, getRegion } from './country-region';
import { getManufacturer } from './manufacturer';
import { getModelYear } from './year';

export interface VINInfo {
  // ISO-3779
  // European Union >500v/year
  wmi: string;
  vds: string;
  vis: string;
  modelYear: string; // the 10th digit represents the model year
  manufacturer?: string;
}

export interface VINDecoded {
  vin: string;
  isValid: boolean;
  message?: string; // return error message if vin !isValid
  info?: {
    region: string;
    country: string;
    modelYear: string;
    manufacturer: string;
  };
}

export const validateVIN = (vin: string) => {
  vin = vin.toUpperCase();

  if (vin.length !== 17) {
    return {
      isValid: false,
      error: 'VIN must be 17 characters long',
    };
  }
  // Regex: Validates that a VIN consists of 17 characters and doesn't contain I,O,Q
  if (!vin.match(/^[A-HJ-NPR-Z0-9]{17}$/)) {
    return {
      isValid: false,
      error: 'VIN contain only letters & numbers except from I, O and Q',
    };
  }

  return {
    isValid: true,
  };
};

// Spit VIN to three sections based on ISO3779
export const splitVIN = (vin: string): VINInfo => {
  vin = vin.toUpperCase();
  return {
    wmi: vin.substring(0, 3),
    vds: vin.substring(3, 9),
    vis: vin.substring(9, 17),
    modelYear: vin.substring(9, 10),
  };
};

export const decodeVIN = (vin: string): VINDecoded => {
  vin = vin.toUpperCase();

  const validatedVIN = validateVIN(vin);
  if (!validatedVIN.isValid) {
    return {
      vin,
      isValid: false,
      message: validatedVIN.error,
    };
  }

  const split = splitVIN(vin);
  const region = getRegion(split.wmi);
  const country = getCountry(split.wmi);
  const modelYear = getModelYear(vin);
  const manufacturer = getManufacturer(split.wmi);

  return {
    vin,
    isValid: true,
    info: {
      region,
      country,
      modelYear,
      manufacturer,
    },
  };
};
