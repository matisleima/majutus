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
<!--      lihtsalt vaade-->
    </div>
    <div class="section scroll-bg">
      Broneeri
    </div>
  </div>
</template>

<script>
import terrassImage from '@/assets/terrass.webp';
import telkImage from '@/assets/glämping.webp';

export default {
  name: 'ParallaxPage',
  data() {
    return {
      backgroundImageStyle: {
        backgroundImage: `url(${terrassImage})`
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
