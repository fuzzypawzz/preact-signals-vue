# Preact Signals & Vue

This app showcases a fully working integration between Preact Signals and Vue Composition Api.

It is totally possible to write your state and logic in another completely different reactivity system. 
**You don't have to** use Vue's reactivity system all the way.

I love 💚 Vue and Composition API! — don't get me wrong.
This is merely a demonstration
that a lot is possible when you think a bit out of the box and put your architectural thinking 🧠 to the test.

#### A few realistic use-cases:

1. Would you maybe like to use MobX for global state management instead of Vuex or Pinia?

2. You are in the phase of rewriting an existing solution from Vue to React, and you want to use Preact Signals?

3. You are working with a legacy Vue 2 application that uses Vuex,
but you want to switch to Preact Signals, MobX or Redux instead,
to fully separate the global state tooling from the view layer.

4. You have a library full of code that uses another reactivity system, and you need that code to work in a Vue environment, but you don't have the time to rewrite all of it.

## How to run the app

- Clone the repo
- Run `$ npm install`
- Run `$ npm run dev`

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
