<template>
  <div>
    <div class="section fixed-bg welcome-bg" :style="backgroundImageStyle">
      <h1 style="color: #ffffff; text-shadow: 4px 2px 4px rgba(0,0,0,0.9);">
        Sootska Leima Luha Puhketalu
      </h1>
    </div>
    <div class="section scroll-bg">

      <div class="row-description">
        <h1 style="margin-bottom: 30px">Kuninglik puhkus Setomaal</h1>
        <div style="text-align: center">
          <p>Asume Setomaa edelanurgas, ajaloolise Riia-Pihkva kivitee äärses Leimani külas.
            Sadakond aastat tagasi kui ka Setomaal tekkisid pärast maareformi uued talukohad,
            ehitasid kolm venda Andrei, Fjodor ja Paul oma majad kõrvuti ja sellest sai ühine
            Luha talu. Selline kõrvuti elamine ja ühise maa jagamine ja majandamine oli olnud
            setodele omane sajandeid.</p>
          <p>See unikaalne talude kompleks on hästi säilinud ja meie eesmärk on
            seda hoida ning arendamisel järgida vanade hoonete joonist.
            Kutsume teid siia puhkama, jagame teiega seda lihtsat talumiljööd. Siin on ilusat
            loodust, rahu ja piisavalt privaatsust igale külalisele. Võimalik, et selline ongi
            üks kuninglik puhkus.</p>
        </div>
      </div>

      <div class="row-houses link-stack" style="margin-bottom: 20px">
        <router-link to="/ait">
          <img src="../assets/ait/ait.webp" height="100"/>
          <h4>Ait</h4>
        </router-link>
        <router-link to="/kolgus">
          <img src="../assets/kolgus/kolgus main.webp" height="100"/>
          <h4>Kõlgus</h4>
        </router-link>
        <router-link to="/plagando-puhkemaja">
          <img src="../assets/plagando/plagando-main.webp" height="100"/>
          <h4>Plagandõ<br>puhkemaja</h4>
        </router-link>
        <router-link to="/mustKast">
          <img src="../assets/must_kast/suvemajake.webp" height="100"/>
          <h4>Must kast</h4>
        </router-link>
        <router-link to="/glamping">
          <img src="../assets/glamping/glamping-tuledega.jpg" height="100"/>
          <h4>Glämping</h4>
        </router-link>
      </div>

    </div>
    <div class="section fixed-bg ait-bg" :style="{ backgroundImage: 'url(' + aitImagePath + ')' }">
    </div>
    <div class="section scroll-bg content-section">
      <div class="row row-tourism">
        <div class="col col-map">
          <img src="../assets/muu/map1.webp" alt="Map"/>
        </div>
        <div class="col col-tourism-text">
          <p>Siin puhates on äärmiselt lihtne teha väljasõite Setomaale, Võromaale ja Põhja-Lätimaale.
            Meist kõigest 35 kilomeetri raadiusse jäävad Vastseliina piiskopilinnus, Setomaa üks
            keskuseid Obinitsa, Piusa koopad, Võru linn, Haanja ning Suur Munamägi, Rõuge oma järvede
            ja Ööbikuoruga, aga ka võrratu Aluksne linn Lätimaal.</p>
          <p>Luha talust saate ammendavat turismiinfot ja kuna sootskast talu peremees on ka Setomaa giid, siis on
            võimalik ka koos temaga ümbruskonda avastada.</p>
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
  min-height: 100vh;
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

img {
  border-radius: 20px; /* Rounds the corners of all images */
}


.col img {
  width: 100%; /* Ensures image is responsive and adjusts according to screen size */
  height: auto; /* Maintains aspect ratio */
}

.col-tourism-text {
  display: flex;           /* Enables flexbox */
  flex-direction: column;  /* Stacks the flex items vertically */
  justify-content: center; /* Centers the content vertically in the container */
}

.row-houses {
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap to the next line as needed */
  justify-content: space-around; /* Evenly spaces the links with space at both ends */
  margin-bottom: 20px;
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
  color: #363636; /* Lighter gray color on hover */
  text-decoration: underline; /* Adds underline on hover if desired */
}

.content-section {
  padding: 10px; /* Reduced padding */
  width: 100%;
}

.content-image img {
  width: 100%;
  height: auto;
}

.link-stack a {
  color: #000000; /* Dark gray color */
  text-decoration: none; /* Removes underline */
  margin-right: 20px;
  margin-left: 20px;
}

.link-stack a:hover {
  color: #939191; /* Lighter gray color on hover */
  text-decoration: underline; /* Adds underline on hover */
}

.link-stack h2 {
  margin: 20px 0;
}

.router-link h2 {
  margin: 10px 0; /* Adds vertical spacing for each item */
  text-align: center; /* Centers the text within each link */
}

.row-description {
  margin: 20px 20px 40px;
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

  .row-houses {
    flex-direction: column; /* Stacks the links vertically on small screens */
  }

  .row-tourism {
    flex-direction: column; /* Stacks the links vertically on small screens */
  }
}

@media (min-width: 768px) {
  .saun-bg {
    display: none; /* Hide mobile background on desktop */
  }

  .tiik-bg {
    display: block; /* Show desktop background on larger screens */
    background-position: center; /* Adjust as needed for desktop */
  }

  .content-image img {
    width: auto; /* Keeps the original width of the image */
    max-width: 100%; /* Ensures the image does not overflow its container */
  }

}
</style>