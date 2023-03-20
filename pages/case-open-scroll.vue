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
  return x.value + (skinWrapper.value?.clientWidth / 2)
})

const jumpToNumber = ref(0)

const jump = () => {
  x.value = (jumpToNumber.value * 100) - skinWrapper.value?.clientWidth / 2 + 50
}
</script>


<template>
  <div>
    {{ x }}
    <button @click="x -= 100">- 100</button>
    <button @click="x += 100">+ 100</button>
    <button @click="randomNumber()">random</button>
    {{ centerNumber }}
    <input type="number" v-model="jumpToNumber">
    <button @click="jump">jump to</button>
    <div class="wrapper">
      <div class="pointer"></div>
      <div class="skin-wrapper" ref="skinWrapper">
        <div v-for="skin in numbers" class="skin">
          {{ skin }}
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

.skin-wrapper {
  display: flex;
  overflow: scroll;
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