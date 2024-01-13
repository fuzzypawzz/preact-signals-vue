import {ref, UnwrapRef} from "vue";
import {signal} from "@preact/signals";

export function useHybridRef<TValue>(value: TValue) {
    const vueRef = ref<TValue>(value)
    const preactSignal = signal<TValue>(value)

    return {
        get value() {
            vueRef.value
            return preactSignal.value
        },

        set value(value: TValue) {
            vueRef.value = value as UnwrapRef<TValue>
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
