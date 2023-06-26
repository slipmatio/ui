import { test, expect } from '@playwright/test'

test('button text should change when working', async ({ page }) => {
  await page.goto('/')

  const button = page.getByTestId('test-working')
  expect(await button.textContent()).toContain('test working')

  await button.click()
  expect(await button.textContent()).toContain('is working')

  await expect.soft(page.getByTestId('test-working')).toHaveText('test working')
})

test('fullscreen button should be wider', async ({ page }) => {
  await page.goto('/')

  const normalButton = Number((await page.getByTestId('normal-width').boundingBox()).width)
  const fullButton = Number((await page.getByTestId('full-width').boundingBox()).width)

  expect(normalButton < fullButton).toBe(true)
})
