<!-- <script>
// import { loadStripe } from '@stripe/stripe-js'
// import { defineComponent, ref, onBeforeMount } from 'vue'
// import StripeCard from '../components/StripeCard.vue'

// export default defineComponent({
//   // ...
//   components: {
//     StripeCard,
//   },

//   setup() {
//     onBeforeMount(() => {
//       const stripeLoaded = ref(false)
//       const stripePromise = loadStripe('your_key')
//       stripePromise.then(() => {
//         stripeLoaded.value = true
//       })
//     })
//   },
// })

// import { useVueStripe } from '@vue-stripe/vue-stripe'
// export default {
//   setup() {
//     const { redirectToCheckout } = useVueStripe('pk_test_51LajZRACGdXEYjhpD83fSWVS0yQx9R7EPiW0hnKrWmgRqvfIkyzu4asgbvxaLTav2UKQUVspzXSlaE0H0XjrQIT8004c2J9iCe');

//     async function onCheckout() {
//       await redirectToCheckout({
//         successUrl: window.location.origin,
//         cancelUrl: window.location.origin,
//         mode: 'subscription',
//         lineItems: [
//           {
//             price: 'price_1Mj1KwACGdXEYjhpjJtE37Zt',
//             quantity: 1
//           }
//         ]
//       });
//     }

//     return {
//       onCheckout,
//     }
//   },
// }



// import { useCheckout } from '@vue-stripe/vue-stripe';
// export default {
//   setup() {
//     const PUBLISHABLE_KEY = pk_test_51LajZRACGdXEYjhpD83fSWVS0yQx9R7EPiW0hnKrWmgRqvfIkyzu4asgbvxaLTav2UKQUVspzXSlaE0H0XjrQIT8004c2J9iCe;
//     const { redirectToCheckout } = useCheckout(PUBLISHABLE_KEY);

//     async function onCheckout() {
//       const payload = {
//         // See https://stripe.com/docs/js/deprecated/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options
//       };
//       await redirectToCheckout(payload);
//     }
//   }
// };





/* ------------------------------------- Real deal ------------------------------------------- */

// import { StripeElements, StripeElement } from 'vue-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// import { defineComponent, ref, onBeforeMount } from 'vue'

// export default defineComponent({
//   name: 'CardOnly',

//   components: {
//     StripeElements,
//     StripeElement,
//   },

//   setup() {
//     const selectedDeposit = ref()
//     const stripeKey = ref('pk_test_51LajZRACGdXEYjhpD83fSWVS0yQx9R7EPiW0hnKrWmgRqvfIkyzu4asgbvxaLTav2UKQUVspzXSlaE0H0XjrQIT8004c2J9iCe') // test key
//     const instanceOptions = ref({
//       // https://stripe.com/docs/js/initializing#init_stripe_js-options
//     })
//     const elementsOptions = ref({
//       // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
//     })
//     const cardOptions = ref({
//       // https://stripe.com/docs/stripe.js#element-options
//       value: {
//         postalCode: '12345',
//       },
//       style: {
//         base: {
//           iconColor: '#c4f0ff',
//           color: '#FFF',
//           fontWeight: '400',
//           fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
//           fontSize: '16px',
//           fontSmoothing: 'antialiased',
//           ':-webkit-autofill': {
//             color: '#fce883',
//           },
//           '::placeholder': {
//             color: '#9c9c9c',
//           },
//         },
//         invalid: {
//           iconColor: '#FFC7EE',
//           color: '#FFC7EE',
//         },
//       },
//     })
//     const stripeLoaded = ref(false)
//     const card = ref()
//     const elms = ref()

//     onBeforeMount(() => {
//       const stripePromise = loadStripe(stripeKey.value)
//       stripePromise.then(() => {
//         stripeLoaded.value = true
//       })
//     })

//     const pay = () => {
//       // Get stripe element
//       const cardElement = card.value.stripeElement

//       // Access instance methods, e.g. createToken()
//       elms.value.instance.createToken(cardElement).then((result) => {
//         // Handle result.error or result.token
//         console.log(result)
//       })
//     }

//     return {
//       selectedDeposit,
//       stripeKey,
//       stripeLoaded,
//       instanceOptions,
//       elementsOptions,
//       cardOptions,
//       card,
//       elms,
//       pay
//     }
//   },
// })

</script> -->

<script setup>

const selectedDeposit = ref()

</script>

<template>
  <div class="deposit">
    <!-- <h1 class="wip">Kommer snart</h1> -->
    <h1>Deposit</h1>
    <!-- <button @click="onCheckout">Checkout</button> -->
    <!-- <StripeCard /> -->
    <div class="pay">
      <div class="deposit-amounts">
        <div @click="selectedDeposit = 5" :class="{ 'selected': selectedDeposit === 5 }">
          <div>
            <h1>5 €</h1>
            <p>50 coins</p>
          </div>
        </div>
        <div @click="selectedDeposit = 10" :class="{ 'selected': selectedDeposit === 10 }">
          <div>
            <h1>10 €</h1>
            <p>100 coins</p>
          </div>
        </div>
        <div @click="selectedDeposit = 25" :class="{ 'selected': selectedDeposit === 25 }">
          <div>
            <h1>25 €</h1>
            <p>250 coins</p>
          </div>
        </div>
        <div @click="selectedDeposit = 100" :class="{ 'selected': selectedDeposit === 100 }">
          <div>
            <h1>100 €</h1>
            <p>1000 coins</p>
          </div>
        </div>
      </div>
      <!-- <StripeElements v-if="stripeLoaded" v-slot="{ elements, instance }" ref="elms" :stripe-key="stripeKey"
                    :instance-options="instanceOptions" :elements-options="elementsOptions">
                    <StripeElement ref="card" :elements="elements" :options="cardOptions" />
                  </StripeElements> -->
      <button type="button" @click="pay">
        <h1 v-if="selectedDeposit">Pay {{ selectedDeposit }} €</h1>
        <h1 v-else class="disabled">Select amount</h1>
      </button>
      <div class="trust">
        <div class="stripe">
          <img src="../assets/Stripe.svg" alt="Stripe">
        </div>
        <div class="cards">
          <img src="../assets/Visa.svg" alt="Visa">
          <img src="../assets/Mastercard.svg" alt="Mastercard">
          <img src="../assets/American-express.svg" alt="American Express">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.deposit {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.deposit-amounts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.deposit-amounts>div>div {
  text-align: center;
  background-color: rgb(35, 35, 35);
  border-radius: calc(0.5rem - 2px);
  padding: 1rem;
  /* transition: border 300ms; */
  cursor: pointer;
}

.deposit-amounts>div {
  text-align: center;
  /* background-color: rgb(35, 35, 35); */

  border-radius: 0.5rem;
  padding: 2px;
  /* transition: border 300ms; */
}

.deposit-amounts>div.selected:nth-child(1) {
  background: linear-gradient(45deg, #d65db1, #ff6f91);
}

.deposit-amounts>div.selected:nth-child(2) {
  background: linear-gradient(45deg, #ff9671, #ffc75f);
}

.deposit-amounts>div.selected:nth-child(3) {
  background: linear-gradient(45deg, #a7ed71, #51d881);
}

.deposit-amounts>div.selected:nth-child(4) {
  background: linear-gradient(45deg, #2172b3, #17afbd);
}

.deposit-amounts>div:hover {
  border-color: #363636;
  background: #363636;
  /* color: #ea7154; */
}

.deposit button {
  margin: 1rem 0;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background: rgb(35, 35, 35);
  padding: 1rem;
  transition: all 300ms;
}

.deposit button:hover {
  background: rgb(40, 40, 40);
}

.deposit button h1 {
  font-size: 1.5rem;
  width: fit-content;
  margin: 0 auto;
  transition: all 300ms;
}

.deposit button h1.disabled {
  color: #9c9c9c;
}

.pay {
  width: 100%;
  max-width: 40rem;
  min-width: 10rem;
  padding: 1rem;
  display: grid;

}

.trust {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.trust .cards {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2rem;
}

.trust img {
  max-height: 2rem;
  filter: grayscale(0.3);
  transition: filter 300ms;
}

.trust img:hover {
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
  filter: grayscale(0);
}

.stripe img:hover {
  box-shadow: none;
}


iframe {
  /* height: 10rem !important; */
  width: 20rem !important;
}

iframe * {
  color: #9c9c9c !important;
}

.StripeElement {
  padding: 1rem;
  background: rgb(35, 35, 35);
  border-radius: 0.5rem;
}

@media screen and (min-width: 500px) {
  .pay {}
}
</style>
