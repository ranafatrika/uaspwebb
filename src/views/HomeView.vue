<script setup>
import Navbar from "../components/Navbar.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.getElementsByTagName("body")[0].style.backgroundImage ="url('src/assets/Cover.jpg')";
  document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
});
</script>

<template>
  <Navbar/>
  <div class="github">
  <a href="https://github.com/ranafatrika?tab=repositories">Github</a>
  </div>
</template>

<style scoped>
.github{
  margin-left: 14rem;
  margin-top: 11rem;
  font-family: "poppins";
  font-size: 5rem;

}
</style>
