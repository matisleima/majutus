<template>
  <div>
    <div class="section fixed-bg" :style="backgroundImageStyle">
      Tereh tulõmast Setomaalõ
    </div>
    <div class="section scroll-bg">
      <div class="row">
        <div class="col">
          <router-link to="/ait" class="col">
            Ait
          </router-link>
        </div>
        <div class="col">
          <router-link to="/kolgus" class="col">
            Kõlgus
          </router-link>
        </div>
        <div class="col">
          <router-link to="/puhkemaja" class="col">
            Puhkemaja
          </router-link>
        </div>
        <div class="col">
          <router-link to="/suvemajake" class="col">
            Suvemajake
          </router-link>
        </div>
        <div class="col">
          <router-link to="/glamping" class="col">
            Glämping
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
import welcomeImage from '@/assets/welcome.png';
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
</style>
