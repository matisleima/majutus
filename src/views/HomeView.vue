<template>
  <div>


    <div class="container-fluid text-center vh-100">
      <div class="row h-100">
        <!-- LEFT SIDE -->
        <div class="col align-items-center py-4">
          <div class="col d-flex align-items-center justify-content-center py-4" style="min-height: 100vh;">
            <h1>TEREH TULÕMAST SETOMAALÕ</h1>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="col d-flex flex-column justify-content-between py-4">

          <div class="row align-items-center" style="text-align: left; ">
            <div class="col">
              <img src="../assets/ait.webp" style="height: 100px; width: auto;" alt="Ait">
            </div>
            <div class="col">
              <h5 style="margin-left: 10px;">AIT</h5>
            </div>
          </div>

          <div class="row align-items-center" style="text-align: left;">
            <div class="col">
              <img src="../assets/kõlgus.png" style="height: 100px; width: auto;" alt="Kõlgus">
            </div>
            <div class="col">
              <h5 style="margin-left: 10px;">KÕLGUS</h5>
            </div>
          </div>

          <div class="row align-items-center" style="text-align: left;">
            <div class="col">
              <img src="../assets/plagandõ.png" style="height: 100px; width: auto;" alt="Plagandõ puhkemaja">
            </div>
            <div class="col">
              <h5 style="margin-left: 10px;">PLAGANDÕ PUHKEMAJA</h5>
            </div>
          </div>

          <div class="row align-items-center" style="text-align: left;">
            <div class="col">
              <img src="../assets/suvemaja.webp" style="height: 100px; width: auto;" alt="Suvemajake">
            </div>
            <div class="col">
              <h5 style="margin-left: 10px;">SUVEMAJAKE</h5>
            </div>
          </div>

          <div class="row align-items-center" style="text-align: left;">
            <div class="col">
              <img src="../assets/glämping.webp" style="height: 100px; width: auto;" alt="Glämping">
            </div>
            <div class="col">
              <h5 style="margin-left: 10px;">GLÄMPING</h5>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

export default {
  methods: {
    goToView(viewName) {
      this.$router.push({name: viewName});
    }
  }
}

</script>

