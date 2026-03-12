<script setup>
</script>
<template>
    <div class="space-y-6 max-w-xl " data-aos="fade-up" data-aos-delay="300">
        <p class="text-4xl lg:text-3xl italic leading-relaxed text-stone-600">
            <slot name="header">
                "我是 Mina，
                <br>
                正在朝前端工程師的方向努力。"
            </slot>
        </p>

        <div
            class="font-sans text-base lg:text-lg lg:leading-[1.2] xl:leading-[1.8] text-stone-600 tracking-wider space-y-6 font-light">
              <p style="text-indent:2em; margin:0;">
                <slot name="paragraph1">
                為什麼轉職前端？
            </slot>
              </p>
            <!-- 第二個段落 slot -->
            <p style="text-indent:2em; margin:0;">
                <slot name="paragraph2">

                    過往的經驗讓我深刻體會到：頁面就是品牌的門面，會直接影響使用者的心情、停留時間，甚至下單意願。當我發現「將畫面呈現出來」的關鍵角色正是前端工程師時，我確定了——這就是我想投入的方向。
                    把腦中的畫面化為可互動的頁面，讓使用者因為這個介面而有更好的體驗——這份成就感，是我持續前進最大的動力。
                </slot>
            </p>

        </div>
    </div>
</template>
<style scoped>

</style>