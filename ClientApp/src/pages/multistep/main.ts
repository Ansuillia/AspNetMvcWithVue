import { createApp, reactive } from 'vue'
import MultiStep from './MultiStep.vue'

const elementById = document.getElementById('multiStep')
const props = reactive({ ...elementById?.dataset })

const app = createApp(MultiStep, props)
app.mount('#multiStep')
