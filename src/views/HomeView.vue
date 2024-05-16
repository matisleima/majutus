<template>
  <div>
    <div class="section fixed-bg welcome-bg" :style="backgroundImageStyle">
      <h1 style="color: #ffffff; text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">
        Kuninglik puhkus Setomaal
      </h1>
    </div>
    <div class="section scroll-bg">
      <div class="row link-stack">
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
    <div class="section scroll-bg content-section">
      <div class="content-container">
        <div class="content-image">
          <img src="../assets/muu/map1.webp" alt="Map"/>
        </div>
        <div class="content-text">
          <p>
            35km raadiuses on hulk unikaalseid kohti: Võru linn, Vastseliina piiskopilinnus, Setomaa süda Obinitsa,
            Haanja ja Suur Munamägi, Rõuge ning Aluksne ja Põhja-Läti. Luha talu peremees sootska Aarne Leima on
            sertifitseeritud Setomaa giid ja näitab teile ümbruskonnas heameelega ringi!
          </p>
        </div>
      </div>
    </div>
    <div class="section fixed-bg tiik-bg" :style="{ backgroundImage: 'url(' + tiikImagePath + ')' }">
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
import tiikImage from '@/assets/util/tiik-ava.webp';
import saunImage from '@/assets/plagando/plagandosaunava.webp';
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
      saunImagePath: saunImage,
      telkImagePath: telkImage,
      tiikImagePath: tiikImage
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

.row a {
  color: #666; /* Dark gray color */
  text-decoration: none; /* Removes underline */
}

.row a:hover {
  color: #00b100; /* Lighter gray color on hover */
  text-decoration: underline; /* Adds underline on hover if desired */
}

.content-section {
  padding: 10px; /* Reduced padding */
  width: 100%;
}

.content-container {
  display: flex;
  flex-direction: column; /* Default to column for mobile */
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0; /* Remove default padding */
}

.content-image, .content-text {
  flex: 1;
  margin: 5px; /* Reduced margin */
}

.content-image img {
  width: 100%;
  height: auto;
}

.content-text {
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  text-align: center; /* Center text */
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
    background-position: 63% center; /* Specific background position for mobile */
  }

  .tiik-bg {
    display: none; /* Hide desktop background on mobile */
  }

  .content-container {
    padding: 0; /* Ensure no padding on mobile */
  }

  .content-image, .content-text {
    margin: 10px 0; /* Adjust vertical margin for mobile */
  }

  .link-stack {
    flex-direction: column; /* Stack links vertically on mobile */
  }

  .link-stack .col {
    margin-bottom: 10px; /* Add margin between columns on mobile */
  }
}

@media (min-width: 768px) {
  .section {
    flex-direction: row; /* On larger screens, switches to row layout */
  }

  .col {
    flex: 1; /* Each column will take equal space */
  }

  .saun-bg {
    display: none; /* Hide mobile background on desktop */
  }

  .tiik-bg {
    display: block; /* Show desktop background on larger screens */
    background-position: center; /* Adjust as needed for desktop */
  }

  .content-container {
    flex-direction: row; /* Row layout for desktop */
    align-items: center; /* Center vertically */
    padding: 0; /* Ensure no padding on desktop */
  }

  .content-image, .content-text {
    margin: 10px; /* Adjust margins for better spacing on desktop */
  }

  .link-stack {
    flex-direction: row; /* Keep links horizontal on desktop */
  }

  .link-stack .col {
    margin-bottom: 0; /* Remove bottom margin for columns on desktop */
  }
}
</style>

