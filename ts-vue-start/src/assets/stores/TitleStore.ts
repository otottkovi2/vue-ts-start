import { defineStore } from "pinia";

export const labelStore = defineStore('labelStore', {
    state: () => ({ name: "", count: 0 })
})