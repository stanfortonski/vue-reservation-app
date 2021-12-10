<template>
  <div class="card">
    <div class="card-header">
      <div>
        <h2 class="price">250 zł</h2>
        <div>
          <Star /><Star /><Star /><Star /><Star /> <span class="amounts">123</span>
        </div>
      </div>
      <div>
        <Button>Reserve</Button>
      </div>
    </div>

    <div class="card-body" style="margin-top: 1em;">
      <div class="inputs">
        <input type="text" value="12 Jan 2021" />
        <i class="fas fa-arrow-right"></i>
        <input type="text" value="20 Jan 2021" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './UI/Button'
import Star from './UI/Star'

export default {
  name: 'Reservation',

  components: {
    Button,
    Star
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  box-shadow: 2px 16px 64px -22px rgba(0, 0, 0, 0.5);
  border-radius: 1.5em;
  padding: 1.5em;
  width: 364px;

  .card-header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
  }
}

.inputs{
  border: #3c8f3f solid 1px;
  border-radius: 2em;
  padding: .4em 0;
}

.amounts{
  color: #b3b3b3;
  font-weight: bold;
  margin: 4px;
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

  &:focus{
    outline: none;
  }
}
</style>
