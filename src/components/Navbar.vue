<script>
export default {
  name: "NavBar",
};
</script>

<template>

  <nav class="navbar navbar-expand-lg  shadow-lg fixed-top">

    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/halal.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
      </a>
      <Router-link class="navbar-brand" to="/">TOKO SEMBAKO</Router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-right" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Router-link class="nav-link active" aria-current="page" to="/"><div class="txt">Home</div></Router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Backend API
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/barang">Barang</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/penjualan">Penjualan</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/karyawan">Karyawan</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item">
            <Router-link class="nav-link" to="/about"><div class="txt">About</div></Router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
.navbar{
  background: rgb(255, 255, 255);
}
.navbar-brand{
  color: #090808;
}
.txt{
  color: #090808;
}
</style>