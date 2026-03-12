<script setup>
import { ref } from 'vue';
import { useLikeStore } from '@/stores/LikeStore.js'
const likeStore = useLikeStore()

const props = defineProps({ info: Object })

// 判斷這張圖是否已按讚
const isLiked = () => likeStore.likedIds.includes(props.info.id)

// 模擬讚數 (基礎讚數 + 是否按讚)
const totalLikes = () => (props.info.id * 7) % 50 + (isLiked() ? 1 : 0)

const getImgUrl = (imgName) => {
  return new URL(`../assets/images/${imgName}`, import.meta.url).href;
};
</script>

<template>
  <div
    class="w-[350px] h-auto bg-[#F9F9F7] rounded-[0.5rem] border border-stone-200/60 shadow-sm hover:shadow-md duration-700 overflow-hidden flex flex-col p-3">

    <div class="relative w-full aspect-[4/5] bg-white/40 flex items-center justify-center overflow-hidden rounded-sm">
      <img :src="getImgUrl(info.imgName)" :alt="info.alt"
        class="max-w-[95%] max-h-[95%] object-contain border-[0.5px] border-stone-200/50 shadow-sm">
    </div>

    <div class="pt-5 pb-1 flex flex-col justify-between flex-grow text-center">
      <div class="pb-2">
        <h2
          class="text-[10px] uppercase tracking-[0.3em] text-rose-300 font-bold mb-2 flex items-center justify-center gap-2">
          <span class="w-4 h-[1px] bg-rose-200"></span>
          {{ info.city }}
          <span class="w-4 h-[1px] bg-rose-200"></span>
        </h2>

        <!-- 城市名稱 -->
        <p
          class="text-2xl font-serif font-medium text-stone-700 italic leading-tight h-[64px] flex items-center justify-center">
          {{ info.name }}
        </p>

        <!-- 新增：國家與城市的組合描述（可選，增加豐富度） -->
        <p class="text-[9px] text-stone-400 mt-2 tracking-widest uppercase">
          Discovery in {{ info.country }}
        </p>
      </div>

      <!-- 下方互動區 -->
      <div class="pt-3 border-t border-stone-200/40 flex justify-between items-center px-1">
        <RouterLink :to="`/photo/${info.id}`"
          class="flex items-center gap-1 text-[11px] font-bold text-stone-400 hover:text-rose-400 transition-colors tracking-[0.2em]">
          <span>
            VIEW MORE
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </RouterLink>

        <button type="button" @click.stop="likeStore.toggleLike(info.id)"
          class="cursor-pointer flex items-center gap-2 px-3 py-1 rounded-full transition-all border border-stone-100"
          :class="isLiked() ? 'bg-rose-50 border-rose-100' : 'bg-white/60'">
          <i :class="[isLiked() ? 'fas' : 'far', 'fa-heart', isLiked() ? 'text-rose-500 scale-110' : 'text-rose-200']"
            class="text-xs transition-all duration-300"></i>

          <span :class="isLiked() ? 'text-rose-400' : 'text-stone-400'" class="text-[10px] font-mono font-bold">
            {{ totalLikes() }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
