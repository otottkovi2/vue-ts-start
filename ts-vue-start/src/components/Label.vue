<script setup lang="ts">
import { labelStore } from '@/assets/stores/TitleStore';
import { ref, type Ref } from 'vue'

const store = labelStore();
const flavour: Ref<string> = ref<string>(store.name)
store.$subscribe((_, state) => {
    flavour.value = state.name
})
const year: Ref<number> = ref<number>(new Date().getFullYear())
</script>

<template>
    <div class="label-container">
        <div>{{ flavour }}</div>
        <div>{{ year }}</div>
    </div>
</template>

<style scoped>
.label-container {
    text-align: center;
    font-weight: 800;
    font-size: 14pt;
    margin: 1em;
    display: flex;
    min-height: 2cm;
    min-width: 2cm;
    flex-direction: column;
    justify-content: space-around;
}
</style>