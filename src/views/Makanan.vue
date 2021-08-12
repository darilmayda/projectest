<template>
<!-- harus dibungkus dalam 1 elemen div -->
<div>
    <Navbar/>
    <h2>Daftar Makanan</h2>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Makanan',
  components: {
    Navbar
  }
}
</script>