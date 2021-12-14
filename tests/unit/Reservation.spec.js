import { mount } from '@vue/test-utils'
import Reservation from '@/components/Reservation.vue'

describe('Reservation.vue', () => {
  it('render', () => {
    const msg = 'Reserve';
    const wrapper = mount(Reservation);
    expect(wrapper.html()).toMatch(msg);
  })
})
