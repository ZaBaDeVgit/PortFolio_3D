import { createServer } from 'node:http';
import { stat, readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('out');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.ico': 'image/x-icon',
};
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://preview');
    let pathname = decodeURIComponent(url.pathname);
    if (basePath && pathname === basePath) {
      res.writeHead(308, { Location: `${basePath}/` });
      res.end();
      return;
    }
    if (basePath && !pathname.startsWith(`${basePath}/`))
      throw new Error('Not found');
    pathname = pathname.slice(basePath.length);
    let file = resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + sep))
      throw new Error('Not found');
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    const contents = await readFile(file);
    res.writeHead(200, {
      'Content-Type': types[extname(file)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    res.end(req.method === 'HEAD' ? undefined : contents);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(
      await readFile(resolve(root, '404.html')).catch(() => '404 — Not found'),
    );
  }
}).listen(Number(process.env.PORT || 4173), '0.0.0.0', () =>
  console.log(
    `Static portfolio: http://0.0.0.0:${process.env.PORT || 4173}${basePath}/`,
  ),
);
