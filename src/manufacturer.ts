import { manufacturers } from './constants';

export const getManufacturer = (code: string): string => {
  if (code.length === 3) {
    return manufacturers[code as keyof typeof manufacturers];
  } else {
    throw new Error('Invalid manufacturer code');
  }
};
