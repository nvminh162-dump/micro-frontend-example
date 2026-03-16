<script setup lang="ts">
import Test from '../components/Test.vue';
</script>
<template>
    <div class="d-flex align-items-center flex-column" style="height: 100vh;">
        <h1 class="text-center w-100">Home page</h1>
        <router-link to="/contact">Contact</router-link>
        <Test></Test>
    </div>
</template>