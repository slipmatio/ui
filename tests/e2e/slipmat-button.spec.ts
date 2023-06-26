import { test, expect } from '@playwright/test'

test('homepage should not have scrollbars', async ({ page }) => {
  await page.goto('/')

  const html = await page.$('html')
  if (html) {
    const scrollWidth = Number(await html.getAttribute('scrollWidth'))
    const clientWidth = Number(await html.getAttribute('clientWidth'))
    const scrollBarWidth = scrollWidth - clientWidth

    expect(scrollBarWidth).toBe(0)
  }
})

test('button text should change when working', async ({ page }) => {
  await page.goto('/')

  const button = page.getByTestId('test-working')
  expect(await button.textContent()).toContain('test working')

  await button.click()
  expect(await button.textContent()).toContain('is working')

  await expect.soft(page.getByTestId('test-working')).toHaveText('test working')
})
