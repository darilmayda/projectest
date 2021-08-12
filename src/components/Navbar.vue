<style>
	.header {
        background: #d1b995;
        display: flex;
        height: 50px;
	}
</style>
<template>
  <nav class="navbar navbar-expand-lg navbar-light header">
    <div class="container-fluid">
       <img src="../assets/images/restaurant.png" width="30px" height="30px">
      <a class="navbar-brand" href="#">DAPOER MOMMY</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/makanan">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gallery">Gallery</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/kerajang">Keranjang
              <b-icon-cart4></b-icon-cart4>
              <span class="badge badge-success ml-2">0</span>
            </router-link>
             
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    name : 'Navbar'
}
</script>
