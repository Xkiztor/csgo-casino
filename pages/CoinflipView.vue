<script setup lang='ts'>
import { ref } from 'vue';
import { promiseTimeout, useTimeout } from '@vueuse/core'


const chosenSide = ref('')
const winnerSide = ref('')
const youWon = ref(false)

const flip = () => {
  if (!winnerSide.value) {
    let number = Math.random()
    console.log(number);
    if (number > 0.5) {
      winnerSide.value = 'ct'
      if (winnerSide.value === chosenSide.value) {
        youWon.value = true
      }
    } else {
      winnerSide.value = 't'
    }
  }
}

const { ready, start, stop } = useTimeout(3000, { controls: true })
</script>


<template>
  <div class="coinflip">
    <!-- <h1>Coinflip</h1> -->

    <div v-if="!chosenSide">
      <h1>Chose side</h1>
      <div class="side-choser">
        <button @click="chosenSide = 'ct'">
          <img src="../assets/ct.png" alt="">
        </button>
        <button @click="chosenSide = 't'">
          <img src="../assets/t.png" alt="">
        </button>
      </div>
    </div>
    <div v-else class="">
      <!-- <h1>You chose: {{ chosenSide === 'ct' ? 'Counter Terrorrist' : 'Terrorrist' }}</h1> -->
      <!-- <button" v-if="!winnerSide" class="flip">Flip</button> -->
      <div class="coin" @click="flip(), start()"
        :class="{ 't': winnerSide === 'ct', 'ct': winnerSide === 't', 'no-click': winnerSide }">
        <img src="../assets/ct.png" class="side-ct" alt="">
        <img src="../assets/t.png" class="side-t" alt="">
      </div>
      <div class="results" :class="{ 'show-results': ready && winnerSide }">
        <p v-if="ready">{{ winnerSide === chosenSide ? 'You Won!' : 'You lost' }}</p>
        <p v-else>...</p>
        <button @click="chosenSide = '', winnerSide = '', youWon = false">Play agian</button>
      </div>
    </div>
  </div>
</template>


<style>
.coinflip {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.coinflip>div {
  display: grid;
  margin: auto 0;
  place-items: center;
  perspective: 800px;
}


.side-choser button {
  border-radius: 1000rem;
  padding: 0;
}

.side-choser button,
.side-choser img {
  width: 13rem;
  height: 13rem;
}

.side-choser button:hover {
  scale: 105%;
}

.flip {
  width: 10rem;
  height: 4rem;
  font-size: 2rem;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
}

.coinflip .results {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  opacity: 0;
}

.coinflip .results.show-results {
  opacity: 1;
}

.coin {
  margin-top: 3rem;
  height: 13rem;
  width: 13rem;
  border-radius: 50%;
  transition: transform 1s ease-in;
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;
}

.coin.no-click {
  cursor: default;
}

.coin img {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  /* -webkit-backface-visibility: hidden; */
}

.side-t {
  z-index: 10;
  /* transform: rotateY(-180deg); */
}

.side-ct {
  transform: rotateY(-180deg);
}

.coin.t {
  animation: flipT 3s ease-out forwards;
}

.coin.ct {
  animation: flipCT 3s ease-out forwards;
}


@keyframes flipCT {
  from {
    -webkit-transform: rotateY(0);
    -moz-transform: rotateY(0);
    transform: rotateY(0);
  }

  to {
    -webkit-transform: rotateY(1800deg);
    -moz-transform: rotateY(1800deg);
    transform: rotateY(1800deg);
  }
}

@keyframes flipT {
  from {
    -webkit-transform: rotateY(0);
    -moz-transform: rotateY(0);
    transform: rotateY(0);
  }

  to {
    -webkit-transform: rotateY(1980deg);
    -moz-transform: rotateY(1980deg);
    transform: rotateY(1980deg)
  }
}
</style>