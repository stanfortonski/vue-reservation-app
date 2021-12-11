<template>
  <span class="rating">
    <template v-for="(star, index) in stars" :key="index">
      <Star :type="star"  />
    </template>
  </span>
  <span class="votes">{{votes}}</span>
</template>

<script>
import Star from './UI/Star'

export default {
  name: 'ReservationRating',

  props: {
    votes: { required: true, type: Number },
    rating: { required: true, type: Number }
  },

  components: {
    Star
  },

  computed: {
    stars() {
      var stars = ['empty', 'empty', 'empty', 'empty', 'empty'];
      stars = stars.map((star, index) => {
        if (parseInt(this.rating) > index)
          return 'full';
        else if (this.rating > index)
          return 'half';
        return star;
      })

      return stars;
    }
  }
}
</script>

<style scoped>
.votes{
  color: #b3b3b3;
  font-weight: bold;
  margin: 4px;
}
</style>
