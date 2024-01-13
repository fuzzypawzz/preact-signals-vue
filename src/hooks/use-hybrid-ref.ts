import {ref} from "vue";
import {signal} from "@preact/signals";

export function useHybridRef() {
    const vueRef = ref('')
    const preactSignal = signal('')

    return {
        get value() {
            vueRef.value
            return preactSignal.value
        },

        set value(value: string) {
            vueRef.value = value
            preactSignal.value = value
        },

        get signal() {
            return preactSignal
        },

        get vueRef() {
            return vueRef
        }
    }
}
