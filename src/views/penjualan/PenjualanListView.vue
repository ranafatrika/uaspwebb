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
        Data Penjualan
      </p>
      <p class="subtitle">
        Menampilkan Data Penjualan dan CRUD API endpoint
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
          <th>NO NOTA</th>
          <th>TANGGAL PENJUALAN</th>
          <th>JUMLAH BARANG</th>
          <th>ID PEMBELI</th>
          <th>ID KARYAWAN</th>
          <th>ID BARANG</th>
        </tr>
        </thead>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "PenjualanListView",}
</script>