<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/">
      <template
        #title
      >
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="/">
      <template #title>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        商品列表
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        商品规格
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        商品分类
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        回复
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <template #title>
        媒体
      </template>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/role">
        role
      </el-menu-item>
      <el-menu-item index="/permission/admin">
        admin
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        rule
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isCollapse = ref(false)
</script>
<script lang="ts">
export default {
  name: 'MenuIndex'
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  background-color: #304156;
}
</style>
