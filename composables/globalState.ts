import { ref, watch } from 'vue';
import { createGlobalState, useStorage } from '@vueuse/core';
import { createClient } from '@supabase/supabase-js';
import { useSupabaseClient } from '~/node_modules/@nuxtjs/supabase/dist/runtime/composables/useSupabaseClient';
// import { useSupabaseUser } from '@nuxtjs/supabase/dist/runtime/composables/useSupabaseUser';
import { useSupabaseUser } from '~/node_modules/@nuxtjs/supabase/dist/runtime/composables/useSupabaseUser';

// const user = useSupabaseUser();
// const client = useSupabaseClient();

export const useGlobalState = createGlobalState(() => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();

  const userData = ref();

  console.log(user.value);

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

  fetchUserData();

  const updateUserCoins = async (newCoinAmount: number) => {
    console.log('changing');
    const { data, error } = await client
      .from('user-data')
      .update({ coins: newCoinAmount })
      .eq('user_id', `${user.value?.id}`)
      .select();
    if (data) {
      userData.value = data;
      fetchUserData();
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return { userData, fetchUserData, updateUserCoins };
});
