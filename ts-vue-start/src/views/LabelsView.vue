<script setup lang="ts">
import { labelStore } from '@/assets/stores/TitleStore';
import CreateLabelDialog from '@/components/CreateLabelDialog.vue';
import Label from '@/components/Label.vue';
import { ref, type Ref } from 'vue'

let title: string = 'Some delicious jam!'
let count: number = 0
const store = labelStore();
const labels: Ref<string[]> = ref(new Array<string>())
store.$subscribe((_, state) => {
  title = state.name
  count = state.count
  labels.value = new Array<string>()
  for (let i = 0; i < count; i++) {
    labels.value.push(title)
  }
})


</script>

<template>
  <div class="dialog-container">
    <CreateLabelDialog />
  </div>
  <div class="label-container">
    <Label :flavour="title" v-for="_ in labels" />
  </div>
</template>

<style>
@media print {
  .dialog-container {
    display: none;
  }
}

.label-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
