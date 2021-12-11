<template>
  <i class="star" :class="classOfStar"></i>
</template>

<script>
export default {
  name: 'Star',

  props: {
    type: { required: true, type: String }
  },

  computed: {
    classOfStar() {
      switch (this.type) {
        case 'full':
          return 'fas fa-star';
        case 'empty':
          return 'far fa-star';
        case 'half':
          return 'fas fa-star-half-alt';
      }
      return '';
    }
  }
}
</script>

<style scoped>
.star {
  color: #3c8f3f;
}
</style>
