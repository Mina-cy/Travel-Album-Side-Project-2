<script setup>
import { ref, computed, onMounted } from 'vue';
import { useMouse, useWindowSize } from '@vueuse/core';
import AboutPhotoLeft from '@/components/AboutPhotoLeft.vue';
import AboutPhotoRight from '@/components/AboutPhotoRight.vue';
import AboutText from '@/components/AboutText.vue';
import aboutData from '@/assets/about.json';
import AOS from 'aos';
const iglink = 'https://www.instagram.com/melisande_voyage?igsh=MTNiMmdnOHVnazJhdQ%3D%3D&utm_source=qr'
const github = 'https://github.com/Mina-cy'
const { x, y } = useMouse();
const { width } = useWindowSize();

// 視差效果：讓背景大字隨滑鼠輕微晃動
const parallax = computed(() => {
    const mx = (x.value / width.value - 0.5) * 90;
    const my = (y.value / width.value - 0.5) * 60;
    return { transform: `translateX(${mx}px) translateY(${my}px)`, transition: 'transform 0.4s ease-out' };
});
const getPhotoUrl = (photo) => {
    return photo ? new URL(`../assets/images/aboutimg/${photo.aboutImgName}`, import.meta.url).href : '';
};
const fixedPic1 = aboutData.find(item => item.id === 1);
const fixedPic2 = aboutData.find(item => item.id === 2);
// 隨機照片池
const randomPool = computed(() =>
    aboutData.filter(item => ![1, 2].includes(item.id))
);
const getRandomPic = () => {
    const pool = randomPool.value;
    return pool[Math.floor(Math.random() * pool.length)];
};

onMounted(() => { AOS.refresh(); });
</script>


<template>
    <div class="min-h-screen bg-[#FDFBF7] text-stone-800 font-serif overflow-hidden">

        <!-- A. 背景裝飾：超巨大的年份或標題 -->
        <div class="fixed top-20 -left-10 opacity-[0.04] select-none pointer-events-none" :style="parallax">
            <h1 class="text-[25vw] leading-none uppercase italic font-black">Mina</h1>
        </div>

        <!-- B. 主視覺區域 -->
        <main class="relative z-10 max-w-7xl mx-auto pl-5 sm:pl-30 lg:px-10 pt-32 pb-40 space-y-40">

            <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ">
                <!-- 左側：視覺照片 -->
                <div class="lg:col-span-6 relative" data-aos="fade-right" data-aos-duration="1500">

                    <div class="absolute -top-12 left-0 flex items-baseline gap-4">
                        <span class="text-xs uppercase tracking-[0.4em] text-stone-400 font-sans font-bold">
                            About the Editor</span>
                    </div>

                    <!-- 照片容器 -->
                    <AboutPhotoLeft :img-src="getPhotoUrl(fixedPic1)" />

                    <!-- 裝飾小字 (側邊垂直) -->
                    <div class="absolute right-0 top-1/2 -rotate-90 origin-right hidden xl:block">
                        <p class="text-[10px] tracking-[0.6em] uppercase text-stone-300 font-sans font-black">
                            Captured in Memories // 2026
                        </p>
                    </div>
                </div>

                <!-- 右側：排版內容 -->
                <div class="lg:col-span-6 flex flex-col justify-center gap-4 xl:gap-6 pl-2 xl:pl-16">

                    <div class="lg:mb-10 xl:mb-4 relative" data-aos="fade-up">
                        <h2
                            class="text-[6rem] lg:text-[8rem] xl:text-[10rem] font-serif italic leading-[0.75] tracking-tighter text-stone-900">
                            M<span class="text-rose-200/80 not-italic">'</span>s <br />
                            <span class="text-stone-950">Journal</span><span class="text-rose-300">.</span>
                        </h2>
                        <!-- 裝飾線 -->
                        <div class="h-[1px] w-30 bg-rose-300/70 mt-12"></div>
                    </div>

                    <!-- 內文敘述-->
                    <AboutText></AboutText>
                </div>
            </section>

            <section class=" grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ">
                <!-- 照片容器 -->
                <div class="lg:col-span-6 relative pl-2 xl:pl-16 pt-0 order-1 lg:order-2" data-aos="fade-right"
                    data-aos-duration="1500">
                    <AboutPhotoRight :img-src="getPhotoUrl(fixedPic2)" />
                </div>

                <!-- 左側：排版內容 -->
                <div class="lg:col-span-6 flex flex-col justify-center lg:pl-16 order-2 lg:order-1">

                    <div class="mb-12 relative" data-aos="fade-up">
                        <!-- 裝飾線 -->
                        <div class="h-[2px] w-24 bg-rose-300 mt-10"></div>
                    </div>

                    <!-- 內文敘述-->
                    <AboutText>
                        <template #header>
                            "用攝影收藏生活微粒，
                            <br>
                            用程式碼構築理想介面。"
                        </template>
                        <template #paragraph1>
                            建立這個作品的初衷，是因為我平常喜歡攝影、聽音樂，希望將生活中收集到的「美」結合程式呈現出來。
                        </template>

                        <template #paragraph2>
                            我的個性外向活潑，喜歡與人交流，這讓我在團隊合作中能夠順暢溝通、樂於分享想法；但同時我也保有心思細膩的一面，能夠察覺細節、理解他人的需求。我可以是團隊中帶動氣氛的人，也能在需要的時候靜下來專注投入自己的工作節奏。這樣的特質，讓我無論在獨立作業或團隊協作中，都能找到適合自己的位置，彈性地應對不同的工作情境。
                        </template>
                    </AboutText>


                    <!-- 底部互動：極簡連結 -->
                    <div class="mt-6 xl:mt-10 flex items-center gap-12" data-aos="fade-up" data-aos-delay="500">
                        <RouterLink to="/album" class="group flex items-center gap-3">
                            <span
                                class="text-[11px] font-sans font-black uppercase tracking-[0.3em] border-b border-stone-800 pb-1 group-hover:text-rose-400 group-hover:border-rose-400 transition-all">
                                Collection
                            </span>
                            <i
                                class="fas fa-arrow-right text-[10px] group-hover:translate-x-2 transition-transform"></i>
                        </RouterLink>

                        <div class="flex gap-6 text-stone-300">
                            <a :href="iglink" target="_blank" class="hover:text-rose-400 transition-colors"><i
                                    class="fab fa-instagram"></i></a>
                            <a :href="github" target="_blank" class="hover:text-rose-400 transition-colors"><i
                                    class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>


            </section>

            <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ">
                <!-- 左側：視覺照片 -->
                <div class="lg:col-span-6 relative" data-aos="fade-right" data-aos-duration="1500">

                    <div class="absolute -top-12 left-0 flex items-baseline gap-4">
                        <span class="text-xs uppercase tracking-[0.4em] text-stone-400 font-sans font-bold">
                            UIUX program</span>
                    </div>

                    <!-- 照片容器 -->
                    <AboutPhotoLeft :img-src="getPhotoUrl(getRandomPic())" />

                    <!-- 裝飾小字 (側邊垂直) -->
                    <div class="absolute right-0 top-1/2 -rotate-90 origin-right hidden xl:block">
                        <p class="text-[10px] tracking-[0.6em] uppercase text-stone-300 font-sans font-black">
                            Captured in Memories // 2026
                        </p>
                    </div>
                </div>

                <!-- 右側：排版內容 -->
                <div class="lg:col-span-6 flex flex-col justify-center gap-4 xl:gap-6 pl-2 xl:pl-16">

                    <div class="lg:mb-10 xl:mb-4 relative" data-aos="fade-up">
                        <!-- 裝飾線 -->
                        <div class="h-[1px] w-30 bg-rose-300/70 mt-12"></div>
                    </div>

                    <!-- 內文敘述-->
                    <AboutText>
                        <template #header>
                            "系統化學習UIUX，
                            <br>
                            產業新尖兵540小時密集訓練。"
                        </template>
                        <template #paragraph1>
                            建立這個作品的初衷，是因為我平常喜歡攝影、聽音樂，希望將生活中收集到的「美」結合程式呈現出來。
                        </template>

                        <template #paragraph2>
                            我的個性外向活潑，喜歡與人交流，這讓我在團隊合作中能夠順暢溝通、樂於分享想法；但同時我也保有心思細膩的一面，能夠察覺細節、理解他人的需求。我可以是團隊中帶動氣氛的人，也能在需要的時候靜下來專注投入自己的工作節奏。這樣的特質，讓我無論在獨立作業或團隊協作中，都能找到適合自己的位置，彈性地應對不同的工作情境。
                        </template>
                    </AboutText>
                </div>
            </section>
        </main>



        <!-- 底部頁尾：細線裝飾 -->
        <footer class="p-10 border-t border-stone-100 flex justify-between items-center px-10">
            <span class="text-[9px] uppercase tracking-[0.5em] text-stone-300 font-sans font-bold">
                © Mina Edit // Editorial Project</span>
            <span class="text-[9px] uppercase tracking-[0.5em] text-stone-300 font-sans font-bold">
                Crafted With Passion</span>
        </footer>
    </div>

</template>



<style scoped>
/* 增加標題深度感 */
h2 {
    text-shadow: 3px 10px 50px rgba(0, 0, 0, 0.6);
}

/* 文字渲染優化 */
p {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}
</style>
