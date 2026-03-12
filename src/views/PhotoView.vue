<!-- 內頁 -->
<script setup>
import { useRoute } from 'vue-router';
import { useLikeStore } from '@/stores/LikeStore';
import albumData from '@/assets/album.json';
import { computed } from 'vue';

const route = useRoute();
const likeStore = useLikeStore();
const id = route.params.id;

// 2. 核心邏輯：找出對應的那筆照片資料
// 注意：如果 id 是數字，要用 Number(id) 轉型
const photo = albumData.find(item => item.id === Number(id));
const formattedId = computed(() => {
  if (!photo) return '';
  // 如果 id 小於 10，補零；否則直接顯示
  return photo.id < 10 ? `0${photo.id}` : photo.id;
});
const getImgUrl = (imgName) => {
  return new URL(`../assets/images/${imgName}`, import.meta.url).href;
};
</script>

<template>
  <div v-if="photo" class="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-8 lg:p-24 overflow-hidden">

    <!-- 背景裝飾大字 (維持固定) -->
    <div class="fixed top-30 xl:top-20 right-10 pointer-events-none select-none">
      <h1 class="text-[15vw] font-serif font-black text-stone-200/40 italic uppercase leading-none">
        {{ photo.country }}
      </h1>
    </div>

    <div class="max-w-7xl w-full relative z-10 
      flex flex-col xl:flex-row 
      items-center xl:items-start 
      xl:justify-between gap-16 xl:gap-22">
      <div class="w-full max-w-2xl 2xl:max-w-none 2xl:w-1/2 relative">
        <span class="absolute -top-10 -left-6 text-7xl font-serif text-rose-200 italic z-20">
          {{ formattedId }}
        </span>

        <div class="relative z-10">
          <!-- 拱門造型 -->
          <div
            class="rounded-t-[12rem] rounded-b-[2rem] overflow-hidden shadow-2xl border-[2px] border-stone-200 bg-white">
            <img :src="getImgUrl(photo.imgName)" class="w-full h-auto max-h-[90vh] xl:max-h-[80vh] object-cover">
          </div>

          <!-- 裝飾圓點 -->
          <div class="absolute -bottom-9 -right-9 w-30 h-30 bg-rose-100/60 -z-10 rounded-full mix-blend-multiply">
          </div>
        </div>
      </div>

      <!-- 文字區 -->
      <div class="w-full 2xl:w-1/2 
      flex flex-col items-center xl:items-start 
      text-center xl:text-left 
      pt-4 xl:pt-30">
        <!-- Travel Memoires 裝飾線 -->
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-[1px] bg-stone-800"></div>
          <p class="text-[10px] tracking-[0.5em] uppercase font-bold text-stone-400">Travel Memoires</p>
          <div class="w-12 h-[1px] bg-stone-800 xl:hidden"></div>
        </div>

        <!-- 標題區域 -->
        <h1 class="text-5xl lg:text-7xl font-serif text-stone-800 leading-[0.9] mb-6">
          {{ photo.name }}<span class="text-rose-400">.</span>
        </h1>

        <!-- 地點資訊 -->
        <p class="text-base font-light text-stone-400 tracking-[0.2em] mb-8 italic">
          {{ photo.city }}, {{ photo.country }}
        </p>

        <!-- Quote 區塊 -->
        <div class="relative mb-10 max-w-lg">
          <!-- 引號裝飾  -->
          <span class="absolute -top-4 -left-2 text-6xl text-rose-200/80 font-serif">"</span>

          <p
            class="text-2xl lg:text-3xl text-stone-600 leading-relaxed font-serif italic border-stone-200 xl:border-l-2 xl:pl-8 pl-0">
            {{ photo.quote }}
          </p>

          <!-- 淡色分隔線 -->
            <p class="mt-6 pt-4 px-5 text-sm text-stone-400 leading-relaxed">
              {{ photo.mark }}
            </p>
        </div>

        <!-- 互動按鈕列 -->
        <div
          class="w-full mt-8 pt-6 flex items-center justify-center xl:justify-start gap-10 border-t text-rose-200/30">
          <!-- Back 按鈕 -->
          <RouterLink to="/album" 
          class="group flex items-center gap-3 hover:gap-4 transition-all duration-300">
            <i class="fas fa-arrow-left text-sm text-stone-400 group-hover:text-rose-400 transition-colors"></i>
            <span
              class="text-xs tracking-[0.3em] font-bold uppercase text-stone-500 group-hover:text-stone-800 transition-colors relative">
              Back
              <span
                class="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-300 group-hover:w-full transition-all duration-300"></span>
            </span>
          </RouterLink>

          <!-- 微小的裝飾點 -->
          <span class="w-1 h-1 rounded-full bg-stone-300"></span>

          <!-- Like 按鈕 -->
          <button @click="likeStore.toggleLike(photo.id)"
            class="group flex items-center gap-3 cursor-pointer hover:gap-4 transition-all duration-300">
            <i :class="[
              likeStore.likedIds.includes(photo.id) ? 'fas text-rose-400' : 'far text-stone-400 group-hover:text-rose-400',
              'fa-heart text-lg transition-all duration-300 group-hover:scale-110'
            ]"></i>
            <span :class="[
              'text-xs tracking-[0.3em] font-bold uppercase relative',
              likeStore.likedIds.includes(photo.id) ? 'text-rose-400' : 'text-stone-500 group-hover:text-stone-800'
            ]">
              Like
              <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-300 transition-all duration-300" :class="[
                likeStore.likedIds.includes(photo.id) ? 'w-full' : 'group-hover:w-full'
              ]"></span>
            </span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
