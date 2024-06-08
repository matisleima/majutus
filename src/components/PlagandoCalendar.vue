<template>
  <div>
    <div class="calendar-controls">
      <button @click="changeMonth(-1)">&lt;</button>
      <span>{{ currentMonthName }}</span>
      <button @click="changeMonth(1)">&gt;</button>
    </div>
    <table>
      <tr v-for="week in weeks" :key="week[0].toISOString()">
        <td v-for="day in week" :key="day.toISOString()"
            :class="{'red-day': isOccupied(day.toISOString().slice(0, 10))}">
          {{ day.getDate() }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: new Date(),
      // Ensure the dates are strings and correctly formatted
      occupiedDates: [
        '2024-05-18',
        '2024-05-22',
        '2024-06-27',
        '2024-06-08',
        '2024-06-28',
        '2024-08-15',
        '2024-08-16',
        '2025-01-16',
        '2025-01-17',
      ]
    };
  },
  computed: {
    weeks() {
      let start = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
      let end = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
      let weeks = [], week = [], i = new Date(start);

      while (i <= end) {
        week.push(new Date(i));
        if (week.length === 7 || i.getDate() === end.getDate()) {
          weeks.push(week);
          week = [];
        }
        i.setDate(i.getDate() + 1);
      }
      return weeks;
    },
    currentMonthName() {
      return this.currentMonth.toLocaleDateString('et-EE', {month: 'long', year: 'numeric'});
    }
  },
  methods: {
    changeMonth(step) {
      this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + step, 1);
    },
    isOccupied(dateString) {
      return this.occupiedDates.includes(dateString);
    }
  }
}
</script>

<style scoped>
.calendar-controls {
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
}

table {
  width: 250px; /* Set the desired width here */
  height: auto; /* Adjust based on your design, or set a fixed height */
  border-collapse: collapse;
}

td {
  width: calc(100% / 7); /* This ensures the cells are evenly spaced in the table */
  height: 30px; /* Fixed height for each day cell */
  background-color: #e8ffe8;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ddd;
}

.red-day {
  background-color: rgba(187, 0, 0, 0.6);
  color: white;
}
</style>
