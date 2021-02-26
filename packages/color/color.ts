export const PRIMARIES = ['red', 'blue', 'yellow'];
export const CRAYOLA_24 = [
  'red',
  'yellow',
  'blue',
  'brown',
  'orange',
  'green',
  'violet',
  'black',
  'carnation pink',
  'yellow orange',
  'blue green',
  'red violet',
  'red orange',
  'yellow green',
  'blue violet',
  'white',
  'violet red',
  'dandelion',
  'cerulean',
  'apricot',
  'scarlet',
  'green yellow',
  'indigo',
  'gray-ish',
  'merda',
  'oi',
  'oi2',
  'oi3',
  'oi4',
  'oi5',
  'oi6',
];

export class Color {
  static isPrimary(color: string): boolean {
    console.log('sadsad45678');
    return PRIMARIES.indexOf(color) > -1;
  }

  static random(): string {
    return CRAYOLA_24[Math.floor(Math.random() * CRAYOLA_24.length)];
  }
}