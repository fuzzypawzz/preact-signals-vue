import * as Signals from "@preact/signals";
import * as Vue from "vue";

export function useVueProps<TProps extends object>(propsProxy: TProps) {
    const props = Signals.signal<TProps>({} as TProps)

    function copyProps(newValue: TProps) {
        props.value = {
            ...props.value,
            ...Vue.toRaw(newValue)
        }
    }

    const options = {
        immediate: true,
        deep: true
    }

    // Vue watchers are automatically cleaned up when the scope is disposed
    Vue.watch(propsProxy, copyProps, options)

    return props
}