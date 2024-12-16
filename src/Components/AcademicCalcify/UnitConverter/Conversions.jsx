// conversions.js

export const conversions = {
    length: {
      Meters: {
        Kilometers: 0.001,
        Centimeters: 100,
        Millimeters: 1000,
        Inches: 39.37,
        Feet: 3.281,
        Yards: 1.094,
        Miles: 0.000621,
      },
      Kilometers: {
        Meters: 1000,
        Centimeters: 100000,
        Millimeters: 1000000,
        Inches: 39370.1,
        Feet: 3280.84,
        Yards: 1093.61,
        Miles: 0.621371,
      },
      Centimeters: {
        Meters: 0.01,
        Kilometers: 0.00001,
        Millimeters: 10,
        Inches: 0.393701,
        Feet: 0.0328084,
        Yards: 0.0109361,
        Miles: 6.2137e-6,
      },
      Millimeters: {
        Meters: 0.001,
        Kilometers: 1e-6,
        Centimeters: 0.1,
        Inches: 0.0393701,
        Feet: 0.00328084,
        Yards: 0.00109361,
        Miles: 6.2137e-7,
      },
      Inches: {
        Meters: 0.0254,
        Kilometers: 2.54e-5,
        Centimeters: 2.54,
        Millimeters: 25.4,
        Feet: 0.0833333,
        Yards: 0.0277778,
        Miles: 1.5783e-5,
      },
      Feet: {
        Meters: 0.3048,
        Kilometers: 0.0003048,
        Centimeters: 30.48,
        Millimeters: 304.8,
        Inches: 12,
        Yards: 0.333333,
        Miles: 0.000189394,
      },
      Yards: {
        Meters: 0.9144,
        Kilometers: 0.0009144,
        Centimeters: 91.44,
        Millimeters: 914.4,
        Inches: 36,
        Feet: 3,
        Miles: 0.000568182,
      },
      Miles: {
        Meters: 1609.34,
        Kilometers: 1.60934,
        Centimeters: 160934,
        Millimeters: 1609340,
        Inches: 63360,
        Feet: 5280,
        Yards: 1760,
      },
    },
  
    weight: {
      Grams: {
        Kilograms: 0.001,
        Ounces: 0.035274,
        Pounds: 0.00220462,
        Stones: 0.000157473,
      },
      Kilograms: {
        Grams: 1000,
        Ounces: 35.274,
        Pounds: 2.20462,
        Stones: 0.157473,
      },
      Ounces: {
        Grams: 28.3495,
        Kilograms: 0.0283495,
        Pounds: 0.0625,
        Stones: 0.00446429,
      },
      Pounds: {
        Grams: 453.592,
        Kilograms: 0.453592,
        Ounces: 16,
        Stones: 0.0714286,
      },
      Stones: {
        Grams: 6350.29,
        Kilograms: 6.35029,
        Ounces: 224,
        Pounds: 14,
      },
    },
  
    volume: {
      Milliliters: {
        Liters: 0.001,
        Gallons: 0.0002642,
        FluidOunces: 0.0338,
      },
      Liters: {
        Milliliters: 1000,
        Gallons: 0.2642,
      },
      CubicMeters: {
        Liters: 1000,
        Gallons: 264.172,
      },
      FluidOunces: {
        Milliliters: 29.5735,
        Gallons: 0.0078125,
      },
      Pints: {
        Liters: 0.4732,
        Gallons: 0.125,
      },
      Gallons: {
        Liters: 3.785,
        Pints: 8,
      },
      CubicFeet: {
        Liters: 28.3168,
      },
    },
  
    temperature: {
      Celsius: (value, target) =>
        target === "Fahrenheit" ? value * 1.8 + 32 : value + 273.15,
      Fahrenheit: (value, target) =>
        target === "Celsius" ? (value - 32) / 1.8 : (value - 32) / 1.8 + 273.15,
      Kelvin: (value, target) =>
        target === "Celsius" ? value - 273.15 : (value - 273.15) * 1.8 + 32,
    },
  
    speed: {
      MetersPerSecond: { KilometersPerHour: 3.6, MilesPerHour: 2.23694 },
      KilometersPerHour: { MetersPerSecond: 0.277778, MilesPerHour: 0.621371 },
      MilesPerHour: { MetersPerSecond: 0.44704, KilometersPerHour: 1.60934 },
      FeetPerSecond: { MetersPerSecond: 0.3048 },
    },
  
    time: {
      Seconds: { Minutes: 1 / 60, Hours: 1 / 3600, Days: 1 / 86400 },
      Minutes: { Seconds: 60, Hours: 1 / 60, Days: 1 / 1440 },
      Hours: { Seconds: 3600, Minutes: 60, Days: 1 / 24 },
      Days: { Seconds: 86400, Minutes: 1440, Hours: 24 },
    },
  
    energy: {
      Joules: {
        Kilojoules: 0.001,
        Calories: 0.239006,
        Kilocalories: 0.000239006,
      },
      Kilojoules: { Joules: 1000, Calories: 239.006, Kilocalories: 0.239006 },
      Calories: { Joules: 4.184, Kilojoules: 0.004184, Kilocalories: 0.001 },
      Kilocalories: { Joules: 4184, Kilojoules: 4.184, Calories: 1000 },
    },
  
    pressure: {
      Pascals: { Kilopascals: 0.001, Bar: 0.00001, PSI: 0.000145038 },
      Kilopascals: { Pascals: 1000, Bar: 0.01, PSI: 0.145038 },
      Bar: { Pascals: 100000, Kilopascals: 100, PSI: 14.5038 },
      PSI: { Pascals: 6894.76, Kilopascals: 0.06895, Bar: 0.06895 },
    },
  
    fuelEconomy: {
      LitersPer100Km: { MilesPerGallon: 235.214583 },
      MilesPerGallon: { LitersPer100Km: 235.214583 },
    },
  };
  