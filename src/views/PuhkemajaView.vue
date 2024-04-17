<template>
  <div>
    <div class="background-section"></div>
    <div class="info-section">
      <div class="description">
        <h1>Plagandõ puhkemaja</h1>
        <p>Meie kõige ruumikam maja, Plagandõ talu maadele ehitatud kaasaegne kahekorruseline terrassiga
          suvemaja pakub mõnusat äraolemist neljale ööbijale. Majas on köök ja vannituba.</p>
      </div>
      <div class="calendar">
        <vue-cal :views="['month']" style="height: 300px; width: 100%; border: 1px solid #ccc;"></vue-cal>


      </div>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: 'PuhketaluView',
  components: {
    VueCal
  }
}
</script>


<style scoped>
.background-section {
  height: 66vh;
  background: url('@/assets/plagandõ.png') no-repeat center center / cover;
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
