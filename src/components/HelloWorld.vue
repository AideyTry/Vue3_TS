<script setup lang="tsx">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const abc: any = <h2>3243234234</h2>

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <abc />

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
