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
console.log(array.value);

const outsideClickEl = ref(null)
onClickOutside(outsideClickEl, () => showBigImage.value = false)

const pageScrollEl = ref(null)
const { x: scrollX, y: scrollY } = useScroll(pageScrollEl, { behavior: 'smooth' })

const { width: screenWidth, height: screenHight } = useWindowSize()

</script>

<template>
  <div class="home-page">
  <section>
    <h1>Buy Cases</h1>
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
  <!-- <div class="skin-browse-container">
    <div class="top-controls">
      <form @submit.prevent>
          <select name="" id="" v-model="sortColumn" @change="fetcher()">
            <option value="price">Price</option>
            <option value="default">Default</option>
            <option value="quantity">Quantity</option>
            <option value="name">Name</option>
          </select>
          <select name="" id="" v-model="sortDir" @change="fetcher()">
            <option value="asc">Ascendin</option>
                    <option value="desc">Descending</option>
                  </select>
                  <input type="text" v-model="query" @change="pageStart = 1">
                  <button @click="fetcher()">Seach</button>
                </form>
                <div class="pagination">
                  <button @click="pageNumber -= 1">Previus</button>
                  <input type="number" v-model="pageNumber" min="1">
                  <button @click="pageNumber += 1">Next</button>
                </div>
              </div>
              <div class="screen-cover" v-if="showBigImage">
                <div ref="outsideClickEl">
                  <button @click="showBigImage = false">Close</button>
                  <img :src="bigImageUrl" alt="">
                </div>
              </div>
              <div class="skin-grid">
                              <div v-for="item in array.results" :key="item.asset_description.classid" class="skin-card">
                                <img @click="showBigImage = true,
                                  bigImageUrl = 'https://community.akamai.steamstatic.com/economy/image/' + item.asset_description.icon_url"
                                  :src="'https://community.akamai.steamstatic.com/economy/image/' + item.asset_description.icon_url" alt="">
                                <div>
                                  <h2 :style="{ color: '#' + item.asset_description.name_color }">
                                    {{ item.name }}
                                  </h2>
                                  <p>
                                    {{ item.sell_price_text }} - count: {{ item.sell_listings }}
                                  </p>
                                  <a v-if="item.asset_description.market_actions" :href="item.asset_description.market_actions[0].link">Inspect
                                    in
                                    game</a>
                                </div>
                              </div>
                            </div>
              <p v-if="!array.results">Item not found</p>

              <div class="pagination">
                <button @click="pageNumber -= 1">Previus</button>
                <input type="number" v-model="pageNumber">
                <button @click="pageNumber += 1">Next</button>
              </div>
            </div> -->
  </div>
</template>


<style>
.home-page {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.top-controls {
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
  background: rgb(32, 32, 32);
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
}

.cases {
  display: flex;
  flex-direction: row;
  height: fit-content;
  /* width: 100%; */
  margin: 0 0 2rem;
  background: rgb(31, 31, 31);
  gap: 1rem;
  border-radius: 1rem;
  padding: 1rem;
  overflow: scroll;
  position: relative;
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
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
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
</style>