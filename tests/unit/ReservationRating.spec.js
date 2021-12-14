import { mount } from '@vue/test-utils'
import ReservationRating from '@/components/ReservationRating.vue'

describe('ReservationRating.vue', () => {
  it('render', () => {
    const propsData = {
      votes: 300,
      rating: 2.5
    }

    const wrapper = mount(ReservationRating, {
      propsData
    });

    expect(wrapper.html()).toMatch(`${propsData.votes}`);
    expect(wrapper.findAll('.fas.fa-star').length).toBe(2);
    expect(wrapper.findAll('.fas.fa-star-half-alt').length).toBe(1);
    expect(wrapper.findAll('.far.fa-star').length).toBe(2);

  })
})
