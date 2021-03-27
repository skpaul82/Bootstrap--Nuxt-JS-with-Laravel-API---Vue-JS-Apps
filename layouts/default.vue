<template>
    <div>
        <Nav />
        <div class="jumbotron mb-3"></div>
        <main class="container">
            <Nuxt />
        </main>
        <Footer />
        <button class="btn btn-link" v-scroll-to="'body'">
            <i class="fas fa-arrow-up"></i>
        </button>
    </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "../components/Footer";

export default {
    components: {
        Nav,
        Footer
    }
};
</script>
