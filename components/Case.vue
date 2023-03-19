<script setup>
import { ref } from 'vue';
import { promiseTimeout, useTimeout } from '@vueuse/core'

const props = defineProps(['price', 'img'])

const imageUrls = [
  'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU2nfGaJG0btN2wwYHfxa-hY-uFxj4Dv50nj7uXpI7w3AewrhBpMWH6d9CLMlhpEbAe-Zk/360fx360f',
  'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQynaHMJT9B74-ywtjYxfOmMe_Vx28AucQj3brAoYrz3Fay_kY4MG_wdYeLMlhpLMaM-1U/360fx360f',
  'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQwnfCcJmxDv9rhwIHZwqP3a-uGwz9Xv8F0j-qQrI3xiVLkrxVuZW-mJoWLMlhpWhFkc9M/360fx360f',
  'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQxnaecIT8Wv9rilYTYkfTyNuiFwmhUvpZz3-2Z9oqg0Vew80NvZzuiJdeLMlhpwFO-XdA/360fx360f',
  'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU1nfbOIj8W7oWzkYLdlPOsMOmIk2kGscAj2erE99Sn2AGw_0M4NW2hIYOLMlhpcmY0CRM/360fx360f',
  'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naLOJzgUuYqyzIaIxa6jMOLXxGkHvcMjibmU99Sg3Qaw-hA_ZWrzLISLMlhpgJJUhGE/360fx360f',
  'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY5naqQIz4R7Yjix9bZkvKiZrmAzzlTu5AoibiT8d_x21Wy8hY_MWz1doSLMlhpM3FKbNs/360fx360f',
  'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/360fx360f',
  'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsXE1xNwVDv7WrFA5pnabNJGwSuN3gxtnawKOlMO6HzzhQucAm0uvFo4n2iw3h_UM-ZmilJNeLMlhpjfjxEoE/360fx360f',
]

const randomNum = Math.floor(Math.random() * (imageUrls.length - 1 + 1))

const number = ref(1)
const showWarning = ref(false)

const plus = () => {
  number.value += 1
  // if (number.value < 10) {
  //   number.value += 1
  // } else {
  //   showWarning.value = true
  //   start()
  // }
}

const subtract = () => {
  showWarning.value = false
  if (number.value > 1) {
    number.value -= 1
  }
}

const { ready, start, stop } = useTimeout(1200, { controls: true })
</script>


<template>
  <div class="incrementer">
    <img :src="imageUrls[randomNum]">
    <h1 class="count-error" v-if="!ready && showWarning">TOO MANY</h1>
    <div class="increment">
      <button @click="subtract()">-</button>
      <input type="number" min="1" v-model="number">
      <!-- <h1>{{ number }}</h1> -->
      <button @click="plus()">+</button>
    </div>
    <nuxt-link to="/case-open">
      <button class="buy coins">Buy
        <Icon name="mingcute:coin-2-fill" />{{ Math.round(number * price * 100) / 100 }}
      </button>
    </nuxt-link>
  </div>
</template>


<style>
.buy {
  font-size: 1.2rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}

.buy svg {
  margin-left: 0.5rem;
}

.incrementer {
  height: fit-content;
  width: fit-content;
  padding: 1rem;
  /* border: 1px solid gray; */
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  /* background: rgb(35, 35, 35); */
  /* background: rgb(40, 40, 40); */
}

.incrementer img {
  /* height: 5rem; */
  width: 10rem;
  height: 10rem;
}

.incrementer a {
  text-decoration: none;
}

.incrementer::before {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  background: linear-gradient(160deg, rgb(35, 35, 35), rgba(28, 27, 25, 1));
  /* background: rgb(35, 35, 35) ; */
  border-radius: 0.5rem;
  /* background: linear-gradient(100deg, #34a853, #a7ed71); */
  /* filter: blur(1px); */
  opacity: 0.7;
}

.increment {
  display: flex;
  justify-content: center;
  flex-direction: row;
  background: var(--interactive-color);
  /* background: rgb(51, 51, 51); */
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 0;
}

.incrementer button,
.incrementer input {
  opacity: 0.9;
}

.increment button {
  border-radius: 0.5rem;
  line-height: 0.5;
  margin: 0;
  padding: 0 0.5rem;
}

.increment input {
  width: 2rem;
  padding: 0.5rem 0.1rem;
  text-align: center;
  margin: 0;
}

.increment input::-webkit-outer-spin-button,
.increment input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.increment input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.increment * {
  font-size: 1.2rem;
}

.count-error {
  font-size: 1rem;
}
</style>