import { readFileSync } from 'node:fs';

const files = [
  'index.html',
  'src/App.tsx',
  'public/seo/deep-cleaning-villa-bali.html',
  'public/seo/jasa-cleaning-canggu.html',
  'public/seo/villa-cleaning-seminyak.html',
  'public/seo/home-cleaning-ubud.html',
  'public/seo/cuci-sofa-bali.html',
  'public/seo/poles-lantai-bali.html',
].map((path) => [path, readFileSync(path, 'utf8')]);

const all = files.map(([path, text]) => `\n--- ${path} ---\n${text}`).join('\n');

const expected = [
  'IDR 2.887.500,00 - 5.197.500,00',
  'IDR 2.062.500,00 - 3.025.000,00',
  'IDR 1.925.000,00 - 3.025.000,00',
  'IDR 11.000.000,00 - 33.000.000,00',
  'IDR 247.500,00 - 1.925.000,00',
  'IDR 4.262.500,00',
  'IDR 19.800.000,00',
  'IDR 30.250.000,00',
  'IDR 1.842.500,00',
  'IDR 1.375.000,00',
  'IDR 522.500,00',
  'IDR 467.500,00',
  'Rp 247.500',
  'Rp 33.000.000',
  '2887500',
  '33000000',
  '522500',
];

const forbidden = [
  'IDR 5.775.000,00',
  'IDR 10.395.000,00',
  'IDR 4.125.000,00',
  'IDR 6.050.000,00',
  'IDR 3.850.000,00',
  'IDR 22.000.000,00',
  'IDR 66.000.000,00',
  'IDR 495.000,00 - 3.850.000,00',
  'Rp 495.000',
  'Rp 66.000.000',
  '5775000',
  '66000000',
  '1045000',
];

const missing = expected.filter((value) => !all.includes(value));
const presentForbidden = forbidden.filter((value) => all.includes(value));

if (missing.length || presentForbidden.length) {
  if (missing.length) {
    console.error('Missing 5x pricing values:');
    for (const value of missing) console.error(`- ${value}`);
  }

  if (presentForbidden.length) {
    console.error('Found old 10x pricing values:');
    for (const value of presentForbidden) console.error(`- ${value}`);
  }

  process.exit(1);
}

console.log('Pricing verification passed: all checked values use 5x pricing.');
