<template>
  <div>
    <div class="background-section"></div>
    <div class="info-section">
      <div class="description">
        <div class="row">
          <h1>Vaid rebased ja kured...</h1>
          <p>...võivad siin sind segada. Hubases ja valgusküllases suvemajakeses saad rahu
            kõigest segavast. Mugav sisustus ja suured aknad vaatega põlismetsale teevad sellest
            suurepärase pelgupaiga puhkuseks või keskendumist nõudvateks toimetusteks.</p>
        </div>
        <div class="row" style="display: flex; justify-content: center; align-items: center;">
          <!--MUGAVUSED-->
          <div>
            <!--ELEKTER-->
            <div class="hover-container">
              <img src="@/assets/icons/plug-solid.svg"
                   class="icon-available"
                   width="50" height="50"/>
              <div class="hover-text">Elekter</div>
            </div>
            <!--VEEKRAAN-->
            <div class="hover-container">
              <img src="@/assets/icons/sink-solid.svg"
                   class="icon-unavailable"
                   width="50" height="50"/>
              <div class="hover-text">Veekraan</div>
            </div>
            <!--DUŠŠ-->
            <div class="hover-container">
              <img src="@/assets/icons/shower-solid.svg"
                   class="icon-unavailable"
                   width="50" height="50"/>
              <div class="hover-text">Dušš</div>
            </div>
            <!--VESIKÄIMLA-->
            <div class="hover-container">
              <img src="@/assets/icons/toilet-solid.svg"
                   class="icon-unavailable"
                   width="50" height="50"/>
              <div class="hover-text">Vesikäimla</div>
            </div>
            <!--KUIVKÄIMLA-->
            <div class="hover-container">
              <img src="@/assets/icons/restroom-solid.svg"
                   class="icon-available"
                   width="50" height="50"/>
              <div class="hover-text">Kuivkäimla</div>
            </div>
            <!--KÖÖGINURK-->
            <div class="hover-container">
              <img src="@/assets/icons/kitchen-set-solid.svg"
                   class="icon-unavailable"
                   width="50" height="50"/>
              <div class="hover-text">Kööginurk</div>
            </div>
            <!--KOHVINURK-->
            <div class="hover-container">
              <img src="@/assets/icons/mug-hot-solid.svg"
                   class="icon-available"
                   width="50" height="50"/>
              <div class="hover-text">Tee- ja kohvinurk</div>
            </div>
            <!--LUKUSTUS-->
            <div class="hover-container">
              <img src="@/assets/icons/lock-solid.svg"
                   class="icon-available"
                   width="50" height="50"/>
              <div class="hover-text">Lukustus</div>
            </div>
            <!--UjJUMISVÕIMALUS-->
            <div class="hover-container">
              <img src="@/assets/icons/person-swimming-solid.svg"
                   class="icon-available"
                   width="50" height="50"/>
              <div class="hover-text">Ujumisvõimalus</div>
            </div>
          </div>
        </div>
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
  name: 'MustKastView',
  components: {
    VueCal
  }
}
</script>


<style scoped>
.background-section {
  height: 66vh;
  background: url('@/assets/suvemajake.png') no-repeat center center / cover;
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

.icon-available {
  width: 50px; /* This ensures the width is the same for all icons */
  height: 50px; /* This ensures the height is the same for all icons */
  margin: 5px; /* Adjust the margin as needed to control spacing */
  filter: drop-shadow(0 0 5px #00b100); /* Green glow */
}

.icon-unavailable {
  width: 50px; /* This ensures the width is the same for all icons */
  height: 50px; /* This ensures the height is the same for all icons */
  margin: 5px; /* Adjust the margin as needed to control spacing */
  filter: drop-shadow(0 0 5px #b10000); /* Green glow */
}

.hover-container {
  position: relative;
  display: inline-block;
}

.hover-text {
  visibility: hidden;
  position: absolute;
  bottom: 100%;
  width: fit-content;

  transform: translate(0%, 0px);
  background-color: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
}

.hover-container:hover .hover-text {
  visibility: visible;
}
</style>
