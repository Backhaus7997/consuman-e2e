import { test, expect } from '@playwright/test';

test.setTimeout(120000);

async function handleLogin(page) {
  await page.getByLabel('Email').fill('claims@consuman.com');
  await page.getByLabel('Password').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
}

test('login', async ({ page }) => {
    await page.goto('http://localhost:3030');
    await handleLogin(page);
    await page.getByText('Solicitudes De Trabajo').click()
    await page.getByRole('button', { name: /^Crear$/ }).click();
    await page.locator('input[name="title"]').fill('Solicitud Prueba');
    await page.waitForTimeout(2000); 

    await page.getByRole('combobox', { name: /Activos/i }).click();
    await page.locator('label:has-text("Activos")').locator('..').getByRole('combobox').click();

    await page.waitForTimeout(2000); 
    const buscador = page.locator('input.dx-texteditor-input[aria-label="Buscar"][role="textbox"]').first();
    await page.waitForTimeout(2000); 
    await buscador.waitFor({ state: 'visible' });
    await buscador.fill('ACTIVO_NOMBRE');
    await page.waitForTimeout(2000); 

    await page.locator('[role="listbox"] [role="option"]').first().click();
    await page.waitForTimeout(2000); 

});