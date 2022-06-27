<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.getElementsByTagName("body")[0].style.backgroundImage ="url('src/assets/Cover1.png')";
  document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
});
</script>
<template>
  <section class="hero is-small">
    <div class="hero-body">
      <p class="title">
        Data Barang
      </p>
      <p class="subtitle">
        Menampilkan Data Barang dan CRUD API endpoint
      </p>
    </div>
  </section>

  <section class="content">
    <div class="container">
      <button class="button mb-3 bg-primary" @click="showAdd">
        <span class="icon is-small">
          <i class="fas fa-plus"></i>
        </span>
        <span>Create</span>
      </button>
      <table class="table">
        <thead class="table-name">
        <tr>
          <th>ID BARANG</th>
          <th>NAMA BARANG</th>
          <th>HARGA BARANG</th>
          <th>TANGGAL MASUK</th>
          <th>TANGGAL KELUAR</th>
          <th>STOK</th>
        </tr>
        </thead>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "BarangListView",}
</script>
<style>
.table-name{
  background-color: rgba(203, 203, 203, 0.58);
}
.title{
  text-align: center;
  font-size: 3rem;
  font-family: poppins;
}
.subtitle{
  text-align: center;
}

</style>