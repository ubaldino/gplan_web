<template>
  <transition name="fade" mode="out-in">
    <div class="card shadow rounded-lg py-5">
    <div class="card-body">
        <div class="row align-items-center">
            <logo-vue class="col-xl-6" />
            index
        </div>
    </div>
    </div>
  </transition>
</template>

<script setup>
    import LogoVue from "../components/Logo.vue";

    document.title = "Vite with Vue and Pinia";
</script>
