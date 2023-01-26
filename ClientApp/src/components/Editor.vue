<template>
  <p>{{ nome }}</p>
  <input type="text" v-model="inputName" />
  <button @click="changeMessage(inputName)">Mude a mensagem</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  name: String,
})

const nome = ref(props.name)

const inputName = ref()

function changeMessage(value: string): void {
  if (value != '' && value != undefined) {
    nome.value = value
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.flex-1 {
  flex: 1;
}

.counter {
  font-size: 2rem;
  align-self: center;
  margin-left: 8rem;
}
</style>
