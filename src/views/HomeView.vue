<!-- 首頁 -->
 <script setup>

 </script>

<template>
  <div class="flex flex-col justify-center items-center h-screen bg-[#FDFBF7]">
    <div class="mb-12 text-center relative">
      <h2 class="text-5xl font-serif tracking-tighter text-stone-800 italic">
        Welcome to M'
        <span class="text-rose-300 not-italic">Journal!</span>
      </h2>
      <p class="text-stone-400 text-[10px] tracking-[0.5em] mt-4 uppercase font-light">Slow life </p>
    </div>

    <RouterLink to="/album" title="前往相簿頁"
     class="cursor-pointer flex items-center gap-3 px-10 py-4 bg-rose-200 text-rose-700 rounded-full shadow-sm
         shadow-rose-200 hover:shadow-sm hover:shadow-rose-300 transition-all font-bold tracking-widest text-sm">
        <span class="cursor">START NOW</span>
        <i class="fa-solid fa-arrow-right opacity-70"></i>
    </RouterLink>
  </div>
</template>
