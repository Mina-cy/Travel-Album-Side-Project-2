<script setup>
defineProps({
    imgSrc: String
});
</script>

<template>
    
    <div
        class="max-w-[80%] lg:max-w-[95%] rounded-tl-[15rem] rounded-br-[2rem] overflow-hidden shadow-[4px_4px_8px_-2px_rgba(0,0,0,0.4)] border border-stone-200">
        <img v-if="imgSrc" :src="imgSrc"
            class="w-full h-auto object-cover hover:grayscale-0 transition-all duration-1000 scale-105" />
    </div>
</template>
<style scoped> </style>