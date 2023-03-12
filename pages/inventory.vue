<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();

const userData = ref()
const inventory = ref([])

const fetchUserData = async () => {
  const { data, error } = await client
    .from('user-data')
    .select()
    .eq('user_id', `${user.value?.id}`)
    .single();
  if (data) {
    userData.value = data;
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
};

fetchUserData()

const updateUserData = async () => {
  console.log('chaning');
  const { data, error } = await client
    .from('user-data')
    // .update({ inventory: `${JSON.stringify(inventory.value)}` })
    .update({
      inventory: {
        name: inventory[0].name,
        count: inventory[0].count
      }
    })
    .eq('user_id', `${user.value?.id}`)
    .single();
  if (data) {
    userData.value = data;
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
};

watch(inventory, () => {
  updateUserData()
})

const testAdd = () => {
  inventory.value.push({ name: 'Gamma dopple', count: 5 })
}

const testFetch = () => {
  fetch('https://stripe-server-avlk.onrender.com/create-checkout-session', {
    // fetch('http://localhost:3000/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [{ id: 1, quantity: 1 }],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
}
</script>

<template>
  <div class="inventory">
    <!-- <h1>Inventory</h1> -->
    <h1 class="wip">Kommer snart</h1>
    <!-- <button @click="testAdd">Add</button> -->
    <button @click="testFetch()">click me</button>

    <!-- <div v-for="item in inventory">
            {{ item.name }}
            {{ item.count }}
          </div> -->
  </div>
</template>

<style>
.wip {
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 7rem;
}
</style>
