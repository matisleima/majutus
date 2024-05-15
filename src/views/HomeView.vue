<template>
  <div>
    <div class="section fixed-bg welcome-bg" :style="backgroundImageStyle">
      <h1 style="color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">
        Kuninglik puhkus Setomaal
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
            <h1>Kuninglik<br>kõlgus</h1>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/plagando-puhkemaja" class="col">
            <h1>Plagandõ<br>puhkemaja</h1>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/mustKast" class="col">
            <h1>Must<br>kast</h1>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/glamping" class="col">
            <h1>Glämping</h1>
          </router-link>
        </div>
      </div>
    </div>
    <div class="section fixed-bg ait-bg" :style="{ backgroundImage: 'url(' + aitImagePath + ')' }">
    </div>
    <div class="section scroll-bg">
      <div class="col">
        <img src="../assets/muu/map1.webp" width="700" style="margin-top: 20px"/></div>
      <div class="col">
        <p><h5> 35km raadiuses on hulk unikaalseid kohti: Võru linn, Vastseliina piiskopilinnus, Setomaa süda Obinitsa,
          Haanja ja Suur Munamägi, Rõuge ning Aluksne ja Põhja-Läti. Luha talu peremees sootska Aarne Leima on
          sertifitseeritud Setomaa giid ja näitab teile ümbruskonnas heameelega ringi!</h5></p>
      </div>
    </div>
    <div class="section fixed-bg saun-bg" :style="{ backgroundImage: 'url(' + saunImagePath + ')' }">
    </div>
    <div class="section scroll-bg">
      <contact-form/>
    </div>
  </div>
</template>


<script>
import welcomeImage from '@/assets/ait/welcome2.webp';
import telkImage from '@/assets/glamping/glamping.webp';
import saunImage from '@/assets/plagando/plagando-saun-3.webp';
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
      aitImagePath: telkImage,
      saunImagePath: saunImage
    };
  }
}
</script>


<style scoped>
.section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Makes the content scrollable if it overflows */
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 24px;
  font-family: "Nirmala UI", sans-serif;
}

.col img {
  width: 100%; /* Ensures image is responsive and adjusts according to screen size */
  height: auto; /* Maintains aspect ratio */
}

.col p {
  margin: 10px; /* Adds margin for text for better readability */
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

/* Specific background adjustments for mobile */
@media (max-width: 767px) {
  .welcome-bg {
    background-position: 100% center; /* Adjust as needed */
  }

  .ait-bg {
    background-position: 35% center; /* Adjust as needed */
  }

  .saun-bg {
    background-position: 63% center; /* Adjust as needed */
  }
}

@media (min-width: 768px) {
  .section {
    flex-direction: row; /* On larger screens, switches to row layout */
  }

  .col {
    flex: 1; /* Each column will take equal space */
  }
}
</style>