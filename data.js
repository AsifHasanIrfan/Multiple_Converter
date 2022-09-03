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
      micrometres: "Micrometres",
      nanoMetre: "NanoMetre",
      mile: "Mile",
      yard: "Yard",
      foot: "Foot",
      Inch: "Inch",
      nauticalMile: "Nautical Mile",
    },
    variants: {
      "km:meter": {
        formula: "multiply the length value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "km:cm": {
        formula: "multiply the length value by 100000",
        calculation(n) {
          return n * 100000;
        },
      },
      "km:mm": {
        formula: "multiply the length value by 1e+6",
        calculation(n) {
          return n * 1000000;
        },
      },
      "km:micrometres": {
        formula: "multiply the length value by 1e+9",
        calculation(n) {
          return n * 1000000000;
        },
      },
      "km:nanoMetre": {
        formula:
          "for an approximate result, multiply the length value by 1e+12",
        calculation(n) {
          return n * 1000000000000;
        },
      },
      "km:mile": {
        formula: "for an approximate result, divide the length value by 1.609",
        calculation(n) {
          return n / 1.609;
        },
      },
      "km:yard": {
        formula: "for an approximate result, multiply the length value by 1094",
        calculation(n) {
          return n * 1094;
        },
      },
      "km:foot": {
        formula: "for an approximate result, multiply the length value by 3281",
        calculation(n) {
          return n * 3281;
        },
      },
      "km:Inch": {
        formula:
          "for an approximate result, multiply the length value by 39370",
        calculation(n) {
          return n * 39370;
        },
      },
      "km:nauticalMile": {
        formula: "divide the length value by 1.852",
        calculation(n) {
          return n / 1.852;
        },
      },
      "meter:km": {
        formula: "divide the length value by 1000",
        calculation(n) {
          return n / 1000;
        },
      },
      "meter:cm": {
        formula: "multiply the length value by 100",
        calculation(n) {
          return n * 100;
        },
      },
      "meter:mm": {
        formula: "multiply the length value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "meter:micrometres": {
        formula: "multiply the length value by 1e+6",
        calculation(n) {
          return n * 1000000;
        },
      },
      "meter:nanoMetre": {
        formula: "for an approximate result, multiply the length value by 1e+9",
        calculation(n) {
          return n * 1000000000;
        },
      },
      "meter:mile": {
        formula: "for an approximate result, divide the length value by 1609",
        calculation(n) {
          return n / 1609;
        },
      },
      "meter:yard": {
        formula:
          "for an approximate result, multiply the length value by 1.094",
        calculation(n) {
          return n * 1.094;
        },
      },
      "meter:foot": {
        formula:
          "for an approximate result, multiply the length value by 3.281",
        calculation(n) {
          return n * 3.281;
        },
      },
      "meter:Inch": {
        formula: "multiply the length value by 39.37",
        calculation(n) {
          return n * 39.37;
        },
      },
      "meter:nauticalMile": {
        formula: "divide the length value by 1852",
        calculation(n) {
          return n / 1852;
        },
      },
      "cm:km": {
        formula: "divide the length value by 100000",
        calculation(n) {
          return n / 100000;
        },
      },
      "cm:meter": {
        formula: "divide the length value by 100",
        calculation(n) {
          return n / 100;
        },
      },
      "cm:mm": {
        formula: "multiply the length value by 10",
        calculation(n) {
          return n * 10;
        },
      },
      "cm:micrometres": {
        formula: "multiply the length value by 10000",
        calculation(n) {
          return n * 10000;
        },
      },
      "cm:nanoMetre": {
        formula: "multiply the length value by 1e+7",
        calculation(n) {
          return n * 10000000;
        },
      },
      "cm:mile": {
        formula: "for an approximate result, divide the length value by 160900",
        calculation(n) {
          return n / 160900;
        },
      },
      "cm:yard": {
        formula: "divide the length value by 91.44",
        calculation(n) {
          return n / 91.44;
        },
      },
      "cm:foot": {
        formula: "divide the length value by 30.48",
        calculation(n) {
          return n / 30.48;
        },
      },
      "cm:Inch": {
        formula: "divide the length value by 2.54",
        calculation(n) {
          return n / 2.54;
        },
      },
      "cm:nauticalMile": {
        formula: "divide the length value by 185200",
        calculation(n) {
          return n / 185200;
        },
      },
      "mm:km": {
        formula: "divide the length value by 1e+6",
        calculation(n) {
          return n / 1000000;
        },
      },
      "mm:meter": {
        formula: "divide the length value by 1000",
        calculation(n) {
          return n / 1000;
        },
      },
      "mm:cm": {
        formula: "divide the length value by 10",
        calculation(n) {
          return n / 10;
        },
      },
      "mm:micrometres": {
        formula: "multiply the length value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "mm:nanoMetre": {
        formula: "multiply the length value by 1e+6",
        calculation(n) {
          return n * 1000000;
        },
      },
      "mm:mile": {
        formula:
          "for an approximate result, divide the length value by 1.609e+6",
        calculation(n) {
          return n / 1609000;
        },
      },
      "mm:yard": {
        formula: "divide the length value by 914.4",
        calculation(n) {
          return n / 914.4;
        },
      },
      "mm:foot": {
        formula: "divide the length value by 304.8",
        calculation(n) {
          return n / 304.8;
        },
      },
      "mm:Inch": {
        formula: "divide the length value by 25.4",
        calculation(n) {
          return n / 25.4;
        },
      },
      "mm:nauticalMile": {
        formula: "divide the length value by 1.852e+6",
        calculation(n) {
          return n / 1852000;
        },
      },
      "micrometres:km": {
        formula: "divide the length value by 1e+9",
        calculation(n) {
          return n / 1000000000;
        },
      },
      "micrometres:meter": {
        formula: "divide the length value by 1e+6",
        calculation(n) {
          return n / 1000000;
        },
      },
      "micrometres:cm": {
        formula: "divide the length value by 10000",
        calculation(n) {
          return n / 10000;
        },
      },
      "micrometres:mm": {
        formula: "divide the length value by 1000",
        calculation(n) {
          return n / 1000;
        },
      },
      "micrometres:nanoMetre": {
        formula: "multiply the length value by 1000",
        calculation(n) {
          return n * 1000;
        },
      },
      "micrometres:mile": {
        formula:
          "for an approximate result, divide the length value by 1.609e+9",
        calculation(n) {
          return n / 1609000000;
        },
      },
      "micrometres:yard": {
        formula: "divide the length value by 914400",
        calculation(n) {
          return n / 914400;
        },
      },
      "micrometres:foot": {
        formula: "divide the length value by 304800",
        calculation(n) {
          return n / 304800;
        },
      },
      "micrometres:Inch": {
        formula: "divide the length value by 25400",
        calculation(n) {
          return n / 25400;
        },
      },
      "micrometres:nauticalMile": {
        formula: "divide the length value by 1.852e+9",
        calculation(n) {
          return n / 1852000000;
        },
      },
      "nanoMetre:km": {
        formula: "divide the length value by 1e+12",
        calculation(n) {
          return n / 1000000000000;
        },
      },
      "nanoMetre:meter": {
        formula: "divide the length value by 1e+9",
        calculation(n) {
          return n / 1000000000;
        },
      },
      "nanoMetre:cm": {
        formula: "divide the length value by 1e+7",
        calculation(n) {
          return n / 10000000;
        },
      },
      "nanoMetre:mm": {
        formula: "divide the length value by 1e+6",
        calculation(n) {
          return n / 1000000;
        },
      },
      "nanoMetre:micrometres": {
        formula: "divide the length value by 1000",
        calculation(n) {
          return n / 1000;
        },
      },
      "nanoMetre:mile": {
        formula:
          "for an approximate result, divide the length value by 1.609e+12",
        calculation(n) {
          return n / 1609000000000;
        },
      },
      "nanoMetre:yard": {
        formula: "divide the length value by 9.144e+8",
        calculation(n) {
          return n / 914400000;
        },
      },
      "nanoMetre:foot": {
        formula: "divide the length value by 3.048e+8",
        calculation(n) {
          return n / 304800000;
        },
      },
      "nanoMetre:Inch": {
        formula: "divide the length value by 2.54e+7",
        calculation(n) {
          return n / 25400000;
        },
      },
      "nanoMetre:nauticalMile": {
        formula: "divide the length value by 1.852e+12",
        calculation(n) {
          return n / 1852000000000;
        },
      },
      "mile:km": {
        formula:
          "for an approximate result, multiply the length value by 1.609",
        calculation(n) {
          return n * 1.609;
        },
      },
      "mile:meter": {
        formula: "for an approximate result, multiply the length value by 1609",
        calculation(n) {
          return n * 1609;
        },
      },
      "mile:cm": {
        formula:
          "for an approximate result, multiply the length value by 160900",
        calculation(n) {
          return n * 160900;
        },
      },
      "mile:mm": {
        formula:
          "for an approximate result, multiply the length value by 1.609e+6",
        calculation(n) {
          return n * 1609000;
        },
      },
      "mile:micrometres": {
        formula:
          "for an approximate result, multiply the length value by 1.609e+9",
        calculation(n) {
          return n * 1609000000;
        },
      },
      "mile:nanoMetre": {
        formula:
          "for an approximate result, multiply the length value by 1.609e+12",
        calculation(n) {
          return n * 1609000000000;
        },
      },
      "mile:yard": {
        formula: "multiply the length value by 1760",
        calculation(n) {
          return n * 1760;
        },
      },
      "mile:foot": {
        formula: "multiply the length value by 5280",
        calculation(n) {
          return n * 5280;
        },
      },
      "mile:Inch": {
        formula: "multiply the length value by 63360",
        calculation(n) {
          return n * 63360;
        },
      },
      "mile:nauticalMile": {
        formula: "for an approximate result, divide the length value by 1.151",
        calculation(n) {
          return n / 1.151;
        },
      },
      "yard:km": {
        formula: "for an approximate result, divide the length value by 1094",
        calculation(n) {
          return n / 1094;
        },
      },
      "yard:meter": {
        formula: "for an approximate result, divide the length value by 1.094",
        calculation(n) {
          return n / 1.094;
        },
      },
      "yard:cm": {
        formula: "multiply the length value by 91.44",
        calculation(n) {
          return n * 91.44;
        },
      },
      "yard:mm": {
        formula: "multiply the length value by 914.4",
        calculation(n) {
          return n * 914.4;
        },
      },
      "yard:micrometres": {
        formula: "multiply the length value by 914400",
        calculation(n) {
          return n * 914400;
        },
      },
      "yard:nanoMetre": {
        formula: "multiply the length value by 9.144e+8",
        calculation(n) {
          return n * 914400000;
        },
      },
      "yard:mile": {
        formula: "divide the length value by 1760",
        calculation(n) {
          return n / 1760;
        },
      },
      "yard:foot": {
        formula: "multiply the length value by 3",
        calculation(n) {
          return n * 3;
        },
      },
      "yard:Inch": {
        formula: "multiply the length value by 36",
        calculation(n) {
          return n * 36;
        },
      },
      "yard:nauticalMile": {
        formula: "for an approximate result, divide the length value by 2025",
        calculation(n) {
          return n / 2025;
        },
      },
      "foot:km": {
        formula: "for an approximate result, divide the length value by 3281",
        calculation(n) {
          return n / 3281;
        },
      },
      "foot:meter": {
        formula: "for an approximate result, divide the length value by 3.281",
        calculation(n) {
          return n / 3.281;
        },
      },
      "foot:cm": {
        formula: "multiply the length value by 30.48",
        calculation(n) {
          return n * 30.48;
        },
      },
      "foot:mm": {
        formula: "multiply the length value by 304.8",
        calculation(n) {
          return n * 304.8;
        },
      },
      "foot:micrometres": {
        formula: "multiply the length value by 304800",
        calculation(n) {
          return n * 304800;
        },
      },
      "foot:nanoMetre": {
        formula: "multiply the length value by 3.048e+8",
        calculation(n) {
          return n * 304800000;
        },
      },
      "foot:mile": {
        formula: "divide the length value by 5280",
        calculation(n) {
          return n / 5280;
        },
      },
      "foot:yard": {
        formula: "divide the length value by 3",
        calculation(n) {
          return n / 3;
        },
      },
      "foot:Inch": {
        formula: "multiply the length value by 12",
        calculation(n) {
          return n * 12;
        },
      },
      "foot:nauticalMile": {
        formula: "for an approximate result, divide the length value by 6076",
        calculation(n) {
          return n / 6076;
        },
      },
      "Inch:km": {
        formula: "for an approximate result, divide the length value by 39370",
        calculation(n) {
          return n / 39370;
        },
      },
      "Inch:meter": {
        formula: "divide the length value by 39.37",
        calculation(n) {
          return n / 39.37;
        },
      },
      "Inch:cm": {
        formula: "multiply the length value by 2.54",
        calculation(n) {
          return n * 2.54;
        },
      },
      "Inch:mm": {
        formula: "multiply the length value by 25.4",
        calculation(n) {
          return n * 25.4;
        },
      },
      "Inch:micrometres": {
        formula: "multiply the length value by 25400",
        calculation(n) {
          return n * 25400;
        },
      },
      "Inch:nanoMetre": {
        formula: "multiply the length value by 2.54e+7",
        calculation(n) {
          return n * 25400000;
        },
      },
      "Inch:mile": {
        formula: "divide the length value by 63360",
        calculation(n) {
          return n / 63360;
        },
      },
      "Inch:yard": {
        formula: "divide the length value by 36",
        calculation(n) {
          return n / 36;
        },
      },
      "Inch:foot": {
        formula: "divide the length value by 12",
        calculation(n) {
          return n / 12;
        },
      },
      "Inch:nauticalMile": {
        formula: "for an approximate result, divide the length value by 72910",
        calculation(n) {
          return n / 72910;
        },
      },
      "nauticalMile:km": {
        formula: "multiply the length value by 1.852",
        calculation(n) {
          return n * 1.852;
        },
      },
      "nauticalMile:meter": {
        formula: "multiply the length value by 1852",
        calculation(n) {
          return n * 1852;
        },
      },
      "nauticalMile:cm": {
        formula: "multiply the length value by 185200",
        calculation(n) {
          return n * 185200;
        },
      },
      "nauticalMile:mm": {
        formula: "multiply the length value by 1.852e+6",
        calculation(n) {
          return n * 1852000;
        },
      },
      "nauticalMile:micrometres": {
        formula: "multiply the length value by 1.852e+9",
        calculation(n) {
          return n * 1852000000;
        },
      },
      "nauticalMile:nanoMetre": {
        formula: "multiply the length value by 1.852e+12",
        calculation(n) {
          return n * 1852000000000;
        },
      },
      "nauticalMile:mile": {
        formula:
          "for an approximate result, multiply the length value by 1.151",
        calculation(n) {
          return n * 1.151;
        },
      },
      "nauticalMile:yard": {
        formula: "for an approximate result, multiply the length value by 2025",
        calculation(n) {
          return n * 2025;
        },
      },
      "nauticalMile:foot": {
        formula: "for an approximate result, multiply the length value by 6076",
        calculation(n) {
          return n * 6076;
        },
      },
      "nauticalMile:Inch": {
        formula: "for an approximate result, multiply the length value by 72910",
        calculation(n) {
          return n * 72910;
        },
      },
    },
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
    variants: {
      "tonne:kilogram": {
        formula: "multiply the area value by 1e+6",
        calculation(n) {
          return n * 1000000;
        },
      },
      "tonne:gram": {},
      "tonne:milligram": {},
      "tonne:microgram": {},
      "tonne:imperialTone": {},
      "tonne:usTon": {},
      "tonne:stone": {},
      "tonne:pound": {},
      "tonne:ounce": {},
      "kilogram:tonne": {},
      "kilogram:gram": {},
      "kilogram:milligram": {},
      "kilogram:microgram": {},
      "kilogram:imperialTone": {},
      "kilogram:usTon": {},
      "kilogram:stone": {},
      "kilogram:pound": {},
      "kilogram:ounce": {},
      "gram:tonne": {},
      "gram:kilogram": {},
      "gram:milligram": {},
      "gram:microgram": {},
      "gram:imperialTone": {},
      "gram:usTon": {},
      "gram:stone": {},
      "gram:pound": {},
      "gram:ounce": {},
      "milligram:tonne": {},
      "milligram:kilogram": {},
      "milligram:gram": {},
      "milligram:microgram": {},
      "milligram:imperialTone": {},
      "milligram:usTon": {},
      "milligram:stone": {},
      "milligram:pound": {},
      "milligram:ounce": {},
      "microgram:tonne": {},
      "microgram:kilogram": {},
      "microgram:gram": {},
      "microgram:milligram": {},
      "microgram:imperialTone": {},
      "microgram:usTon": {},
      "microgram:stone": {},
      "microgram:pound": {},
      "microgram:ounce": {},
      "imperialTone:tonne": {},
      "imperialTone:kilogram": {},
      "imperialTone:gram": {},
      "imperialTone:milligram": {},
      "imperialTone:microgram": {},
      "imperialTone:usTon": {},
      "imperialTone:stone": {},
      "imperialTone:pound": {},
      "imperialTone:ounce": {},
      "usTon:tonne": {},
      "usTon:kilogram": {},
      "usTon:gram": {},
      "usTon:milligram": {},
      "usTon:microgram": {},
      "usTon:imperialTone": {},
      "usTon:stone": {},
      "usTon:pound": {},
      "usTon:ounce": {},
      "stone:tonne": {},
      "stone:kilogram": {},
      "stone:gram": {},
      "stone:milligram": {},
      "stone:microgram": {},
      "stone:imperialTone": {},
      "stone:usTon": {},
      "stone:pound": {},
      "stone:ounce": {},
      "pound:tonne": {},
      "pound:kilogram": {},
      "pound:gram": {},
      "pound:milligram": {},
      "pound:microgram": {},
      "pound:imperialTone": {},
      "pound:usTon": {},
      "pound:stone": {},
      "pound:ounce": {},
      "ounce:tonne": {},
      "ounce:kilogram": {},
      "ounce:gram": {},
      "ounce:milligram": {},
      "ounce:microgram": {},
      "ounce:imperialTone": {},
      "ounce:usTon": {},
      "ounce:stone": {},
      "ounce:pound": {},
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
      "second:minute": {
        formula: "divide the time value by 60",
        calculation(n) {
          return n / 60;
        },
      },
      "second:hour": {
        formula: "divide the time value by 3600",
        calculation(n) {
          return n / 3600;
        },
      },
      "minute:second": {
        formula: "multiply the time value by 60",
        calculation(n) {
          return n * 60;
        },
      },
      "minute:hour": {
        formula: "divide the time value by 60",
        calculation(n) {
          return n / 60;
        },
      },
      "hour:second": {
        formula: "multiply the time value by 3600",
        calculation(n) {
          return n * 3600;
        },
      },
      "hour:minute": {
        formula: "multiply the time value by 60",
        calculation(n) {
          return n * 60;
        },
      },
    },
  },
};
