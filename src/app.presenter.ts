import * as Vue from "vue";
import { createArrayTransitionGenerator } from "./helpers/array-transition-generator.ts";

export function useAppPresenter() {
    const message = Vue.ref('Greetings!')

    const generator = createArrayTransitionGenerator([
        'It is day ☀️',
        'It is night 🌙',
        'Day again, but cloudy 🌤️',
        'I can go on like this',
        'Forever...',
        'But i wont',
        'Or will i?',
        '😴😴😴'
    ])

    setInterval(() => {
        message.value = generator.next().value
    }, 1300)

    return {
        viewModel: Vue.computed(() => ({
            message: message.value
        }))
    }
}