<script setup>
import { RouterView, RouterLink, useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <header class="bg-[#FDFBF7] px-8 py-6 flex justify-between items-center border-b border-stone-100 shadow-sm">

    <RouterLink to="/" title="前往首頁">
      <h1 class="text-stone-500 font-serif italic text-xl tracking-[0.2em]">
        MY JOURNAL
      </h1>
    </RouterLink>

    <nav class="flex gap-6 items-center">

      <RouterLink to="/" title="前往首頁"
        class="text-sm font-bold tracking-[0.2em] px-2 py-2 text-stone-400 border-b-2 border-transparent hover:text-rose-400 hover:border-rose-200 transition-all duration-300"
        exact-active-class="text-rose-400 !border-rose-200">
        HOME
      </RouterLink>

      <RouterLink to="/album" title="前往相簿頁"
        class="text-sm font-bold tracking-[0.2em] px-2 py-2 text-stone-400 border-b-2 border-transparent hover:text-rose-400 hover:border-rose-200 transition-all duration-300"
        :class="{ 'text-rose-400 !border-rose-200': route.path === '/album' || route.path.includes('/photo/') }">
        ALBUM
      </RouterLink>

      <RouterLink to="/about" title="前往關於我"
        class="text-sm font-bold tracking-[0.2em] px-2 py-2 text-stone-400 border-b-2 border-transparent hover:text-rose-400 hover:border-rose-200 transition-all duration-300"
        :class="{ 'text-rose-400 !border-rose-200': route.path === '/about'}">
        ABOUT
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
