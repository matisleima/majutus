<template>
  <div>
    <div class="background-section"></div>
    <div class="info-section">
      <div class="description">
        <h1>Sinu elu magusaim uni...</h1>
        <p>...saab magatud Luha talu aidas. Seda kinnitab iga külaline, kes on veetnud öö
          Luha talu kõige luksuslikumas magamiskambris. Siin on ruumi tervele perele või sõpruskonnale.</p>
      </div>
      <div class="calendar">
        <vue-cal :view="'month'"
                 :on-view-change="handleViewChange"
                 style="height: 300px; border: 1px solid #ccc;"></vue-cal>


      </div>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: 'AitView',
  components: {
    VueCal
  },
  methods: {
    handleViewChange(newView) {
      if (newView !== 'month') {
        // Force it back to the month view if anything else is tried
        this.$refs.calendar.setView('month');
      }
    }
  }
}
</script>



<style scoped>
.background-section {
  height: 66vh;
  background: url('@/assets/ait.webp') no-repeat center center / cover;
}

.info-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: white;
  height: 34vh;
}

.description, .calendar {
  flex: 1;
}

.description {
  padding-right: 20px; /* Adds some space between the text and the calendar */
}

.calendar {
  padding-left: 20px; /* Adds some space between the calendar and the text */
}
</style>
