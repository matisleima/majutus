<template>
  <div>
    <div class="background-section"></div>
    <div class="info-section">
      <div class="description">
        <h1>Loodus ja luksus käsikäes</h1>
        <p>Ruumikas glämpingutelk on neile, kes soovivad ööbida ühtaegu looduse keskel,
          aga mugavas ja soojas voodis. Uinutav tuulekohin puulatvades ja salapärased loodushääled,
          mida seinad ei summuta, on Luha talu glämpingugtelgist teinud uutmoodi ööbimiskogemuse
          otsijate lemmikpaiga!</p>
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
  name: 'GlämpingView',
  components: {
    VueCal
  }
}
</script>


<style scoped>
.background-section {
  height: 66vh;
  background: url('@/assets/glamping.png') no-repeat center center / cover;
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
