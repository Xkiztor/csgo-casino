<script setup lang='ts'>
const user = useSupabaseUser()


const client = useSupabaseClient()

const authClient = useSupabaseAuthClient()
const router = useRouter()

if (user.value) router.push('/')

const hasAccount = ref(true)

// Login method using providers
const loginWithProvider = async (provider: 'github' | 'google' | 'gitlab' | 'bitbucket') => {
  const { error } = await authClient.auth.signInWithOAuth({ provider })
  if (error) {
    return alert('Something went wrong !')
  }
}
</script>


<template>
  <div class="login">
    <div>
      <h1 v-if="hasAccount">Login</h1>
      <h1 v-else>Create Account</h1>
      <form v-if="hasAccount">
        <label for="">Email</label>
        <input type="emial" placeholder="">
        <label for="">Password</label>
        <input type="password" placeholder="">
        <button class="create">Login</button>
        <p>No account? <span class="click-me" @click="hasAccount = false">Sign Up</span></p>
      </form>
      <form v-else>
        <label for="">Email</label>
        <input type="emial" placeholder="">
        <label for="">Password</label>
        <input type="password" placeholder="">
        <button class="create">Create Account</button>
        <p>Already a user? <span class="click-me" @click="hasAccount = true">Sign In</span></p>
      </form>
      <button class="provider-login" @click="loginWithProvider('google')">
        <Icon name="logos:google-icon" />Login with Google
      </button>
    </div>

  </div>
</template>


<style>
.login * {
  font-size: 1.1rem;
  border-radius: 0.5rem;
}

.login h1 {
  font-size: 3rem;
}

.login form {
  display: flex;
  flex-direction: column;
}

.login input,
.login button {
  margin: 0 0 1rem;
  padding: 0.7rem;
}

.login label {
  margin: 0.2rem 0;
}

.login p {
  text-align: center;
}

.login .create {
  margin-top: 0.5rem;
}

@media screen and (min-width: 700px) {
  .login {
    width: 50vw;
    max-width: 30rem;
  }
}

.click-me {
  color: #0645AD;
  cursor: pointer;
  text-decoration: underline;
}

.login .provider-login {
  padding: 1rem;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
}
</style>