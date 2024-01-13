<script setup lang="ts">
import { Props, useChildComponentPresenter } from "./child-component.presenter.ts";

const props = defineProps<Props>()

const { viewModel } = useChildComponentPresenter(props)
</script>

<template>
  <h2>{{ viewModel.message }}</h2>

  <p>A simple, yet powerful integration can make Preact Signals work in a Vue app.</p>

  <p>Your text: {{ viewModel.inputFieldValue.value }}</p>

  <input placeholder="Type something" v-model="viewModel.inputFieldValue.value" />

  <h3>What is happening exactly?</h3>

  <p>
    Reactive Vue props are passed from <code>App.vue</code> to <code>HelloWorld.vue</code>.
    The props are passed through a custom hook called <code>useVueProps()</code>.
  </p>
  <p>
    The hook converts Vue reactive props into a Preact Signal.
    The converted props are used in a Preact Computed Signal to create a message.
  </p>
  <p>
    The message is passed to a custom hook called <code>usePreactViewModel()</code>.
    It takes in reactive Signals and spits out a reactive view model that Vue is able to track changes to.
  </p>
  <p>
    We now a fully working integration between a completely different reactivity
    system like Preact Signals, and Vue Composition Api.
  </p>
  <p>
    It's possible to write your state and logic in another completely different reactivity system.
    You don't have to use Vue's reactivity system all the way. Would you maybe like to use MobX for global
    state management instead of Vuex or Pinia?
  </p>
  <p>
    I love Composition API! - don't get me wrong. This is merely a demonstration that a lot is possible
    when you think a bit out of the box and put your architectural thinking to the test.
  </p>

  <div class="card">
    <p>{{ viewModel.thankYouMessage }}</p>
  </div>
</template>
