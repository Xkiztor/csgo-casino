<script setup>
import { onClickOutside, useScroll, useWindowSize } from '@vueuse/core';
import { computed, ref, watch, watchEffect } from 'vue';
import Case from '../components/Case.vue';

const showBigImage = ref(false)
const bigImageUrl = ref('')

const array = ref([])

const sortColumn = ref('price')
const sortDir = ref('desc')
const query = ref('')
const pageSize = 24
const pageNumber = ref(1)

const pageStart = computed(() => {
  return (pageNumber.value * pageSize) - pageSize
})
watch(pageStart, () => {
  // fetcher()
  // scrollX.value = 0
})

const fetcher = async () => {
  await fetch(`http://localhost:8010/proxy/market/search/render/?search_descriptions=0&sort_column=${sortColumn.value}&sort_dir=${sortDir.value}&appid=730&norender=1&count=${pageSize}&start=${pageStart.value}&query=${query.value}`, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => array.value = data)
    .then((data) => console.log(data))
}
// fetcher()
// console.log(array.value);

const outsideClickEl = ref(null)
onClickOutside(outsideClickEl, () => showBigImage.value = false)

const pageScrollEl = ref(null)
const { x: scrollX, y: scrollY } = useScroll(pageScrollEl, { behavior: 'smooth' })

const { width: screenWidth, height: screenHight } = useWindowSize()

</script>

<template>
  <div class="home-page">
    <!-- <svg viewBox="0 0 1440 320" class="wave">
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ff9671" />
            <stop offset="100%" stop-color="#ffc75f" />
          </linearGradient>
        </defs>
        <path
          d="M0,256L24,218.7C48,181,96,107,144,80C192,53,240,75,288,96C336,117,384,139,432,128C480,117,528,75,576,53.3C624,32,672,32,720,48C768,64,816,96,864,133.3C912,171,960,213,1008,234.7C1056,256,1104,256,1152,224C1200,192,1248,128,1296,90.7C1344,53,1392,43,1416,37.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          fill="url(#myGradient)" stroke-width="5" />
      </svg> -->

    <section>
      <h1><span class="bg-text">Buy Cases</span></h1>
      <!-- <h1><span class="styled-text">Buy Cases</span></h1> -->
      <div class="cases-wrapper">
        <button @click="scrollX -= screenWidth * 0.5" class="left scroll-buttons">←</button>
        <button @click="scrollX += screenWidth * 0.5" class="right scroll-buttons">→</button>
        <div class="cases" ref="pageScrollEl">
          <Case :price="9" />
          <Case :price="5" />
          <Case :price="2" />
          <Case :price="100" />
          <Case :price="1" />
          <Case :price="9" />
          <Case :price="5" />
          <Case :price="2" />
          <Case :price="100" />
          <Case :price="1" />
          <Case :price="9" />
          <Case :price="5" />
          <Case :price="2" />
          <Case :price="100" />
          <Case :price="1" />
          <Case :price="9" />
          <Case :price="5" />
          <Case :price="2" />
          <Case :price="100" />
          <Case :price="1" />
          <Case :price="9" />
          <Case :price="5" />
          <Case :price="2" />
          <Case :price="100" />
          <Case :price="1" />
          <Case :price="9" />
          <Case :price="5" />
          <Case :price="2" />
          <Case :price="100" />
          <Case :price="1" />
        </div>
      </div>
    </section>
  </div>
</template>


<style>
.home-page {
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100%;
  /* opacity: 0.5; */
}

.home-page h1 {
  margin: 2rem 0;
}

.bg-text {
  margin: 0;
  line-height: 1;
  letter-spacing: -.025em;
  font-weight: 800;
  background: var(--orange-gradient);
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: var(--background-color);
}

span.styled-text {
  line-height: 1;
  letter-spacing: -.025em;
  font-weight: 800;
  background: var(--orange-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header {
  margin-bottom: 4rem;
}


@media screen and (min-width: 600px) {
  header {
    grid-template-columns: 5fr 4fr;
    grid-template-rows: 1fr;
  }
}


.cases {
  display: flex;
  flex-direction: row;
  height: fit-content;
  /* width: 100%; */
  margin: 0 0 2rem;
  /* background: rgb(31, 31, 31); */
  gap: 1rem;
  border-radius: 1rem;
  /* padding: 1rem 0; */
  padding: 0;
  overflow: scroll;
  position: relative;
}

.cases-wrapper::before {
  width: 90%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  /* background: linear-gradient(100deg, #34a853, #a7ed71); */
  filter: blur(100px);
  opacity: 0.2;
}

.cases-wrapper {
  padding: 0 2rem;
  position: relative;
}

.scroll-buttons {
  /* width: 100%; */
  /* display: flex; */
  position: absolute;
  top: 50%;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow-small);
  transform: translate(0, -50%);
  z-index: 3;
  /* justify-content: space-between; */
}

.scroll-buttons.left {
  left: 2rem;
}

.scroll-buttons.right {
  right: 2rem;
}

/* ---------- SKIN BROWSE (gammal) --------- */

/* .top-controls {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.pagination {
  width: fit-content;
}

.skin-browse-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
}

.skin-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media screen and (min-width: 700px) {
  .skin-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 1400px) {
  .skin-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.screen-cover {
  transition: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.screen-cover>div {
  background: var(--element-background);
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
}

.screen-cover button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 3;
}

.skin-card {
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 10rem 1fr;
  background: rgb(40, 40, 40);
  border-radius: 1rem;
  padding: 0.5rem;
  width: 100%;
}

.skin-card:hover {
  background: rgb(50, 50, 50);
}

.skin-card>div {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.skin-card img {
  height: 6rem;
} */

/* ------------------- */
</style>