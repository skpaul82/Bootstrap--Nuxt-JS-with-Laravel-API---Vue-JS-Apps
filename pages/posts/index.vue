<template>
  <div>
    <h2>Making API request - the Vue way</h2>
    <hr>
    <div class="container row">
      <!-- {{posts}} -->
      <Card v-for="post in posts" :key="post.id" :post="post" class="col-md-4" />
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Card from '@/components/Card'

  export default{
    components: {
      Card
    },
    data() {
      return {
        posts: ""
      }
    },

    // the fetch method is used to fill the store before rendering the page. It's like asyncData method except it doesn't set the component data.
    // .. code ..

    // Async await to make API request
    // asyncData work in both server-end and client-end
    async asyncData(){
      // let res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      // return {posts: res.data}

      let {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
      return {posts: data}
    },
    head: {
      title: "List of Posts"
    }

    // asyncData work in both server-end and client-end
    /* asyncData(){
      // console.log(context)
      return axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        // console.log(res.data)
        return {posts: res.data}
      })
      .catch(error => {
        console.log(error)
      })
    } */
  }
</script>
<!--
<script>
import axios from 'axios'
  export default {
    data() {
      return{
        posts: []
      }
    },

    // mounted only work on client-end
    mounted() {
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        console.log(response)
        this.posts = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
</script>
-->
