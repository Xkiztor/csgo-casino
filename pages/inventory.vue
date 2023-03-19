<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();

const userData = ref()
const inventory = ref([])

const globalState = useGlobalState()

globalState.fetchUserData()




// watch(inventory, () => {
//   updateUserData()
// })

const testAdd = () => {
  inventory.value.push({ name: 'Gamma dopple', count: 5 })
}

// const test = async () => {
//   const { data: response } = await useFetch('/api/test', {
//     method: 'post',
//     body: { text: 'test' }
//   })
//   console.log(response);
// }

const test = async () => {
  const { data } = await useFetch(() => '/api/hello')
  console.log(data.value);
}



const showClass = ref(false)

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
    <!-- <button @click="test()">Test</button> -->
    <!-- <div @click="showClass = !showClass" :class="{ 'test-class': showClass === true }">
                            Test
                          </div> -->
    <button @click="globalState.updateUserCoins(1900)">Click me</button>
  </div>
</template>

<style>
.wip {
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 7rem;
}

.test-class {
  background: red;
  height: 5rem;
}
</style>
