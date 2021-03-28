<template>
    <div>
        <h1>Photo Gallery from API</h1>
        <hr />

        <div class="container row">
            <!-- {{ photos }} -->
            <Photo
                v-for="photo in photos"
                :key="photo.id"
                :photo="photo"
                class="col-xs-12 col-md-4 mb-4"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Photo from "@/components/Photo";
import { mapGetters } from "vuex";

export default {
    components: {
        Photo
    },
    data() {
        return {
            allPhotos: ""
        };
    },
    computed: {
        ...mapGetters(["photos"])
    },

    async fetch({ store }) {
        let { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/photos"
        );
        // console.log(data);
        store.dispatch("setPhotos", data);
    },
    head() {
        return {
            title: "Photo Gallery"
        };
    }
};
</script>
