<template>
  <div>
    <h1>Contact</h1>
    <div class="col-xs-12 col-6 offset-md-3">
      <form>

      <div class="mb-3">
        <input type="text" v-model="name" class="form-control" placeholder="Name">
      </div>
      <div class="mb-3">
        <input type="email" v-model="email" class="form-control" placeholder="Email">
      </div>
      <div class="mb-3">
        <input type="tel" v-model="phone" class="form-control" placeholder="Pnone Number">
      </div>
      <div class="mb-3 text-center">
        <button @click="submitContact" class="btn btn-primary">Submit</button>
      </div>
      </form>
    </div>

  </div>
</template>

<script>
  export default{
    data() {
      return {
        name: "",
        email: "",
        phone: ""
      }
    },

    methods:{
      submitContact(){
        event.preventDefault();
        //
        console.log(this.email);
      }
    }
  }
</script>
