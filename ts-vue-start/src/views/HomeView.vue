<script setup lang="ts">
import { ref, type Ref } from 'vue';
import axios from 'axios';
interface currency {
  code: String | null,
  name: String | null
}
const selectedCurrency: Ref<currency> = ref<currency>({ code: null, name: null })
const currencies: Ref<currency[]> = ref<currency[]>(new Array<currency>())
axios.get("https://boola-backend-a71954a87e5d.herokuapp.com/api/currency").then(r => {
  currencies.value = r.data
})
</script>

<template>
  <h1>Select a currency:</h1>
  <main>
    <select v-model="selectedCurrency">
      <option v-for="c in currencies" v-bind:value="c">{{ c.code }}</option>
    </select>
    <div>Your selected currency: {{ selectedCurrency.name }}</div>
  </main>
</template>
