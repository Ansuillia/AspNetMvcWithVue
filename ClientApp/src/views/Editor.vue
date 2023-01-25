<template>
  <div class="flex flex-row">
    <h1>{{ msg }}</h1>
  </div>
  <input type="text" v-model="inputValue" />
  <button @click="changeMessage(inputValue)">Change Message</button>
  <h1>{{ message }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Olá mundo')
const inputValue = ref()

defineProps({
  message: String,
})

function changeMessage(message: string): void {
  console.log(message)
  if (message != '' && message != undefined) {
    msg.value = message
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
