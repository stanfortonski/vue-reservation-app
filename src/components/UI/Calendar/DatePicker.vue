<template>
  <div class="inputs">
    <span class="date" @click="() => toggleCalendar('start')">
      <input type="hidden" :value="toInput(dateSelected.start)" name="start" />
      {{toLabel(dateSelected.start)}}
      <i v-if="dateSelected.start" class="fas fa-times" @click="() => removeDate('start')"></i>
    </span>
    <i class="fas fa-arrow-right"></i>
    <span class="date" @click="() => toggleCalendar('end')">
      <input type="hidden" :value="toInput(dateSelected.end)" name="end" />
      {{toLabel(dateSelected.end)}}
      <i v-if="dateSelected.end" class="fas fa-times" @click="() => removeDate('end')"></i>
    </span>
  </div>

  <Calendar v-if="show" :dateSelected="dateSelected" :selectDay="selectDay" :unSelectDay="unSelectDay" :allowedDate="allowedDate" />
</template>

<script>
import Calendar from './Calendar'

export default {
  name: 'DatePicker',

  props: {
    allowedDate: {required: true, type: Object}
  },

  components: {
    Calendar,
  },

  data(){
    const date = new Date();

    return {
      show: false,
      dateSelected: {
        start: { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() },
        end: { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }
      },
      type: 'start'
    }
  },

  methods: {
    toLabel(day){
      if (day){
        const date = this.getDate(day);
        const month = date.toDateString().split(' ')[1];
        return date.getDate()+' '+month+' '+date.getFullYear();
      }
      return '';
    },

    toInput(day){
      if (day){
        const date = this.getDate(day);
        return date.toISOString().split('T')[0]
      }
      return '';
    },

    toggleCalendar(type){
      this.show = !this.show;
      this.type = type;
    },

    removeDate(type){
      this.dateSelected[type] = null;
    },

    selectDay(day){
      if (this.type == 'start'){
        if (this.dateSelected.end && this.getDate(day).getTime() > this.getDate(this.dateSelected.end).getTime())
          return false;
      }
      else {
        if (this.dateSelected.start && this.getDate(day).getTime() < this.getDate(this.dateSelected.start).getTime())
          return false;
      }

      this.dateSelected[this.type] = day;
      return true;
    },

    getDate(day){
      return new Date(day.year, day.month, day.day);
    },

    unSelectDay(){
      this.removeDate(this.type);
    }
  }
}
</script>

<style lang="scss" scoped>
.inputs{
  border: #3c8f3f solid 1px;
  border-radius: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.date{
  padding: 1em;
  border-radius: 2em;
  width: 100%;
  margin: .25em;
  text-align: center;
  background: #3c8f3f11;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  color: #3c8f3f;
  font-weight: 700;
  position: relative;
  cursor: pointer;
}

.fas.fa-times{
  color: #aaa;
  margin-left: 1em;
  transition: .25s all;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
}
</style>
