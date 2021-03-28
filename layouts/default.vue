<template>
    <div>
        <Nav />
        <div class="jumbotron"></div>
        <main class="container py-5">
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
