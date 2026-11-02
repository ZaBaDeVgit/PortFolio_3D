// Reproducible, local social artwork. No external image or font service.
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
const sculpture = await sharp(await readFile('public/sculpture.svg'))
  .resize(600, 600)
  .png()
  .toBuffer();
const background = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#10110f"/><path d="M55 100H1145M55 560H1145" stroke="#303629"/><g font-family="sans-serif"><text x="60" y="70" fill="#c4ef67" font-weight="bold" font-size="32">ZaBaDeV.</text><text x="60" y="190" fill="#9b9d94" font-size="14" letter-spacing="3">FULL STACK DEVELOPER &amp; FORMADOR</text><text x="55" y="300" fill="#f3f3ed" font-size="72" font-weight="bold" letter-spacing="-4">Del código a lo</text><text x="55" y="385" fill="#c4ef67" font-size="72" font-weight="bold" letter-spacing="-4">extraordinario.</text><text x="60" y="465" fill="#9b9d94" font-size="20">Juan José Zabala Ríos</text><text x="60" y="600" fill="#9b9d94" font-size="16">Desarrollo web · Experiencias digitales · Formación online</text></g></svg>`,
);
await sharp(background)
  .composite([{ input: sculpture, left: 615, top: 16 }])
  .png()
  .toFile('public/og-image.png');
