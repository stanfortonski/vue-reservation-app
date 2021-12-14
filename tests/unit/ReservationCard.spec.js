import { mount } from '@vue/test-utils'
import ReservationCard from '@/components/ReservationCard.vue'

const reservation = {
  price: 100,
  votes: 69,
  rating: 5,
  allowedDate: {
    start: '2021-01-01',
    end: '2022-01-01'
  }
}

describe('ReservationCard.vue', () => {
  it('render', () => {
    const wrapper = mount(ReservationCard, {
      propsData: {
        reservation
      }
    });

    expect(wrapper.html()).toMatch(`${reservation.price}`);
    expect(wrapper.html()).toMatch(`${reservation.votes}`);
    expect(wrapper.findAll('.fas.fa-star').length).toBe(reservation.rating);
  })

  it('form', async () => {
    const wrapper = mount(ReservationCard, {
      propsData: {
        reservation
      }
    });

    expect(wrapper.html()).toMatch('Reserve');

    await wrapper.find('form').trigger('submit');

    expect(wrapper.html()).toMatch('Reserved!');
  })
})
