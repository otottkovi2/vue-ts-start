<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
interface currency {
  code: String,
  name: String
}
const selectedCurrency = ref<currency>({code: undefined, name: ""})
const currencies = ref<currency[]>()
axios.get("https://boola-backend-a71954a87e5d.herokuapp.com/api/currency").then(r => {
  currencies.value = r.data
})
</script>

<template>
  <h1>Select a currency:</h1>
  <main>
    <select v-model="selectedCurrency">
      <option v-for="c in currencies" v-bind:value="c">{{ c.code}}</option>
    </select>
    <div>Your selected currency: {{ selectedCurrency.name }}</div>
  </main>
</template>
