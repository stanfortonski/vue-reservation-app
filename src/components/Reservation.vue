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
        price: 298,
        allowedDate: {
          start: '2021-06-10',
          end: '2022-01-01'
        }
      }
    }
  },

  components: {
    ReservationCard
  }
}
</script>
