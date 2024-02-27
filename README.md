# Universal VIN Decoder

universal-vin-decoder provides utility functions for validating and parsing Vehicle Identification
Numbers (VIN).

- Decode VINs from more than 1,500 manufacturers
- Extract region, country, car model's year and manufacturer
- Validate provided VIN

## Usage

```javascript
import { decodeVIN, splitVIN, validateVIN } from 'universal-vin-decoder';

validateVIN('VR7EFYHT2PN547380'); //=> { isValid: true }
validateVIN('hello there!'); //=> { isValid: false, error: 'VIN must be 17 characters long' }
validateVIN(null); //=> { isValid: false, error: 'VIN must be a string' }

splitVIN('NMTK33BXX0R132738');
//=> {
//     wmi: 'NMT',       World Manufacturer Identifier
//     vds: 'K33BXX',    Vehicle Descriptor Section
//     vis: '0R132738',  Vehicle Identifier Section
//     modelYear: '0',   Model Year
//   }

decodeVIN('VR7EFYHT2PN547380');
//=> {
//     vin: 'VR7EFYHT2PN547380',
//     isValid: true,
//     info: {
//       region: 'Europe',
//       country: 'France',
//       modelYear: '2023',
//       manufacturer: 'Citroën'
//     }
//   }
```

## Installation

Use the package manager of your choice to install it throug the NPM registry. If you use npm run:

```sh
npm install universal-vin-decoder
```
