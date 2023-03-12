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
</script>

<template>
  <div class="inventory">
    <!-- <h1>Inventory</h1> -->
    <h1 class="wip">Kommer snart</h1>
    <!-- <button @click="testAdd">Add</button> -->

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
