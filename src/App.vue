<template>
  <div class="container">
    <div>
      <Reservation />
    </div>
  </div>
</template>

<script>
import Reservation from './components/Reservation.vue'

export default {
  name: 'App',
  components: {
    Reservation
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
