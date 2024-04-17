<template>
  <div class="container mt-4">
    <h2>Kuninglik puhkus ootab!</h2>
    <form>
      <!-- Name field -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <input type="text" class="form-control" id="name" placeholder="Külastajate nimed">
        </div>
      </div>

      <!-- Email field -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <input type="email" class="form-control" id="email" placeholder="E-mail">
        </div>
      </div>

      <!-- Phone field (optional) -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <input type="text" class="form-control" id="phone" placeholder="Kontakttelefon">
        </div>
      </div>

      <!-- Dropdown for choosing the house (optional) -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <label for="house" class="form-label" style="font-size: 20px;">Millises majas soovid ööbida?</label>
          <select class="form-select" id="house">
            <option selected>Vali...</option>
            <option value="house1">Ait</option>
            <option value="house2">Kõlgus</option>
            <option value="house3">Puhkemaja</option>
            <option value="house4">Suvemajake</option>
            <option value="house5">Glämping</option>
          </select>
        </div>
      </div>

      <!-- Arrival and Departure Dates -->
      <div class="mb-3 row justify-content-center">
        <div class="col-3">
          <label for="arriveDate" class="form-label" style="font-size: 20px;">Saabun</label>
          <input type="date" class="form-control" id="arriveDate" v-model="arrivalDate" @change="updateDepartureDateMin">
        </div>
        <div class="col-3">
          <label for="departureDate" class="form-label" style="font-size: 20px;">Lahkun</label>
          <input type="date" class="form-control" id="departureDate" v-model="departureDate" :min="minDepartureDate">
        </div>
      </div>


      <!-- Additional Info (optional) -->
      <div class="mb-3 row justify-content-center">
        <div class="col-6">
          <textarea class="form-control" id="additionalInfo" rows="3" placeholder="Lisainfo..."></textarea>
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
export default {
  name: 'YourComponentName',
  data() {
    return {
      arrivalDate: '',
      departureDate: '',
      minDepartureDate: ''
    };
  },
  methods: {
    updateDepartureDateMin() {
      this.minDepartureDate = this.arrivalDate;
    }
  }
}
</script>


<style scoped>
.container {
  max-width: 600px;
}
</style>
