<template>
    <div>
        <h2>Making API request</h2>
        <hr />
        <div class="container row">
            <!-- {{posts}} -->
            <Card
                v-for="post in posts"
                :key="post.id"
                :post="post"
                class="col-md-4"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card";
import { mapGetters } from "vuex";
// import store from "vuex";

export default {
    components: {
        Card
    },
    data() {
        return {
            allPosts: ""
        };
    },
    computed: {
        ...mapGetters(["posts"])
        /* allPost() {
            return this.$store.getters.posts;
        } */
    },

    // fetch will not sync with local component data
    async fetch({ store }) {
        let { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        // return { allPosts: data }; //local component data, this will not work with fetch
        store.dispatch("setPosts", data);
    },

    /* async asyncData({ store }) {
        let { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        // return { allPosts: data };
        store.dispatch("setPosts", data);
    }, */
    head: {
        title: "List of Posts"
    }
};
</script>
