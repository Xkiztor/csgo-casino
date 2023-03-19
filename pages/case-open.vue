<script setup>
let skins = [
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

// let skins = [

// ]

let images = [
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPP7I6vdk3lu-M1wmeySyoD8j1yglB89IT6mOo_GIQ82NFjS_1nol-ftg57pupqbmCAy7iUisXbYlxK-iU1IOuJuhaGACQLJIyTq34k/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq42Ok_7hPoTdl3lW7Ysj3erHptrx0VKw-xVsZGCmIYTBelA3Mw6FqVXqx-q-hcXu7pnBm3pnpGB8sqq5zINz/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLfYkWNF18lwmO7Eu4igjQWx-xFoYGqmJ4WRcgQ4Z17T_1i5wb2-gZPv7s-fwXNjuCEks33D30vgwSze3sU/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-KmuL4Nq_ulGdE7fp8j-3I4IHKhFWmrBZyZ2z0LI_AdAY7aFDX-Qe3xLi9h8Po7ZXIyCAw7iBw5S6PnhLh0BgYOvsv26JDy_wWDg/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqP_xMq3IqWdQ-sJ0xOrDp92tiQ238xJvZ2HzcYOSdAM6NA7U-Vfryb3ogZTvuZvIzHdr6HY8pSGKuKddSNs/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODcfi9P6s65mpS0mvLwOq7cqWdQ-sJ0xLzAo4rx2lfj_ko-Z2nxLNWQcQU-NwzX_gTqxrruhsLq6JzImiRq73E8pSGKGKM1zdg/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq42Ok_7hPoTdl3lW7Ysj3erHptrx0VKw-xVsZGCmIYTBelA3Mw6FqVXqx-q-hcXu7pnBm3pnpGB8sqq5zINz/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLfYkWNF18lwmO7Eu4igjQWx-xFoYGqmJ4WRcgQ4Z17T_1i5wb2-gZPv7s-fwXNjuCEks33D30vgwSze3sU/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-KmuL4Nq_ulGdE7fp8j-3I4IHKhFWmrBZyZ2z0LI_AdAY7aFDX-Qe3xLi9h8Po7ZXIyCAw7iBw5S6PnhLh0BgYOvsv26JDy_wWDg/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqP_xMq3IqWdQ-sJ0xOrDp92tiQ238xJvZ2HzcYOSdAM6NA7U-Vfryb3ogZTvuZvIzHdr6HY8pSGKuKddSNs/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODcfi9P6s65mpS0mvLwOq7cqWdQ-sJ0xLzAo4rx2lfj_ko-Z2nxLNWQcQU-NwzX_gTqxrruhsLq6JzImiRq73E8pSGKGKM1zdg/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq42Ok_7hPoTdl3lW7Ysj3erHptrx0VKw-xVsZGCmIYTBelA3Mw6FqVXqx-q-hcXu7pnBm3pnpGB8sqq5zINz/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLfYkWNF18lwmO7Eu4igjQWx-xFoYGqmJ4WRcgQ4Z17T_1i5wb2-gZPv7s-fwXNjuCEks33D30vgwSze3sU/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-KmuL4Nq_ulGdE7fp8j-3I4IHKhFWmrBZyZ2z0LI_AdAY7aFDX-Qe3xLi9h8Po7ZXIyCAw7iBw5S6PnhLh0BgYOvsv26JDy_wWDg/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KcqP_xMq3IqWdQ-sJ0xOrDp92tiQ238xJvZ2HzcYOSdAM6NA7U-Vfryb3ogZTvuZvIzHdr6HY8pSGKuKddSNs/360fx360f',
  'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODcfi9P6s65mpS0mvLwOq7cqWdQ-sJ0xLzAo4rx2lfj_ko-Z2nxLNWQcQU-NwzX_gTqxrruhsLq6JzImiRq73E8pSGKGKM1zdg/360fx360f',
]

let config = reactive({
  elemementWidth: 200,
  animationDuration: 5000 + 'ms'
})

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
  jumpToNumber.value = Math.floor(Math.random() * (skins.length - 10) + 10)
}

const getRandomNum = () => {
  if (Math.random() > 0.5) {
    return Math.random() * config.elemementWidth / 2
  } else {
    return - Math.abs(Math.random() * config.elemementWidth / 2)
  }
}

const reset = () => {
  let oldDuration = config.animationDuration
  config.animationDuration = 0
  jumpToNumber.value = 0
  setTimeout(() => {
    config.animationDuration = oldDuration
  }, "100");

}
</script>


<template>
  <div>
    <input type="number" v-model="jumpToNumber">
    <button @click="jump()">Random</button>
    <button @click="reset()">Reset</button>
    <div class="wrapper">
      <div class="pointer"></div>
      <div class="skin-wrapper" ref="skinWrapper">
        <div class="skins"
          :style="{ 'translate': '' + (skinWrapper?.clientWidth / 2 - config.elemementWidth / 2 - jumpToNumber * config.elemementWidth + getRandomNum()) + 'px' }">
          <!-- <div class="skins" :style="{ 'translate': '-' + jumpToNumber * 100 - skinWrapper?.clientWidth / 2 + 'px' }"> -->
          <div v-for="skin in skins" class="skin" :style="{ 'width': config.elemementWidth + 'px' }">
            <h1>{{ skin }}</h1>
            <img :src="images[Math.floor(Math.random() * images.length)]" alt="">
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
  width: 0.25rem;
  height: 100%;
  background: var(--text-shaded);
  /* border-radius: 1rem; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.skins {
  /* transform: translateX(-200px); */
  display: flex;
  transition: translate v-bind('config.animationDuration') cubic-bezier(0, .67, .63, 1);
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
  position: relative;
  /* border: 1px solid var(--interactive-color-hover); */
  /* background: var(--interactive-color); */
}

.skin img {
  height: 100px;
  width: 100px;
}

.skin h1 {
  position: absolute;
  top: 0;
  left: 1rem;
  opacity: 0.1;
}
</style>