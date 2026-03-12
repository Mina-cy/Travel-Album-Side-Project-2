<script setup>
import Card from '@/components/Card.vue';
import { ref } from 'vue'; 
import albumData from '@/assets/album.json';
const list = ref(albumData);

</script>

<template>
    <!-- 最小高度是整個視窗 -->
  <div class="min-h-screen bg-[#F5F3F0] p-10">
    <!-- 標題區域-->
    <div class="max-w-7xl mx-auto mb-12 text-center">
      <h2 class="text-4xl font-serif italic text-stone-600 underline underline-offset-8 decoration-rose-200">
       M' Gallery
      </h2>
    </div>

    <!-- 用grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
      <Card v-for="photo in list" :key="photo.id" :info="photo" />
                                                 <!-- 拿到陣列 -->
    </div>
  </div>
</template>

