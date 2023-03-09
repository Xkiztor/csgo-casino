<script setup>

useHead({
  title: 'CSGO Casino'
})

</script>

<template>
  <div class="page">
    <nav>
      <div class="left">
        <div class="logo">

        </div>
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
      <div class="right">
        <p>
          <Icon name="mingcute:coin-2-fill" />50 Coins
        </p>
        <nuxt-link to="/login">
          <Icon name="material-symbols:login-rounded" />Log in
        </nuxt-link>
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

nav {
  background: rgb(30, 30, 30);
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  transition: all 500ms;
}

nav>div {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.router-link-active {
  /* border-bottom: 3px solid gray; */
  color: white;
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

nav a:hover {
  background: rgb(40, 40, 40);

  color: white;
  text-decoration: none;
}

nav .right>* {
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgb(35, 35, 35);
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

button,
input,
select {
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
