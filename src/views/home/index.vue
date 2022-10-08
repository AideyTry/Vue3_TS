<template>
  <div>
    home
  </div>
</template>
<script setup lang="ts">
import { user } from '@/api/user'
console.log('user====', user())
</script>
<script lang="ts">
export default {
  name: 'HomeIndex'
}
</script>

<style></style>
