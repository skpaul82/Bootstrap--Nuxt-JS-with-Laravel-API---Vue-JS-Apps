<template>
  <div>
    <Nav />
    <div class="jumbotron mb-3"></div>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>


<script>
import Nav from '@/components/Nav'
  export default {
    components: {
      Nav
    }
  }
</script>
