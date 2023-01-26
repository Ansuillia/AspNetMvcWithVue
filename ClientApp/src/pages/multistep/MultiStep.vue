<template>
  <h2>Componente com dados da Controller</h2>
  <p>{{ model.Message }}</p>
  <Editor :name="model.Name" />
</template>

<script setup lang="ts">
import Editor from '@/components/Editor.vue'
import { ref } from 'vue'

const props = defineProps(['model'])
const model = ref(JSON.parse(props.model))

</script>
