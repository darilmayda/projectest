<template>
<!-- harus dibungkus dalam 1 elemen div -->
<div>
    <Navbar/>
    <h2>Gallery</h2>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Gallery',
  components: {
    Navbar
  }
}
</script>