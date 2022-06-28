<script setup>
import Navbar from "../components/Navbar.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.getElementsByTagName("body")[0].style.backgroundImage ="url('src/assets/Cover1.png')";
  document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
});
</script>
<template>
  <Navbar/>
  <div class="judul">
    <h1 class="h1">Created By</h1>
  </div>
  <div class="box-container">
    <div class="box1"> <div class="card" style="width: 18rem;">
      <img src="../assets/card1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Aidil Zikri</p>
      </div>
    </div></div>
    <div class="box2"> <div class="card" style="width: 15rem;">
      <img src="../assets/card.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Rana Fatrika</p>
      </div>
    </div></div>
  </div>

</template>
<script>
export default {
  name: "AboutView"
}
</script>

<style scoped>
.card{
  margin-top: 15rem;
  margin-left: 5rem;
}
.card1{
  margin-top: 10rem;
  margin-left: 25rem;
}
.judul{
  color: #090808;
  font-style: oblique;
  font-family: "poppins";
  margin-top: 5rem;
  text-align: center;
}
.box1, .box2{
  width: 300px;
  height: 100px;
  margin-top: 5rem;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 30rem;
}

.box-container{
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;

}

</style>