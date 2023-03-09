<script setup lang='ts'>
const user = useSupabaseUser()
const client = useSupabaseAuthClient()
const router = useRouter()

const hasAccount = ref(true)

// Login method using providers
const loginWithProvider = async (provider: 'github' | 'google' | 'gitlab' | 'bitbucket') => {
  const { error } = await client.auth.signInWithOAuth({ provider })
  if (error) {
    return alert('Something went wrong !')
  }
  router.push('/')
}
</script>


<template>
  <div class="login">
    <button @click="loginWithProvider('google')">Login with Google</button>
    <div>

      <form v-if="hasAccount">
        <input type="emial" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Login</button>
        <p>No account? <span @click="hasAccount = true">LOGIN</span></p>
      </form>
      <form v-else>
        <input type="emial" placeholder="Email">
        <input type="password" placeholder="Password">
        <button>Create Account</button>
        <p>Already a user? <span @click="hasAccount = true">LOGIN</span></p>
      </form>
    </div>

  </div>
</template>


<style>
.login * {
  font-size: 1.1rem;
  border-radius: 0.5rem;
}

.login h1 {
  font-size: 1.7rem;
}

.login form {
  display: flex;
  flex-direction: column;
}
</style>