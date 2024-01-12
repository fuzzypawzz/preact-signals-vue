import * as Signals from "@preact/signals";
import { usePreactViewModel } from "../hooks/use-preact-viewmodel.ts";
import { useVueProps } from "../hooks/use-vue-props.ts";

export type Props = {
    msg: string
}

export function useChildComponentPresenter(componentProps: Props) {
    const props = useVueProps(componentProps)

    const state = Signals.signal({
        prependedText: 'Props from Vue:',
        thankYouMessage: 'Thanks! 🚀 ❤️ Author: Jannik Maag (fuzzypawzz)'
    })

    const computedMessage = Signals.computed(() => {
        return `${state.value.prependedText} ${props.value.msg}`
    })

    return {
        viewModel: usePreactViewModel(() => {
            return {
                message: computedMessage.value,
                thankYouMessage: state.value.thankYouMessage
            }
        }),
    }
}