<template>
  <div>
    <div class="section fixed-bg" :style="backgroundImageStyle">
      <h1 style="color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">
        Tereh tulõmast Setomaalõ
      </h1>
    </div>
    <div class="section scroll-bg">
      <div class="row">
        <div class="col">
          <router-link to="/ait" class="col">
            <h1>Ait</h1>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/kolgus" class="col">
            <h1>Kõlgus</h1>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/puhkemaja" class="col">
            <h1>Puhkemaja</h1>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/suvemajake" class="col">
            <h1>Suvemajake</h1>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/glamping" class="col">
            <h1>Glämping</h1>
          </router-link>
        </div>
      </div>
    </div>
    <div class="section fixed-bg" :style="{ backgroundImage: 'url(' + aitImagePath + ')' }">
      <!-- Just a view -->
    </div>
    <div class="section scroll-bg">
      <contact-form /> <!-- Corrected closing of the self-closing tag -->
    </div>
  </div>
</template>


<script>
import welcomeImage from '@/assets/welcome2.png';
import telkImage from '@/assets/glämping.webp';
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: 'ParallaxPage',
  components: {
    ContactForm
  },
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${welcomeImage})`
      },
      aitImagePath: telkImage
    };
  }
}
</script>


<style scoped>
.section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: "Nirmala UI", sans-serif;
}

.fixed-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.scroll-bg {
  background: white;
  color: black;
}

/* Targeting <a> tags directly within .row */
.row a {
  color: #666; /* Dark gray color */
  text-decoration: none; /* Removes underline */
}

.row a:hover {
  color: #00b100; /* Lighter gray color on hover */
  text-decoration: underline; /* Adds underline on hover if desired */
}
</style>

