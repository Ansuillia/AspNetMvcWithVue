<template>
  <h1>Olá mundo</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Teste')
})
</script>
