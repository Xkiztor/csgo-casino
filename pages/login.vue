<script setup lang='ts'>
const user = useSupabaseUser()
const client = useSupabaseClient()
const authClient = useSupabaseAuthClient()

const router = useRouter()

const loginEmail = ref()
const loginPassword = ref()

if (user.value) router.push('/')

const hasAccount = ref(true)

// Login method using providers
const loginWithProvider = async (provider: 'github' | 'google' | 'gitlab' | 'bitbucket') => {
  const { error } = await authClient.auth.signInWithOAuth({ provider })
  if (error) {
    return alert('Something went wrong !')
  }
}

const createAccount = async () => {
  const { data, error } = await authClient.auth.signUp({
    // email: 'example@email.com',
    // password: 'iuhasdhiuh1'
    email: `${loginEmail.value}`,
    password: `${loginEmail.value}`
  })
  if (data) {
    console.log(data);
    loginWithEmail()
  }
  if (error) {
    console.log(error);
    return alert(error)
  }
}

const loginWithEmail = async () => {
  const { data, error } = await authClient.auth.signInWithPassword({
    email: `${loginEmail.value}`,
    password: `${loginEmail.value}`
  })
  if (data) {
    console.log(data);
    router.push('/')
  }
  if (error) {
    console.log(error);
    return alert(error)
  }
}
</script>


<template>
  <div class="login">
    <div>
      <h1 v-if="hasAccount">Login</h1>
      <h1 v-else>Create Account</h1>
      <form v-if="hasAccount" @submit.prevent="loginWithEmail()">
        <label for="">Email</label>
        <input type="email" placeholder="" v-model="loginEmail">
        <label for="">Password</label>
        <input type="password" placeholder="" v-model="loginPassword">
        <button class="create" @click.prevent="loginWithEmail()">Login</button>
        <p>No account? <span class="click-me" @click="hasAccount = false">Sign Up</span></p>
      </form>
      <form v-else @submit.prevent="createAccount()">
        <label for="">Email</label>
        <input type="email" placeholder="" v-model="loginEmail">
        <label for="">Password</label>
        <input type="password" placeholder="" v-model="loginPassword">
        <button class="create"> Create Account </button>
        <p> Already a user ? <span class="click-me" @click="hasAccount = true">Sign In</span></p>
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

.login input {
  width: 100%;
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