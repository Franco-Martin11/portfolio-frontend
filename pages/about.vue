<template>

    <div>
        <h1>About Me</h1>
        <p>
            Welcome to my portfolio! I am a passionate developer with a love for creating beautiful and functional
            web applications.
            My journey in web development started a few years ago, and since then, I have honed my skills in various
            technologies.
        </p>
        <p>
            I enjoy working with modern frameworks and libraries, and I am always eager to learn new things.
            In this portfolio, you will find some of the projects I have worked on, showcasing my skills and
            creativity.
        </p>
        <p>
            Thank you for visiting my portfolio. Feel free to reach out if you would like to connect or collaborate!
        </p>
    </div>
    <div>
        <h1 class="font-thin text-red-400">Esto es una prueba a ver si es que funciona correctamente el script este de
            nuxt 3 que es nuevo y nunca lo
            use pero le tengo confianza</h1>
        <HeadingElement :title="name"></HeadingElement>
        <span>{{ count }}</span>
        <span>{{ doubleCount }}</span>
        <button type="button" @click="store.increment">Doble</button>
        <button class="btn btn-primary">Primary</button>
        <div class="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div class="collapse-content">
                <p>hello</p>
            </div>
        </div>
        <div v-for="item in linkRoutes" :key="item.id">
            {{ JSON.stringify(item) }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/store';
import { usePortfolioData } from '~/composable/usePortfolioData';

const store = useCounterStore()
const { name, count, doubleCount, } = storeToRefs(store)
const { getLinkRoutes } = usePortfolioData()
const linkRoutes = getLinkRoutes()
</script>

<style scoped></style>