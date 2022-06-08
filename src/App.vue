<template>
    <Header />
    <div class="allPageViewer">
        <router-view />
    </div>
    <Footer />
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
};
</script>
<style>
@import "/assets/css/reset.css";

#app {
    font-family: Roboto;
    text-align: center;
    color: #2c3e50;
}
.allPageViewer {
    margin-top: 130px;
    margin-bottom: 50px;
}
</style>
