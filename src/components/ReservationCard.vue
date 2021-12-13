<template>
  <div class="card">
    <form @submit="reseve">
      <div class="card-header">
        <div>
          <h2 class="price">{{reservation.price}} zł</h2>
          <div>
            <ReservationRating :rating="reservation.rating" :votes="reservation.votes" />
          </div>
        </div>
        <div>
          <Button type="submit">Reserve</Button>
        </div>
      </div>

      <div class="card-body">
        <DatePicker />
      </div>
    </form>
  </div>
</template>

<script>
import ReservationRating from './ReservationRating'
import Button from './UI/Button'
import DatePicker from './UI/Calendar/DatePicker'

export default {
  name: 'ReservationCard',

  props: {
    reservation: { required: true, type: Object }
  },

  components: {
    ReservationRating,
    Button,
    DatePicker
  },

  methods: {
    reseve (e) {
      e.preventDefault();
      console.log('Reserve');
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 400px;
  height: 180px;
  position: relative;
}

.card-body{
  margin-top: 1em;
}

.price {
  margin: 0;
  margin-bottom: .3em;
}
</style>
