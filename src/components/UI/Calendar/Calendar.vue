<template>
  <div class="calendar card">
    <nav class="card-header">
      <i class="fas fa-lg fa-chevron-left change-month" @click="prevMonth"></i>
      <div class="info">{{monthName}} {{year}}</div>
      <i class="fas fa-lg fa-chevron-right change-month" @click="nextMonth"></i>
    </nav>

    <div class="weekdays">
      <template v-for="(day, index) in daysNames" :key="index">
        <div>{{day}}</div>
      </template>
    </div>

    <div class="days">
      <template v-for="(day, index) in days" :key="index">
          <div v-if="dateSelected.start && getDate(dateSelected.start).getTime() === getDate(day).getTime()" class="selected start" :class="day.type" @click="() => unSelectDay(day)">{{day.day}}</div>
          <div v-else-if="dateSelected.end && getDate(dateSelected.end).getTime() === getDate(day).getTime()" class="selected end" :class="day.type" @click="() => unSelectDay(day)">{{day.day}}</div>
        <template v-else>
          <div v-if="dateSelected.start && dateSelected.end && getDate(day) < getDate(dateSelected.end) && getDate(day) > getDate(dateSelected.start)" class="selected between" :class="day.type" @click="() => selectDay(day)">{{day.day}}</div>
          <div v-else :class="day.type" @click="() => selectDay(day)">{{day.day}}</div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import months from './months';
import days from './days';

export default {
  name: 'Calendar',

  props: {
    dateSelected: {required: true, type: Object},
    selectDay: {required: true, type: Function},
    unSelectDay: {required: true, type: Function}
  },

  data() {
    var date = new Date();
    date.setDate(1);
    return {
      date: date,
      year: date.getFullYear(),
      month: date.getMonth(),
      days: []
    }
  },

  created(){
    this.renderCalendar();
  },

  computed:{
    monthsNames() {
      return months;
    },

    daysNames() {
      return days;
    },

    monthName() {
      return this.monthsNames[this.month];
    },
  },

  methods: {
    renderCalendar(){
      const date = this.date;
      const year = date.getFullYear();
      const month = date.getMonth();

      this.year = year;
      this.month = month;
      this.days = [];

      const lastDay = new Date(year, month+1, 0).getDate();
      const prevLastDay = new Date(year, month, 0).getDate();
      const firstDayIndex = date.getDay();
      const lastDayIndex = new Date(year, month+1, 0).getDay();
      const nextDays = 7 - lastDayIndex - 1;

      for (let i = firstDayIndex; i > 0; --i){
        let curYear = year;
        let curMonth = month-1;
        if (curMonth < 1){
          --curYear;
          curMonth = 12;
        }
        this.days.push({type: 'prev', day: prevLastDay - i + 1, year: curYear, month: curMonth});
      }

      const now = new Date();

      for (let i = 1; i <= lastDay; ++i){
        if (now.getFullYear() == year && now.getMonth() == month && now.getDate() == i)
          this.days.push({type: 'current now', day: i, year: year, month});
        else this.days.push({type: 'current', day: i, year: year, month});
      }

      for (let i = 1; i <= nextDays; ++i){
        let curYear = year;
        let curMonth = month+1;
        if (month > 12){
          ++curYear;
          curMonth = 1;
        }
        this.days.push({type: 'next', day: i, year: curYear, month: curMonth});
      }
    },

    getDate(day){
      return new Date(day.year, day.month, day.day);
    },

    prevMonth(){
      this.date.setMonth(this.date.getMonth()-1);
      this.renderCalendar();
    },

    nextMonth(){
      this.date.setMonth(this.date.getMonth()+1);

      this.renderCalendar();
    },
  },
}
</script>

<style lang="scss" scoped>
.calendar {
  position: absolute !important;
  z-index: 100;
  height: auto !important;
  user-select: none;
  width: 92%;
}

.card-header{
  border-radius: 2em;
  padding: 1em;
  border: gray 1px solid;
  align-items: center;
}

.change-month{
  cursor: pointer;
  border-radius: 100%;
  border: solid transparent 1px;
  padding: 10px;
  transition: .5s;

  &:hover{
    transform: scale(1.15);
  }
}

.info{
  font-size: 1.4em;
  font-weight: 700;
}

.days div, .weekdays div{
  display: inline-block;
  width: calc(100%/7);
  height: 50px;
  line-height: 50px;
  border-radius: 100%;
  cursor: pointer;
}

.weekdays div{
  cursor: auto;
}

.days div:hover{
  outline: 2px solid #3c8f3f;
}

.current.now{
  outline: 3px solid #3c8f3faa;
}

.selected{
  background: #3c8f3f;
  color: #fff !important;
  font-weight: bold;
}

.prev, .next{
  color: #b6aeae;
}

.between{
  background: #3c8f3f44;
  border-radius: 0 !important;
}

.between + .end{
  border-radius: 0 100% 100% 0 !important;
}

.start {
  border-radius: 100% 0 0 100% !important;
}
</style>
