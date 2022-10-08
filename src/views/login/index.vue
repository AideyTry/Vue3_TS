<template>
  <div>
    login
    <h1>{{ a }}</h1>
    <h2>{{ $store.state.count }}</h2>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '../../store'

const store = useStore()

console.log('store.state=', store.state.count)
const a = ref(0)
</script>
<script lang="ts">
export default {
  name: 'LoginIndex'
}
</script>

<style></style>
