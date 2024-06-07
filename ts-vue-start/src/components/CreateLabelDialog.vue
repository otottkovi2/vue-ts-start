<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { labelStore } from '@/assets/stores/TitleStore';
import type { _DeepPartial } from 'pinia';


const store = labelStore();
const title: Ref<string> = ref<string>("Some delicious jam")
const count: Ref<number> = ref<number>(0)

const updateLabelStore = () => {
    store.$patch({ name: title.value, count: count.value })
}
</script>

<template>
    <form>
        <label for="labelTitle">
            Title:
            <input type="text" name="labelTitle" v-model="title" @input="updateLabelStore">
        </label>
        <label for="labelCount">
            Amount:
            <input type="number" name="labelCount" v-model="count" @input="updateLabelStore">
        </label>
    </form>
</template>