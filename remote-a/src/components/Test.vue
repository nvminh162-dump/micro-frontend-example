<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import MyApp from '../app';

const route = useRoute();
const isFromBackButton = ref(false);
watch(() => route, (_newRoute, _oldRoute) => {
    isFromBackButton.value = MyApp.isFromBackButton;
}, { deep: true, immediate:true });
</script>

<template>

    <div class="bg-secondary text-light d-flex justify-content-center align-items-center w-100 h-100 mt-3">
        <div class="bg-danger p-3">
            <p v-if="isFromBackButton">This page from the <b>Back/Forward</b> Button</p>
            <p v-else>Hello</p>
        </div>
    </div>

</template>