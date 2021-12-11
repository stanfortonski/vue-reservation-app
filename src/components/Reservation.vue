<template>
  <ReservationCard :reservation="reservation" />
</template>

<script>
import ReservationCard from './ReservationCard'

export default {
  name: 'Reservation',

  data() {
    return {
      reservation: {
        votes: 123,
        rating: 3.5,
        price: 298
      }
    }
  },

  components: {
    ReservationCard
  }
}
</script>
