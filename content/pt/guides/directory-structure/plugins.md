---
title: plugins
description: O diretório `plugins` contém seus plugins Javascript que você deseja executar antes de instanciar a aplicação raiz Vue.js.
position: 11
category: directory-structure
csb_link_plugins_client: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_client?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_external: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_external?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_custom: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_custom_plugin?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_vue: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_vue?fontsize=14&hidenavigation=1&theme=dark
img: /docs/2.x/plugins.svg
imgAlt: modules-servermiddleware-plugins-in-nuxt-js
questions:
  - question: O diretório `plugins` contém seus plugins Javascript que você deseja executar
    answers:
      - antes de instanciar da aplicaçao raiz Vue.js
      - durante o instanciamento da aplicaçao raiz Vue.js
      - depois de instanciar da aplicaçao raiz Vue.js
    correctAnswer: antes de instanciar da aplicaçao raiz Vue.js
  - question: Os hooks do Vue.js, beforeCreate e created, são chamados
    answers:
      - somente do lado do cliente
      - somente do lado do servidor
      - do lado do cliente e do lado do servidor
    correctAnswer: do lado do cliente e do lado do servidor
  - question: Cada vez que você quiser usar o Vue.use(), você deve criar um arquivo em qual diretório?
    answers:
      - vue
      - plugins
      - vuePlugins
    correctAnswer: plugins
  - question: Onde você adiciona o plugin para que ele seja importado para sua aplicação principal?
    answers:
      - na sua página de layouts
      - no arquivo nuxt.config.js
      - você não precisa, ele é importado automaticamente
    correctAnswer: no arquivo nuxt.config.js
  - question: Alguns plugins podem funcionar apenas no navegador?
    answers:
      - true
      - false
    correctAnswer: true
  - question: Que extensão você pode aplicar se quiser que seu plugin seja executado apenas no servidor?
    answers:
      - .serverside.js
      - .ssr.js
      - .server.js
    correctAnswer: .server.js
  - question: Quais são os dois modos que você pode usar para seus plugins?
    answers:
      - server e client
      - ssr e client
      - server-side e client-side
    correctAnswer: server e client
  - question: O que você faz para disponibilizar funções ou valores em sua aplicação?
    answers:
      - crie um plugin
      - use o método inject
      - crie um módulo
    correctAnswer: use o método inject
  - question: Por convenção, como você deve prefixar as funções de injetadas?
    answers:
      - $
      - _
      - ':'
    correctAnswer: $
  - question: Para alterar a ordem de seus plugins, qual propriedade você usa?
    answers:
      - orderPlugins
      - extendPlugins
      - plugins
    correctAnswer: extendPlugins
---

<app-modal :src="img" :alt="imgAlt"></app-modal>

O diretório `plugins` contém seus plugins Javascript que você deseja executar antes de instanciar a aplicação raiz Vue.js. Este é o lugar para adicionar plugins Vue e injetar funções ou constantes. Toda vez que você precisar usar `Vue.use()`, você deve criar um arquivo em `plugins/` e adicionar seu caminho na propriedade `plugins` em `nuxt.config.js`.

## Pacotes Externos

Você pode querer usar pacotes/módulos externos em sua aplicação (um ótimo exemplo é o [axios](https://axios.nuxtjs.org/)) para fazer solicitações HTTP para servidor e cliente.

Primeiro, instale-o via npm ou Yarn.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxtjs/axios
```

  </code-block>
  <code-block label="npm">

```bash
npm install @nuxtjs/axios
```

  </code-block>
</code-group>

Você pode configurar, por exemplo, os interceptores do axios para reagir a possíveis erros de suas chamadas de API em todo a aplicação. Neste exemplo, redirecionamos o usuário para uma página de erro personalizada chamada desculpe quando obtivermos um erro de status 500 de nossa API.

```js{}[plugins/axios.js]
export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) {
      redirect('/desculpe')
    }
  })
}
```

Por último, mas não menos importante, adicione o módulo e o plugin recém-criado à configuração do projeto.

```js{}[nuxt.config.js]
module.exports = {
  modules: ['@nuxtjs/axios'],
  plugins: ['~/plugins/axios.js']
}
```

Então, podemos usá-lo diretamente nos componentes de página:

```js{}[pages/index.vue]
<template>
  <h1>{{ post.title }}</h1>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
      const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
      return { post }
    }
}
</script>
```

<app-modal>
  <code-sandbox :src="csb_link_plugins_external"></code-sandbox>
</app-modal>

## Plugins Vue

Se quisermos usar plugins Vue, como [v-tooltip](https://akryum.github.io/v-tooltip) para exibir dicas de ferramentas em sua aplicação, precisamos configurar o plugin antes de iniciar a aplicação.

Primeiro precisamos instalá-lo:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add v-tooltip
```

  </code-block>
  <code-block label="npm">

```bash
npm install v-tooltip
```

  </code-block>
</code-group>

Em seguida, criamos o arquivo `plugins/vue-tooltip.js`

```js{}[plugins/vue-tooltip.js]
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```

<app-modal>
  <code-sandbox  :src="csb_link_plugins_vue"></code-sandbox>
</app-modal>

## A propriedade plugins

Em seguida, adicionamos o caminho do arquivo dentro da propriedade `plugins` do nosso `nuxt.config.js`. A propriedade de plugins permite adicionar plugins vue.js facilmente a sua aplicação principal. Todos os caminhos definidos na propriedade `plugins` serão importados antes de inicializar a aplicação principal.

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/vue-tooltip.js']
}
```

### Plugins ES6

Se o plugin está localizado em `node_modules` e exporta um módulo ES6, você pode precisar adicioná-lo à opção `transpile`, do build:

```js{}[nuxt.config.js]
module.exports = {
  build: {
    transpile: ['vue-tooltip']
  }
}
```

Você pode consultar os documentos de [configuração build](/docs/2.x/configuration-glossary/configuration-build#transpile) para obter mais opções de build.

## Apenas cliente ou apenas servidor

Alguns plugins podem funcionar apenas no navegador porque não têm suporte para SSR.

### Convenção para nome de plugins

Se um plugin for executado apenas no lado do cliente ou servidor, `.client.js` ou `.server.js` pode ser aplicado como uma extensão do arquivo do plugin. O arquivo será incluído automaticamente apenas no seu respectivo lado (cliente ou servidor).

```js{}[nuxt.config.js]
export default {
  plugins: [
    '~/plugins/foo.client.js', // apenas no lado do cliente
    '~/plugins/bar.server.js', // apenas no lado do servidor
    '~/plugins/baz.js' // ambos cliente & servidor
  ]
}
```

### Sintaxe do objeto

Você também pode usar a sintaxe do objeto com a propriedade `mode`(`'client'` ou `'server'`) em `plugins`.

```js{}[nuxt.config.js]
export default {
  plugins: [
    { src: '~/plugins/both-sides.js' },
    { src: '~/plugins/client-only.js', mode: 'client' }, // apenas no lado do cliente
    { src: '~/plugins/server-only.js', mode: 'server' } // apenas no lado do servidor
  ]
}
```

<app-modal>
  <code-sandbox  :src="csb_link_plugins_client"></code-sandbox>
</app-modal>

## Injetar em `$root` e contexto

Às vezes, você deseja disponibilizar funções ou valores em sua aplicação. Você pode injetar essas variáveis ​​nas instâncias do Vue (lado do cliente), no contexto (lado do servidor) e até mesmo na store do Vuex. É uma convenção prefixar essas funções com um `$`.

O Nuxt.js fornece o método `inject(chave, valor)` para fazer isso facilmente. O inject é fornecido como o segundo parâmetro ao exportar uma função. O `$` será adicionado automaticamente à chave.

<base-alert type="info">

É importante saber que em qualquer [ciclo de vida da instância do Vue](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram), apenas os hooks `beforeCreate` e `created` são chamados em ambos os lados, do cliente e do servidor. Todos os outros hooks são chamados apenas do lado do cliente.

</base-alert>

```js{}[plugins/hello.js]
export default ({ app }, inject) => {
  // Injetar $hello(msg) no Vue, contexto e store.
  inject('hello', msg => console.log(`Hello ${msg}!`))
}
```

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/hello.js']
}
```

Agora o serviço `$hello` pode ser acessado a partir do `context` e `this` em páginas, componentes, plugins e actions da store.

```js{}[component-exemplo.vue]
export default {
  mounted() {
    this.$hello('mounted')
    // console.log 'Olá, mounted!'
  },
  asyncData({ app, $hello }) {
    $hello('asyncData')
    // Se estiver usando Nuxt <= 2.12, use 👇
    app.$hello('asyncData')
  }
}
```

```js{}[store/index.js]
export const state = () => ({
  someValue: ''
})

export const actions = {
  setSomeValueToWhatever({ commit }) {
    this.$hello('action da store')
    const newValue = 'whatever'
    commit('changeSomeValue', newValue)
  }
}
```

<base-alert>
Não use `Vue.use()`, `Vue.component()`, e globalmente, não conecte nada no Vue **dentro** desta função, dedicada à injeção no Nuxt. Isso causará vazamento de memória no lado do servidor.
</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link_plugins_custom"></code-sandbox>
</app-modal>

## A propriedade extendPlugins

Você pode estender os plugins ou alterar a ordem dos plugins criados pelo Nuxt.js. Esta função aceita um array de objetos [plugin](/docs/2.x/configuration-glossary/configuration-plugins) e deve retornar um array de objetos plugin.

Exemplo de alteração da ordem dos plugins:

```js{}[nuxt.config.js]
export default {
  extendPlugins(plugins) {
    const indexDoPlugin = plugins.findIndex(
      ({ src }) => src === '~/plugins/deveriaSerOPrimeiro.js'
    )
    const deveriaSerOPrimeiroPlugin = plugins[indexDoPlugin]

    plugins.splice(indexDoPlugin, 1)
    plugins.unshift(deveriaSerOPrimeiroPlugin)

    return plugins
  }
}
```

### Mixins globais

Mixins globais podem ser facilmente adicionados com plugins do Nuxt, mas podem causar problemas e vazamentos de memória quando não manuseados corretamente. Sempre que você adiciona um mixin global ao seu aplicativo, deve usar um sinalizador para evitar registrá-lo várias vezes:

```js{}[plugins/meu-mixin-plugin.js]
if (!Vue.__meu_mixin__) {
  Vue.__meu_mixin__ = true
  Vue.mixin({ ... }) // Então, configure seu mixin
}
```

<quiz :questions="questions"></quiz>
