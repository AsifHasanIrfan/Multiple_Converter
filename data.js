export const convert = {
  area: {
    name: "Area",
    units: {
      squareKm: "Square Kilometer",
      squareM: "Square Meter",
      squareMile: "Square Mile",
      squareYard: "Square Yard",
      squareFoot: "Square Foot",
      squareInch: "Square Inch",
      hectare: "Hectare",
      acre: "Acre",
    },
    variants: {
      "squareKm:squareM": {
        formula: "multiply the area value by 1e+6",
        calculation(n) {
          return n * 1000000;
        },
      },
      "squareKm:squareMile": {
        formula: "divide the area value by 2.59",
        calculation(n) {
          return n / 2.59;
        },
      },
      "squareKm:squareYard": {
        formula: "multiply the area value by 1.196e+6",
        calculation(n) {
          return n * 1196000;
        },
      },
      "squareKm:squareFoot": {
        formula:
          "for an approximate result, multiply the area value by 1.076e+7",
        calculation(n) {
          return n * 10760000;
        },
      },
      "squareKm:squareInch": {
        formula: "multiply the area value by 1.55e+9",
        calculation(n) {
          return n * 1550000000;
        },
      },
      "squareKm:hectare": {
        formula: "multiply the area value by 100",
        calculation(n) {
          return n * 100;
        },
      },
      "squareKm:acre": {
        formula: "for an approximate result, multiply the area value by 247.1",
        calculation(n) {
          return n * 247.1;
        },
      },
      "squareM:squareKm": {
        formula: "divide the area value by 1e+6",
        calculation(n) {
          return n / 1000000;
        },
      },
      "squareM:squareMile": {
        formula: "divide the area value by 2.59e+6",
        calculation(n) {
          return n / 2590000;
        },
      },
      "squareM:squareYard": {
        formula: "multiply the area value by 1.196",
        calculation(n) {
          return n * 1.196;
        },
      },
      "squareM:squareFoot": {
        formula: "multiply the area value by 10.764",
        calculation(n) {
          return n * 10.764;
        },
      },
      "squareM:squareInch": {
        formula: "for an approximate result, multiply the area value by 1550",
        calculation(n) {
          return n * 1550;
        },
      },
      "squareM:hectare": {
        formula: "divide the area value by 10000",
        calculation(n) {
          return n / 10000;
        },
      },
      "squareM:acre": {
        formula: "for an approximate result, divide the area value by 4047",
        calculation(n) {
          return n / 4047;
        },
      },
      "squareMile:squareKm": {
        formula: "multiply the area value by 2.59",
        calculation(n) {
          return n * 2.59;
        },
      },
      "squareMile:squareM": {
        formula: "multiply the area value by 2.59e+6",
        calculation(n) {
          return n * 2590000;
        },
      },
      "squareMile:squareYard": {
        formula:
          "for an approximate result, multiply the area value by 3.098e+6",
        calculation(n) {
          return n * 3098000;
        },
      },
      "squareMile:squareFoot": {
        formula:
          "for an approximate result, multiply the area value by 2.788e+7",
        calculation(n) {
          return n * 27880000;
        },
      },
      "squareMile:squareInch": {
        formula:
          "for an approximate result, multiply the area value by 4.014e+9",
        calculation(n) {
          return n * 4014000000;
        },
      },
      "squareMile:hectare": {
        formula: "for an approximate result, multiply the area value by 259",
        calculation(n) {
          return n * 259;
        },
      },
      "squareMile:acre": {
        formula: "multiply the area value by 640",
        calculation(n) {
          return n * 640;
        },
      },
      "squareYard:squareKm": {
        formula: "divide the area value by 1.196e+6",
        calculation(n) {
          return n / 1196000;
        },
      },
      "squareYard:squareM": {
        formula: "divide the area value by 1.196",
        calculation(n) {
          return n / 1.196;
        },
      },
      "squareYard:squareMille": {
        formula: "for an approximate result, divide the area value by 3.098e+6",
        calculation(n) {
          return n / 3098000;
        },
      },
      "squareYard:squareFoot": {
        formula: "multiply the area value by 9",
        calculation(n) {
          return n * 9;
        },
      },
      "squareYard:squareInch": {
        formula: "multiply the area value by 1296",
        calculation(n) {
          return n * 1296;
        },
      },
      "squareYard:hectare": {
        formula: "for an approximate result, divide the area value by 11960",
        calculation(n) {
          return n / 11960;
        },
      },
      "squareYard:acre": {
        formula: "divide the area value by 4840",
        calculation(n) {
          return n / 4840;
        },
      },
      "squareFoot:squareKm": {
        formula: "for an approximate result, divide the area value by 1.076e+7",
        calculation(n) {
          return n / 10760000;
        },
      },
      "squareFoot:squareM": {
        formula: "divide the area value by 10.764",
        calculation(n) {
          return n / 10.764;
        },
      },
      "squareFoot:squareMille": {
        formula: "for an approximate result, divide the area value by 2.788e+7",
        calculation(n) {
          return n / 27880000;
        },
      },
      "squareFoot:squareYard": {
        formula: "divide the area value by 9",
        calculation(n) {
          return n / 9;
        },
      },
      "squareFoot:squareInch": {
        formula: "multiply the area value by 144",
        calculation(n) {
          return n * 144;
        },
      },
      "squareFoot:hectare": {
        formula: "for an approximate result, divide the area value by 107600",
        calculation(n) {
          return n / 107600;
        },
      },
      "squareFoot:acre": {
        formula: "divide the area value by 43560",
        calculation(n) {
          return n / 43560;
        },
      },
      "squareInch:squareKm": {
        formula: "divide the area value by 1.55e+9",
        calculation(n) {
          return n / 1550000000;
        },
      },
      "squareInch:squareM": {
        formula: "for an approximate result, divide the area value by 1550",
        calculation(n) {
          return n / 1550;
        },
      },
      "squareInch:squareMille": {
        formula: "for an approximate result, divide the area value by 4.014e+9",
        calculation(n) {
          return n / 4014000000;
        },
      },
      "squareInch:squareYard": {
        formula: "divide the area value by 1296",
        calculation(n) {
          return n / 1296;
        },
      },
      "squareInch:squareFoot": {
        formula: "divide the area value by 144",
        calculation(n) {
          return n / 144;
        },
      },
      "squareInch:hectare": {
        formula: "divide the area value by 1.55e+7",
        calculation(n) {
          return n / 15500000;
        },
      },
      "squareInch:acre": {
        formula: "for an approximate result, divide the area value by 6.273e+6",
        calculation(n) {
          return n / 6273000;
        },
      },
      "hectare:squareKm": {
        formula: "divide the area value by 100",
        calculation(n) {
          return n / 100;
        },
      },
      "hectare:squareM": {
        formula: "multiply the area value by 10000",
        calculation(n) {
          return n * 10000;
        },
      },
      "hectare:squareMille": {
        formula: "for an approximate result, divide the area value by 259",
        calculation(n) {
          return n / 259;
        },
      },
      "hectare:squareYard": {
        formula: "for an approximate result, multiply the area value by 11960",
        calculation(n) {
          return n * 11960;
        },
      },
      "hectare:squareFoot": {
        formula: "for an approximate result, multiply the area value by 107600",
        calculation(n) {
          return n * 107600;
        },
      },
      "hectare:squareInch": {
        formula: "multiply the area value by 1.55e+7",
        calculation(n) {
          return n * 15500000;
        },
      },
      "hectare:acre": {
        formula: "multiply the area value by 2.471",
        calculation(n) {
          return n * 2.471;
        },
      },
      "acre:squareKm": {
        formula: "for an approximate result, divide the area value by 247.1",
        calculation(n) {
          return n / 247.1;
        },
      },
      "acre:squareM": {
        formula: "for an approximate result, multiply the area value by 4047",
        calculation(n) {
          return n * 4047;
        },
      },
      "acre:squareMille": {
        formula: "divide the area value by 640",
        calculation(n) {
          return n / 640;
        },
      },
      "acre:squareYard": {
        formula: "multiply the area value by 4840",
        calculation(n) {
          return n * 4840;
        },
      },
      "acre:squareFoot": {
        formula: "multiply the area value by 43560",
        calculation(n) {
          return n * 43560;
        },
      },
      "acre:squareInch": {
        formula:
          "for an approximate result, multiply the area value by 6.273e+6",
        calculation(n) {
          return n * 6273000;
        },
      },
      "acre:hectare": {
        formula: "divide the area value by 2.471",
        calculation(n) {
          return n / 2.471;
        },
      },
    },
  },
  length: {
    name: "Length",
    units: {
      km: "Kilometer",
      meter: "Meter",
      cm: "Centimeter",
      mm: "Millimetre",
      microMeasure: "Micrometres",
      nanoMetres: "Nanometres",
      mile: "Mile",
      yard: "Yard",
      foot: "Foot",
      Inch: "Inch",
      nauticalMile: "Nautical Mile",
    },
    variants: {},
  },
  mass: {
    name: "Mass",
    units: {
      tonne: "Tonne",
      kilogram: "Kilogram",
      gram: "Gram",
      milligram: "Milligram",
      microgram: "Microgram",
      imperialTone: "Imperial Tone",
      usTon: "US Ton",
      stone: "Stone",
      pound: "Pound",
      ounce: "Ounce",
    },
  },
  volume: {
    name: "Volume",
    units: {
      usLiquidGallon: "US Liquid Gallon",
      usLiquidQuart: "US Liquid Quart",
      usLiquidPint: "US Liquid Pint",
      usLegalCup: "US Legal Cup",
      fluidOunce: "Fluid Ounce",
      usTablespoon: "US Tablespoon",
      usTeaspoon: "US Teaspoon",
      cubicMetre: "Cubic Meter",
      liter: "Liter",
      millilitre: "Millilitre",
      imperialGallon: "Imperial Gallon",
      imperialQuart: "Imperial Quart",
      imperialPint: "Imperial Pint",
      imperialCup: "Imperial Cup",
      fluidOunce: "Fluid Ounce",
      imperialTablespoon: "Imperial Tablespoon",
      imperialTeaspoon: "Imperial Teaspoon",
      cubicFoot: "Cubic Foot",
      cubicInch: "Cubic Inch",
    },
  },
  time: {
    name: "Time",
    units: {
      // nanoSecond: "Nanosecond",
      // microSecond: "Microsecond",
      // milliSecond: "Millisecond",
      second: "Second",
      minute: "Minute",
      hour: "Hour",
      // day: "Day",
      // week: "Week",
      // month: "Month",
      // calendarYear: "Calendar Year",
      // decade: "Decade",
      // century: "Century",
    },
    variants: {
      'second:minute': {
        formula: 'divide the time value by 60',
        calculation(n) {
          return n / 60;
        }
      },
      'second:hour': {
        formula: 'divide the time value by 3600',
        calculation(n) {
          return n / 3600;
        }
      },
      'minute:second': {
        formula: 'multiply the time value by 60',
        calculation(n) {
          return n * 60;
        }
      },
      'minute:hour': {
        formula: 'divide the time value by 60',
        calculation(n) {
          return n / 60;
        }
      },
      'hour:second': {
        formula: 'multiply the time value by 3600',
        calculation(n) {
          return n * 3600;
        }
      },
      'hour:minute': {
        formula: 'multiply the time value by 60',
        calculation(n) {
          return n * 60;
        }
      },
    }
  },
};
