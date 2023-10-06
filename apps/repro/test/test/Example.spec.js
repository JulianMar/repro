import { mountSuspended } from 'nuxt-vitest/utils'
import App from '../app.vue'

describe('Mounted App', async () => {
  const wrapper = await mountSuspended(App)

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
