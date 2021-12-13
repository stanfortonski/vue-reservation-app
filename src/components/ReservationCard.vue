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

      <div class="card-body" style="margin-top: 1em;">
        <div class="inputs">
          <input type="text" value="12 Jan 2021" />
          <i class="fas fa-arrow-right"></i>
          <input type="text" value="20 Jan 2021" />
        </div>
      </div>
    </form>
  </div>

  <Calendar />
</template>

<script>
import ReservationRating from './ReservationRating'
import Button from './UI/Button'
import Calendar from './UI/Calendar/Calendar'

export default {
  name: 'ReservationCard',

  props: {
    reservation: { required: true, type: Object }
  },

  components: {
    ReservationRating,
    Button,
    Calendar
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

.inputs{
  border: #3c8f3f solid 1px;
  border-radius: 2em;
  padding: .4em 0;
}

.price {
  margin: 0;
  margin-bottom: .3em;
}

input{
  padding: .5em;
  border-radius: 1em;
  width: 42%;
  margin: .25em;
  border: none;
  text-align: center;
}
</style>
