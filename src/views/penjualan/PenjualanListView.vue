<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.getElementsByTagName("body")[0].style.backgroundImage ="url('src/assets/Cover1.png')";
  document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
});
</script>
<script>
export default {
  name: "PenjualanListView",}
</script>