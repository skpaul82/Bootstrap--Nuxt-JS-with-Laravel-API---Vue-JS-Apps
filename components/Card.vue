<template>
  <div>
    <div class="card bg-light mb-3" >
      <div class="card-header">Post: {{post.id}}</div>
      <div class="card-body">
        <h5 class="card-title">
          <nuxt-link :to="{name: 'posts-id', params: {id: post.id}}">{{post.title}}</nuxt-link>
        </h5>
        <!-- <h6 class="card-subtitle mb-2 text-muted">{{post.title}}</h6> -->
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      post: Object
    }
  }
</script>
