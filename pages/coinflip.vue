<script setup lang='ts'>
import { createClient } from '@supabase/supabase-js'
import { stat } from 'fs';

const user = useSupabaseUser()
const client = useSupabaseClient()
const authClient = useSupabaseAuthClient()

const globalState = useGlobalState()

const chosenSide = ref('')
const winnerSide = ref('')
const youWon = ref(false)
const coinsChange = ref(0)

const bet = ref(0)
const hasChosenBet = ref(false)


const { ready, start, stop } = useTimeout(3000, { controls: true })

const flip = async () => {
  if (!winnerSide.value) {
    start()
    let number = Math.random()
    console.log(number);
    if (number > 0.5) {
      winnerSide.value = 'ct'
      if (winnerSide.value === chosenSide.value) {
        console.log('you won');
        youWon.value = true
        coinsChange.value = bet.value
      } else {
        console.log('you lost');
        youWon.value = false
        coinsChange.value = bet.value
      }
    } else {
      winnerSide.value = 't'
      if (winnerSide.value === chosenSide.value) {
        console.log('you won');
        youWon.value = true
        coinsChange.value = bet.value
      } else {
        console.log('you lost');
        youWon.value = false
        coinsChange.value = bet.value
      }
    }
  }
}


watch(ready, () => {
  console.log(ready.value);
  if (ready.value && winnerSide.value) {
    if (winnerSide.value === chosenSide.value) {
      globalState.updateUserCoins(globalState.userData.value.coins + coinsChange.value)
    } else {
      globalState.updateUserCoins(globalState.userData.value.coins - coinsChange.value)
    }
  }
})

// const newCoinAmount = computed(() => {
//   console.log(globalState.userData.value?.coins);
//   if (winnerSide.value === chosenSide.value) {
//     return globalState.userData.value?.coins + bet.value
//   } else if (winnerSide.value !== chosenSide.value) {
//     return globalState.userData.value?.coins - bet.value
//   } else {
//     return globalState.userData.value?.coins
//   }
// })

// watch(newCoinAmount, () => {
//   if (winnerSide.value) {
//     console.log(winnerSide.value);
//     console.log(newCoinAmount.value);
//     globalState.updateUserCoins(newCoinAmount.value)
//   }
// })




</script>


<template>
  <div class="coinflip">
    <!-- <h1>Coinflip</h1> -->
    <div v-if="!hasChosenBet" class="bet">
      <h1>Chose bet</h1>
      <div class="bet-wrapper">
        <div class="bet-input">
          <Icon name="mingcute:coin-2-fill" />
          <input type="number" v-model="bet">
        </div>
        <button @click="hasChosenBet = true">Next</button>
      </div>
    </div>
    <div v-if="!chosenSide && hasChosenBet">
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
    <div v-else-if="hasChosenBet" class="">
      <!-- <h1>You chose: {{ chosenSide === 'ct' ? 'Counter Terrorrist' : 'Terrorrist' }}</h1> -->
      <!-- <button" v-if="!winnerSide" class="flip">Flip</button> -->
      <div class="coin" @click="flip()"
        :class="{ 't': winnerSide === 'ct', 'ct': winnerSide === 't', 'no-click': winnerSide }">
        <img src="../assets/ct.png" class="side-ct" alt="">
        <img src="../assets/t.png" class="side-t" alt="">
      </div>
      <div class="results" :class="{ 'show-results': ready && winnerSide }">
        <p v-if="ready">{{ winnerSide === chosenSide ? 'You Won!' : 'You lost' }} <span>
            <Icon name="mingcute:coin-2-fill" />{{ winnerSide === chosenSide ? '+' : '-' }}{{ bet }}
          </span></p>
        <p v-else>...</p>
        <button @click="chosenSide = '', winnerSide = '', youWon = false, bet = 0, hasChosenBet = false">
          <Icon name="material-symbols:replay-rounded" />Play agian
        </button>
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

.bet-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.bet-wrapper button {
  margin: 0;
  /* background: var(--element-gradient); */
}

.bet-input {
  background: var(--element-gradient);
  padding: 0.1rem 0.5rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
}

.bet-input input {
  background: none;
  font-size: 1.1rem;
  width: 5rem;
}

.bet-input svg {
  color: var(--coin-color);
}


.side-choser button {
  border-radius: 1000rem;
  padding: 0;
}

.side-choser button,
.side-choser img {
  width: 40vw;
  height: 40vw;
}

@media screen and (min-width: 500px) {

  .side-choser button,
  .side-choser img {
    width: 13rem;
    height: 13rem;
  }

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

.results {
  display: grid;
  place-items: center;
}

.results button,
.bet button {
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
}

.results p {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.results span {
  background: var(--element-background);
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: row;
}

.results span svg {
  color: var(--coin-color);
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