import { ref, watch } from 'vue';
import { createGlobalState, useStorage } from '@vueuse/core';
import { createClient } from '@supabase/supabase-js';
import { useSupabaseClient } from '@nuxtjs/supabase/dist/runtime/composables/useSupabaseClient';
import { useSupabaseUser } from '@nuxtjs/supabase/dist/runtime/composables/useSupabaseUser';

// const user = useSupabaseUser();
// const client = useSupabaseClient();

export const useGlobalState = createGlobalState(() => {
  const inventory = ref([]);
  const coins = ref(1000);
  const userData = ref();

  // const fetchUserData = async () => {
  //   const { data, error } = await client
  //     .from('user-data')
  //     .select()
  //     .eq('user_id', `${user.value?.id}`)
  //     .single();
  //   if (data) {
  //     userData.value = data;
  //     inventory.value = userData.value.inventory;
  //     coins.value = userData.value.coins;
  //     console.log(data);
  //   }
  //   if (error) {
  //     console.log(error);
  //   }
  // };

  return { inventory, coins, userData /*fetchUserData */ };
});
