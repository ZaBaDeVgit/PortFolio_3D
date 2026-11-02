import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  { path: '', title: /Del código a lo/ },
  { path: 'about-me/', title: /Hola, soy Juan José/ },
  { path: 'portfolio/', title: /Código en acción/ },
  { path: 'skills/', title: /La idea primero/ },
  { path: 'contact/', title: /Las buenas ideas/ },
];

for (const route of pages) {
  test(`${route.path || 'home'}: exported route, assets and accessibility`, async ({
    page,
  }) => {
    const errors: string[] = [];
    const broken: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => {
      if (
        response.status() >= 400 &&
        new URL(response.url()).hostname === '127.0.0.1'
      )
        broken.push(response.url());
    });
    const response = await page.goto(route.path || './');
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveText(route.title);
    await page.evaluate(() => document.fonts.ready);
    await expect
      .poll(() =>
        page
          .locator('img')
          .evaluateAll((images) =>
            images.every(
              (image) =>
                (image as HTMLImageElement).complete &&
                (image as HTMLImageElement).naturalWidth > 0,
            ),
          ),
      )
      .toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
    expect(broken).toEqual([]);
  });
}

test('project filters, search and reset work', async ({ page }) => {
  await page.goto('portfolio/');
  await expect(page.locator('.project-card')).toHaveCount(4);
  await page.getByRole('button', { name: 'Juegos', exact: true }).click();
  await expect(page.locator('.project-card')).toHaveCount(1);
  await expect(
    page.getByRole('heading', { name: 'Memory Game' }),
  ).toBeVisible();
  await page.getByRole('button', { name: /Todos/ }).click();
  await page.getByRole('searchbox').fill('quiz');
  await expect(page.locator('.project-card')).toHaveCount(1);
  await page.getByRole('searchbox').fill('not-a-project');
  await expect(
    page.getByRole('heading', { name: 'No hay coincidencias' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Limpiar filtros' }).click();
  await expect(page.locator('.project-card')).toHaveCount(4);
});

test('contact draft never claims to send data', async ({ page }) => {
  await page.goto('contact/');
  // In CI this also permits an intentionally configured EmailJS form, without
  // contacting the real email service or sending a test message.
  const prepare = page.getByRole('button', { name: 'Preparar mensaje' });
  if (!(await prepare.count())) {
    await expect(
      page.getByRole('button', { name: 'Enviar mensaje' }),
    ).toBeVisible();
    return;
  }
  await page.getByLabel('Tu nombre').fill('Persona de prueba');
  await page.getByLabel('Tu email').fill('prueba@example.com');
  await page
    .getByLabel('¿Qué tienes en mente?')
    .fill('Me gustaría hablar de un proyecto de desarrollo web.');
  await prepare.click();
  await expect(page.getByRole('status')).toContainText('no se ha enviado');
  await expect(page.getByLabel('Tu mensaje listo para copiar')).toContainText(
    'Persona de prueba',
  );
  await expect(
    page.getByRole('button', { name: 'Copiar mensaje' }),
  ).toBeVisible();
});

test('3D loads, pauses and has a static reduced-motion mode', async ({
  page,
}) => {
  await page.goto('./');
  await expect(page.locator('canvas')).toBeVisible();
  const pause = page.getByRole('button', { name: 'Pausar animación 3D' });
  await pause.click();
  await expect(
    page.getByRole('button', { name: 'Reanudar animación 3D' }),
  ).toHaveAttribute('aria-pressed', 'true');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.art-bottom')).toContainText(
    'Movimiento reducido',
  );
});

test('mobile navigation opens, closes and follows links', async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, 'Mobile navigation only');
  await page.goto('./');
  const toggle = page.getByRole('button', { name: 'Abrir menú' });
  await toggle.click();
  await expect(
    page.getByRole('navigation', { name: 'Navegación móvil' }),
  ).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await page
    .getByRole('navigation', { name: 'Navegación móvil' })
    .getByRole('link', { name: 'Proyectos' })
    .click();
  await expect(page.locator('h1')).toContainText('Código en acción');
  await expect(
    page.getByRole('button', { name: 'Abrir menú' }),
  ).toHaveAttribute('aria-expanded', 'false');
});

test('404 is helpful and preserves the repository path', async ({ page }) => {
  const response = await page.goto('this-page-does-not-exist/');
  expect(response?.status()).toBe(404);
  await page.getByRole('link', { name: 'Volver al inicio' }).click();
  await expect(page.locator('h1')).toContainText('Del código a lo');
});

test('layout fits narrow phones and tablets', async ({ page }) => {
  for (const width of [320, 375, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('./');
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `overflow at ${width}px`,
    ).toBe(true);
  }
});

test('WebGL unavailable: a local illustration keeps the hero visible', async ({
  page,
}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = new Proxy(original, {
      apply(target, element, args) {
        if (String(args[0]).includes('webgl')) return null;
        return Reflect.apply(target, element, args);
      },
    });
  });
  await page.goto('./');
  await expect(page.locator('.sculpture-fallback')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Del código a lo');
  await expect(page.locator('.sculpture-fallback')).toHaveCSS(
    'background-image',
    /sculpture\.svg/,
  );
});
