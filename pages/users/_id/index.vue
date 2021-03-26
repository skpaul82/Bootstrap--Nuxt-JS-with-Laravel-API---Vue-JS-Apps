<template>
  <div>
    <h2>This us user's id {{$route.params.id}}</h2>
  </div>
</template>

<script>
  export default {
    // validate(context){
      // context object has all properties i.e. route, vue store and much more
    validate({params}){

      return /^\d+$/.test(params.id)

    }
  }
</script>
