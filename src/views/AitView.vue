<template>
  <div>
    <div class="background-section">

      <button @click="goBack" style="background: transparent; border: none; color: white; font-size: 20px;">
        Tagasi
      </button>

    </div>
    <div class="info-section">

      <div class="col m-3" >
        <div class="calendar row">
          <ait-calendar></ait-calendar>
        </div>
        <div class="row">
<!--          <button type="button" class="btn btn-success mt-3">Mine broneerima!</button>-->
        </div>
        <div class="row" style="margin-top: 15px">
          <h5>Öö alates 58€</h5>
        </div>
      </div>

      <div class="col">
        <div class="row" style="margin-bottom: 15px;">
          <p style="text-align: justify">Sajandivanusest, “kahe poolega” aidast, kus kunagi hoiti ühel pool söögikraami
            ja teisel riideid, on nüüd, peale renoveerimist saanud mõnus “magamisait”. Ait on
            õhurikas ja palkhoonele omaselt suvise palavusega ka meeldivalt jahe. Aida ühel pool
            on üks lai voodi, teisel pool kaks üheinimese voodit. Võimalik lisada väikelapse voodi.
            Pesta saab saunas ja ujuda puhta veega tiigis. Kasealune terrass on lihtsalt üks hea
            olemise koht. Ventileeritud kuivkäimla asub aida kõrval.</p>
        </div>
        <div class="icon-section" style="display: flex; justify-content: center; align-items: center;">
          <!--MUGAVUSED-->
          <div class="row icon-row">
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
                   class="icon-unavailable"
                   width="50" height="50"/>
              <div class="hover-text">Lukustus</div>
            </div>
            <!--UJUMISVÕIMALUS-->
            <div class="hover-container">
              <img src="@/assets/icons/person-swimming-solid.svg"
                   class="icon-available"
                   width="50" height="50"/>
              <div class="hover-text">Ujumisvõimalus</div>
            </div>
            <!--SAUN-->
            <div class="hover-container">
              <img src="@/assets/icons/sauna.png"
                   class="icon-available"
                   width="50" height="50"/>
              <div class="hover-text">Saun</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="row m-4" style="display: flex; justify-content: center; align-items: center;">
          <div v-for="(image, index) in images" :key="index" class="thumbnail m-2" @click="openLightbox(index)">
            <img :src="image" alt="Pisipilt" class="image-thumbnail">
          </div>
        </div>
        <div v-if="showLightbox" class="lightbox" @click.self="closeLightbox">
          <span class="nav left" @click.stop="previousImage">&lt;</span>
          <img :src="images[currentIndex]" alt="Suur pilt" class="full-size-image">
          <span class="nav right" @click.stop="nextImage">&gt;</span>
          <span class="close" @click.stop="closeLightbox">&times;</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import AitCalendar from "@/components/AitCalendar.vue";

export default {
  components: {
    AitCalendar  // This registers MyCalendar for use in this component's template
  },
  name: 'AitView',
  data() {
    return {
      images: [
        new URL('@/assets/ait/aitIn2.webp', import.meta.url).href,
        new URL('@/assets/ait/aitIn1.webp', import.meta.url).href,
        new URL('@/assets/ait/aitIn3.webp', import.meta.url).href,
        new URL('@/assets/util/saun1.webp', import.meta.url).href,
        new URL('@/assets/util/saun2.webp', import.meta.url).href,
        new URL('@/assets/util/saun3.webp', import.meta.url).href,
        new URL('@/assets/util/kemmerg1.webp', import.meta.url).href,
        new URL('@/assets/util/kemmerg2.webp', import.meta.url).href
      ],
      currentIndex: 0,
      showLightbox: false
    };
  },
  methods: {
    openLightbox(index) {
      this.currentIndex = index;
      this.showLightbox = true;
      document.addEventListener('keydown', this.handleKey);
    },
    closeLightbox() {
      this.showLightbox = false;
      document.removeEventListener('keydown', this.handleKey);
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    handleKey(e) {
      if (e.key === 'ArrowRight') {
        this.nextImage();
      } else if (e.key === 'ArrowLeft') {
        this.previousImage();
      } else if (e.key === 'Escape') {
        this.closeLightbox();
      }
    },
    goBack() {
      this.$router.back();
    }
  }
}
</script>




<style scoped>
.background-section {
  height: 66vh;
  background: url('@/assets/ait/ait.webp') no-repeat center center / cover;
  min-height: 200px;
}

.info-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: white;
  height: 34vh;
  margin-bottom: 180px; /* Adjust this value as needed for more or less space */
}

.calendar {
  padding-left: 0px; /* Adds some space between the calendar and the text */
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
  filter: drop-shadow(0 0 5px #b10000); /* Red glow */
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
  background-color: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
}

.hover-container:hover .hover-text {
  visibility: visible;
}


.row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.thumbnail {
  cursor: pointer;
  transition: transform 0.7s ease;
}

.thumbnail:hover {
  transform: scale(1.5); /* Adjusted for mobile usability */
}

.image-thumbnail {
  height: 60px; /* Adjust based on your design needs */
  width: auto;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000; /* High z-index to ensure it covers other content */
}

.full-size-image {
  max-width: 90%;
  max-height: 90%;
}

.close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  z-index: 1001; /* Ensure close button is above the lightbox image */
}

.nav {
  color: white;
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.nav.left {
  left: 10px;
}

.nav.right {
  right: 10px;
}

@media (max-width: 768px) {
  .background-section, .icon-available, .icon-unavailable {
    height: auto; /* Adjust heights for smaller screens */
  }

  .info-section {
    flex-direction: column; /* Stack sections vertically */
    height: auto;
  }

  .hover-container, .hover-text {
    font-size: smaller; /* Smaller tooltips */
  }

  .icon-section .icon-row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }


  .image-thumbnail {
    width: 80%; /* Larger view for thumbnails on small screens */
    margin: auto; /* Centering thumbnails */
  }

  .btn {
    padding: 15px 30px; /* Larger button for easier tapping */
  }

  body {
    font-size: 16px; /* Larger font size for readability */
  }

  input, select, button {
    font-size: 16px; /* Larger form elements */
  }
}
</style>

