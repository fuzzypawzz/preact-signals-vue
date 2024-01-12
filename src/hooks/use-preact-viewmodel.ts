import * as Vue from "vue";
import * as Signals from "@preact/signals";

type ViewModelGetter = () => object
type ViewModelValue<T extends ViewModelGetter> = ReturnType<T>

export function usePreactViewModel<T extends ViewModelGetter>(getViewModel: T) {
    const viewModel = Vue.ref<ViewModelValue<T>>({} as ViewModelValue<T>)

    const dispose = Signals.effect(() => {
        viewModel.value = getViewModel() as Vue.UnwrapRef<ReturnType<T>>
    })

    // Clean up when the scope is disposed (when the component unmounts)
    Vue.onScopeDispose(dispose)

    return viewModel
}