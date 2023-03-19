<script setup>
let numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];

const skinWrapper = ref(null)
const { x } = useScroll(skinWrapper)

const randomNumber = () => {
  x.value = Math.floor(Math.random() * 5000 + 1)
}

onMounted(() => {
  console.log(skinWrapper.value);
})

const centerNumber = computed(() => {
  return skinWrapper?.clientWidth / 2 - 50 - jumpToNumber * 100
  // return x.value + (skinWrapper.value?.clientWidth / 2)
})

const jumpToNumber = ref(0)

const jump = () => {
  jumpToNumber.value = Math.floor(Math.random() * 90 + 10)
}

const getRandomNum = () => {
  if (Math.random() > 0.5) {
    return Math.random() * 50
  } else {
    return - Math.abs(Math.random() * 50)
  }
}
</script>


<template>
  <div>
    <input type="number" v-model="jumpToNumber">
    <button @click="jump()">Random</button>
    <button @click="jumpToNumber = 0">Reset</button>
    <div class="wrapper">
      <div class="pointer"></div>
      <div class="skin-wrapper" ref="skinWrapper">
        <div class="skins"
          :style="{ 'translate': '' + (skinWrapper?.clientWidth / 2 - 50 - jumpToNumber * 100 + getRandomNum()) + 'px' }">
          <!-- <div class="skins" :style="{ 'translate': '-' + jumpToNumber * 100 - skinWrapper?.clientWidth / 2 + 'px' }"> -->
          <div v-for="skin in numbers" class="skin">
            {{ skin }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.wrapper {
  width: 90vw;
  background: var(--element-background);
  padding: 1rem 0;
  border-radius: 0.5rem;
  position: relative;
}

.pointer {
  width: 1px;
  height: 20px;
  background: red;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.skins {
  /* transform: translateX(-200px); */
  display: flex;
  transition: translate 5s cubic-bezier(0, .67, .63, 1);
}

.skin-wrapper {
  overflow: hidden;
  position: relative;
}

.skin {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  outline: 1px solid red;
  /* border: 1px solid var(--interactive-color-hover); */

}
</style>