<script setup>
const user = useSupabaseUser()
const client = useSupabaseClient()

const state = useGlobalState()

console.log(user.value?.id)

// const client = useSupabaseClient()
// const { data } = await client
//   .from('user-data')
//   .select()
//   .eq('user_id', user.value?.id)
//   .single()

const userData = ref([])

const { width, height } = useWindowSize()
const showMenu = ref(false)

watch(user, (newVal, oldVal) => {
  if (newVal?.id !== oldVal?.id) {
    if (user.value.id) {
      fetchUserData()
    }
  }
})

const createUserInDatabase = async () => {
  console.log('creating in databse');
  const { error: pushError } = await client
    .from('user-data')
    .insert({ user_id: user.value?.id, coins: 50, email: user.value?.email })
  if (pushError) {
    console.log(pushError);
  }
}

watch(user, (newVal, oldVal) => {
  console.log('user id changed');
  if (newVal?.id !== oldVal?.id) {
    if (user.value?.id) {
      createUserInDatabase()
    }
  }
})

useHead({
  title: 'CS:GO Casino'
})

</script>

<template>
  <div class="page">
    <nav>
      <div class="top">
        <div class="logo">
          <nuxt-link to="/">
            <h1><span class="styled-text">CS:GO Casino</span></h1>
          </nuxt-link>
        </div>
        <button class="hamburger" @click="showMenu = !showMenu">
          <Icon name="icon-park-outline:hamburger-button" />
        </button>
      </div>
      <div class="left" v-if="showMenu || width > 700">
        <nuxt-link to="/">
          <Icon name="material-symbols:home-rounded" />
          Home
        </nuxt-link>
        <nuxt-link to="/inventory">
          <Icon name="material-symbols:inventory-2-rounded" />Inventory
        </nuxt-link>
        <nuxt-link to="/deposit">
          <Icon name="ic:round-payment" />Deposit
        </nuxt-link>
        <nuxt-link to="/coinflip">
          <Icon name="material-symbols:flip-camera-android-rounded" />Coinflip
        </nuxt-link>
      </div>
      <div class="right" v-if="showMenu || width > 700">
        <p class="coins">
          <Icon name="mingcute:coin-2-fill" />
          <span v-if="user?.id">{{ state.coins.value }}</span>
          <span v-else>0</span>
        </p>
        <nuxt-link to="/login" v-if="!user">
          <Icon name="material-symbols:login-rounded" />
          <p>Log in</p>
        </nuxt-link>
        <button v-else @click="client.auth.signOut()">
          <Icon name="material-symbols:logout-rounded" />
          <p>Logout</p>
        </button>
      </div>
    </nav>
    <NuxtPage />

  </div>
</template>

<style>
@import url(./assets/base.css);

* {
  transition: all 100ms;
}

.page {
  place-items: center;
  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 1rem;
  width: 100vw;
  min-height: 100vh;
}

.page section {
  width: 100vw;
}

/* -------- NAVBAR ------------- */

nav {
  background: rgb(30, 30, 30);
  padding: 1rem;
  width: 100%;
  transition: all 500ms;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr min-content;
}

nav .top {
  grid-column: 1 / 3;
  display: flex;
  justify-content: space-between;
}

nav>div {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
}

nav .right,
nav .left {
  flex-direction: column;
  justify-content: flex-start;
}

.router-link-active:not(.logo a) {
  color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

nav a {
  color: rgb(161, 161, 161);
  font-size: 1.1rem;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

nav a:hover,
nav button:hover {
  background: rgb(40, 40, 40);
  color: white;
}

nav .right>* {
  font-size: 1rem;
  line-height: 1.6;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgb(35, 35, 35);
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin: 0;
  color: rgb(161, 161, 161);
}

nav .logo * {
  padding: 0;
  line-height: 1;
  font-size: 1.5rem;
}

nav .right {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

nav .nav-wrapper {
  align-items: flex-start;
  justify-content: space-between;
}

@media screen and (min-width: 700px) {
  nav {
    gap: 1rem;
    display: flex;
  }

  nav .hamburger {
    display: none;
  }

  nav .nav-wrapper,
  nav .left,
  nav .right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }

  nav .right {
    margin-left: auto;
  }
}

@media screen and (min-width: 900px) {
  nav .logo * {
    font-size: 2rem;
  }
}

/* -------- NAVBAR END ------------- */

.coins svg {
  color: #ffc75f;
}

.coins {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

button,
input,
select {
  cursor: pointer;
  background: rgb(51, 51, 51);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0.5rem;
}

input {
  background: rgb(51, 51, 51);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0.5rem;
}

button:hover {
  background: rgb(59, 59, 59);
}

h1 {
  font-size: 2rem;
  text-align: center;
}
</style>
