import { mount } from '@vue/test-utils'
import Component from './SlipmatButton.vue'

test('components/SlipmatButton.vue', async () => {
  expect(Component).toBeTruthy()
  const wrapper = mount(Component)
  expect(wrapper).toBeTruthy()
})
