import { shallowMount } from '@vue/test-utils'
import Reservation from '@/components/Reservation.vue'

describe('Reservation.vue', () => {
  it('render', () => {
    const msg = 'Reservation'
    const wrapper = shallowMount(Reservation)
    expect(wrapper.text()).toMatch(msg)
  })
})
