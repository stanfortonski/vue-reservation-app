<template>
  <div class="card">
    <form @submit="reseve">
      <div class="card-header">
        <div>
          <h2 class="price">{{reservation.price}} zł</h2>
          <input type="hidden" name="price" :value="reservation.price" />
          <div>
            <ReservationRating :rating="reservation.rating" :votes="reservation.votes" />
          </div>
        </div>
        <div>
          <Button type="submit" :disabled="reserved">
            <template v-if="!reserved">Reserve</template>
            <template v-else>Reserved!</template>
          </Button>
        </div>
      </div>

      <div class="card-body">
        <DatePicker :allowedDate="reservation.allowedDate" />
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

  data(){
    return {
      reserved: false
    }
  },

  props: {
    reservation: { required: true, type: Object }
  },

  components: {
    ReservationRating,
    Button,
    DatePicker
  },

  methods: {
    reseve(e) {
      e.preventDefault();
      const elements = e.target.elements;
      const values = {
        name: elements.price.value,
        start: elements.start.value,
        end: elements.end.value
      }

      console.log(values);
      this.reserved = true;
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
