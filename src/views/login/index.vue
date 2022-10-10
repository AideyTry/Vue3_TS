<template>
  <div>
    login
    <h1>{{ a }}</h1>
    <h2>{{ $store.state.count }}</h2>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from '../../store'
import { getLoginInfo } from '@/api/common'

const store = useStore()

console.log('store.state=', store.state.count)
const a = ref(0)

onMounted(() => {
  getLoginInfo().then(res => {
    console.log('res==', res)
  })
})
</script>
<script lang="ts">
export default {
  name: 'LoginIndex'
}
</script>

<style></style>
