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
      API_KEY: 'AIzaSyC7pj5-sfA-xXryhmW_JvTOToAJQciMlvA', // Replace with your API key
      SHEET_ID: '1W1uWVvGNG69o2IN_5qVbBwOPvmO61Z7LPh3bsIjknWA', // Replace with your Spreadsheet ID
      currentMonth: new Date(),
      occupiedDates: [] // This will be populated by data from the Google Sheet
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
    },
    initClient() {
      gapi.client.init({
        apiKey: this.API_KEY,
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
      }).then(() => {
        this.loadOccupiedDates();
      });
    },
    loadOccupiedDates() {
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: this.SHEET_ID,
        range: 'Sheet1!C2:C', // Adjust the range to your sheet's structure
      }).then(response => {
        const dates = response.result.values.map(row => row[0]);
        this.occupiedDates = dates;
      }, error => {
        console.error('Error loading occupied dates:', error);
      });
    },
    addDate(date) {
      // Example method to add a date to the sheet
      gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: this.SHEET_ID,
        range: 'Sheet1!C2:C',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
          values: [[date]]
        }
      }).then(response => {
        this.occupiedDates.push(date);
      }, error => {
        console.error('Error adding date:', error);
      });
    }
  },
  mounted() {
    gapi.load('client', this.initClient);
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
