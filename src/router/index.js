import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import KaryawanDetailView from "../views/karyawan/KaryawanDetailView.vue";
import KaryawanListView from "../views/karyawan/KaryawanListView.vue"
import BarangDetailView from "../views/barang/BarangDetailView.vue";
import BarangListView from "../views/barang/BarangListView.vue";
import PenjualanDetailView from "../views/penjualan/PenjualanDetailView.vue";
import PenjualanListView from "../views/penjualan/PenjualanListView.vue";
import AboutView from "../views/AboutView.vue";
import PembeliListView from "../views/pembeli/PembeliListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/karyawan',
      name: 'karyawan',
      component: KaryawanListView,
      meta: {
        title: 'Karyawan list'
      }
    },
    {
      path: '/karyawan/:nik',
      name: 'karyawan-detail',
      component: KaryawanDetailView,
      meta: {
        title: 'Karyawan detail'
      }
    },
    {
      path: '/barang',
      name: 'barang',
      component: BarangListView,
      meta: {
        title: 'Barang list'
      }
    },
    {
      path: '/barang/: id_barang',
      name: 'barang-detail',
      component: BarangDetailView,
      meta: {
        title: 'Barang detail'
      }
    },
    {
      path: '/penjualan',
      name: 'penjualan',
      component: PenjualanListView,
      meta: {
        title: 'Penjualan list'
      }
    },
    {
      path: '/penjualan/:no_nota',
      name: 'penjualan-detail',
      component: PenjualanDetailView,
      meta: {
        title: 'Penjualan detail'
      }
    },
    {
      path: '/pembeli',
      name: 'pembeli',
      component: PembeliListView,
      meta: {
        title: 'Pembeli list'
      }
    },

    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
