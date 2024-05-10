<template>
  <div class="container mt-4">
    <h2>Kuninglik puhkus ootab!</h2>
    <form @submit.prevent="submitForm">
      <!-- Name field -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <input type="text" class="form-control" id="name" placeholder="Külastajate nimed" v-model="name">
        </div>
      </div>

      <!-- Email field -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <input type="email" class="form-control" id="email" placeholder="E-mail" v-model="email">
        </div>
      </div>

      <!-- Phone field (optional) -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <input type="text" class="form-control" id="phone" placeholder="Kontakttelefon" v-model="phone">
        </div>
      </div>

      <!-- Dropdown for choosing the house (optional) -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <label for="house" class="form-label" style="font-size: 20px;">Millises majas soovid ööbida?</label>
          <select class="form-select" id="house" v-model="selectedHouse">
            <option selected>Vali...</option>
            <option value="Ait">Ait</option>
            <!--            <option value="house2">Kuninglik kõlgus</option>-->
            <option value="Plagandõ puhkemaja">Plagandõ puhkemaja</option>
            <option value="Must kast">Must kast</option>
            <option value="Glämping">Glämping</option>
          </select>
        </div>
      </div>

      <!-- Arrival and Departure Dates -->
      <div class="mb-3 row justify-content-center">
        <div class="col-3">
          <label for="arriveDate" class="form-label" style="font-size: 20px;">Saabun</label>
          <input type="date" class="form-control" id="arriveDate" v-model="arrivalDate" @change="updateDepartureDateMin"
                 :min="today">
        </div>
        <div class="col-3">
          <label for="departureDate" class="form-label" style="font-size: 20px;">Lahkun</label>
          <input type="date" class="form-control" id="departureDate" v-model="departureDate" :min="minDepartureDate">
        </div>
      </div>


      <!-- Additional Info (optional) -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <textarea class="form-control" id="additionalInfo" rows="3" placeholder="Lisainfo..."
                    v-model="additionalInfo"></textarea>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="row justify-content-center">
        <div class="col-6">
          <button type="submit" class="btn btn-success">Saada päring</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      selectedHouse: '',
      arrivalDate: '',
      departureDate: '',
      additionalInfo: '',
      today: new Date().toISOString().substr(0, 10) // Get today's date in YYYY-MM-DD format
    };
  },
  methods: {
    submitForm() {
      const formParams = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        selectedHouse: this.selectedHouse,
        arrivalDate: this.arrivalDate,
        departureDate: this.departureDate,
        additionalInfo: this.additionalInfo
      };
      emailjs.send('service_4hbrhod', 'template_rbolduo', formParams, '8krq05KIeTitbWwT8')
          .then((response) => {
            alert('Broneeringusoov on saadetud! Vastame esimesel võimalusel.');
          }, (err) => {
            alert('Broneeringusoovi saatmine ebaõnnestus...');
          });
      this.resetForm();
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.selectedHouse = '';
      this.arrivalDate = '';
      this.departureDate = '';
      this.additionalInfo = '';
    }
  }
}
</script>


<style scoped>
.container {
  max-width: 600px;
}
</style>
