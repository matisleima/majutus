<template>
  <div>
    <div class="background-section"></div>
    <div class="info-section">
      <div class="description">
        <h3>Kissa-kassa, kissa-kassa kõlgusahe...</h3>
        <p>Meie kõlgus ei ole ammu enam "põhu, õlgede, kõlgaste, vahel ka heinte panipaik", nagu
          Eesti Keele Seletav Sõnaraamat selgitada püüab, vaid
          kõigi mugavustega kahekorruseline aastaringselt kasutatav mõnus pesa!</p>
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
  name: 'KolgusView',
  components: {
    VueCal
  }
}
</script>


<style scoped>
.background-section {
  height: 66vh;
  background: url('@/assets/kõlgus.png') no-repeat center center / cover;
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
