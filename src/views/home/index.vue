<template>
  <div class="home">
    home
    <el-button type="primary">
      Primary
    </el-button>
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

<style lang="scss" scoped>
.home{
  color: $color;
}
</style>
