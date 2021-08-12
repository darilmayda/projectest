<template>
  <div class="home">
    <Navbar/>
    <div class="container">
          <Hero/>

        <div class="row mt-4">
            <div class="col">
                Best <strong>Menu</strong>
            </div>
            <div class="col">
              <router-link to="/makanan" class="btn btn-success float-right"><b-icon-eye></b-icon-eye>Lihat Menu</router-link>
            </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-3 mt-4">
            <CardProduct/>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import CardProduct from '@/components/CardProduct.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    CardProduct
  },
  data(){
    return{
      listmenu : []
    }
  },
  mounted(){
    	// AMBIL DATA DARI DATABASE FIREBASE
			MenuRef.on('value' , this.resultData, this.errorData)
      console.log("alert")
  }
}
</script>
