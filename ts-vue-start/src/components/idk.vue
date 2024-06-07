<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    flavour: String
})

const flavour = ref<String | undefined>(props['flavour'])
const year = ref<Number>(new Date().getFullYear())
</script>

<template>
    <div>{{ flavour }}</div>
    <div>{{ year }}</div>
</template>