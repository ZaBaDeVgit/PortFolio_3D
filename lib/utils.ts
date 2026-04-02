// Helper to prefix paths for GitHub Pages deployment
export function assetPath(path: string): string {
  if (!path.startsWith('/')) return path;
  return `/PortFolio_3D${path}`;
}
