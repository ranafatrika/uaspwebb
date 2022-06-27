<script setup>
import Navbar from "../components/Navbar.vue";

</script>
<template>
  <Navbar/>
  <section class="hero is-small">
    <p class="about mt-4">
      "About Creators"
    </p>
    <div class="columns mt-4">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="src/assets/dwij.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="src/assets/dwi.jpg" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Dwi Nur Fitrianto</p>
                <p class="subtitle is-6">@<a href="https://www.instagram.com/dwinrfitrnto_14/">Dwinrfitrnto</a></p>
              </div>
            </div>

            <div class="content">
              Assalamu'alaikum. Halo semuanya! Aku Dwi Nur Fitrianto, biasanya
              dipanggil Dwi. Aku mahasiswa semester 4 jurusan Teknik Informatika di
              UIN Sultan Syarif Kasim Riau. Web ini dibuat guna menyelesaikan tugas UAS
              Mata Kuliah Pemrograman Web yang dibimbing oleh Bapak Pizaini.
              <a href="https://uts-dwi-fcc2e.web.app/">#Project</a> <a href="https://github.com/Dwinurfitrianto">#Github</a>
              <br>
              <time datetime="2022-6-20">20 Jun 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="src/assets/gege.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="src/assets/gegeb.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Ghefira Lawdza'i Utsula Farey</p>
                <p class="subtitle is-6">@<a href="https://www.instagram.com/gegelwdz/">gegelwdz</a></p>
              </div>
            </div>

            <div class="content">
              Assalamu'alaikum. Halo semuanya! Aku Ghefira Lawdza'i Utsula Farey, biasanya
              dipanggil Gege. Aku mahasiswa semester 4 jurusan Teknik Informatika di
              UIN Sultan Syarif Kasim Riau. Web ini dibuat guna menyelesaikan tugas UAS
              Mata Kuliah Pemrograman Web yang dibimbing oleh Pak Pizaini.
              <a href="https://ghefiralawdzai.github.io/quran/">#Project</a> <a href="https://github.com/ghefiralawdzai">#Github</a>
              <br>
              <time datetime="2022-6-20">20 Jun 2022</time>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
export default {
  name: "AboutView"
}
</script>

<style scoped>
.about{
  font-size: 50px;
  font-family: "Bernard MT Condensed";
  text-align: center;
}
.card{
  box-shadow: 0 3px 10px rgba(0, 0, 0, 1);
  border-radius: 10px;
}
.hero is-small{
  background-color: #C69B7B;
}
</style>