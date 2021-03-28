<template>
    <div>
        <h1>Project: Nuxt JS static/SPA website template.</h1>
        <hr />
        <p>9.1 Project - Laravel API with Nuxt JS frontend client</p>
        <div class="col-12 text-center py-4">
            <nuxt-link to="/posts" class="btn btn-lg btn-primary mx-3"
                >Read Articles</nuxt-link
            >
            <nuxt-link to="/gallery" class="btn btn-lg btn-success mx-3">
                Check Gallery
            </nuxt-link>
        </div>

        <div class="col-xs-12 py-4">
            <h2 class="border-bottom">Photos</h2>
            <!-- <Photo /> -->
        </div>

        <div class="col-12 py-4">
            <h2 class="border-bottom">Post</h2>
            <!-- <Photo /> -->
        </div>
    </div>
</template>

<script>
// import Card from "../components/Card";
// import Photo from "@/components/Photo";
// import { mapGetters } from "vuex";

// export default {
//     component: {
//         // Card,
//         Photo
//     },
//     data() {
//         return {
//             // posts: "",
//             allPhotos: ""
//         };
//     },
//     computed: {
//         ...mapGetters(["photos"])
//     }
//     async fetch({store}){
//         let {data} = await axios.get("https://jsonplaceholder.typicode.com/photos");
//         store.dispatch("setPhotos", data);
//     }
// };
</script>
