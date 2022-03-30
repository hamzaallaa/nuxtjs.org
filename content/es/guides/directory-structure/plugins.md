---
title: plugins
description: El directorio de `plugins` contiene todos los plugins de Javascript que necesites ejecutar antes de comenzar tu aplicación de Vue.js.
position: 11
category: directory-structure
csb_link_plugins_client: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_client?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_external: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_external?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_custom: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_custom_plugin?fontsize=14&hidenavigation=1&theme=dark
csb_link_plugins_vue: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_vue?fontsize=14&hidenavigation=1&theme=dark
img: /docs/2.x/plugins.svg
imgAlt: modules-servermiddleware-plugins-in-nuxt-js
questions:
  - question: El directorio de `plugins` contiene los plugins de Javascript que quieras ejecutar
    answers:
      - Antes de inicializar la aplicación raíz de vue.js
      - Mientras inicializas la aplicación raíz de vue.js
      - Luego de inicializar la aplicación raíz de vue.js
    correctAnswer: Antes de inicializar la aplicación raíz de vue.js
  - question: Los métodos beforeCreate y created se ejecutan
    answers:
      - Sólo desde el lado del cliente
      - Sólo desde el lado del servidor
      - Desde el lado del servidor y el cliente
    correctAnswer: Desde el lado del servidor y el cliente
  - question: ¿Cada vez que quieras usar Vue.use(), debes crear un archivo en qué directorio?
    answers:
      - vue
      - plugins
      - vuePlugins
    correctAnswer: plugins
  - question: ¿Dónde se añaden los plugins para que sean importados a la aplicación principal?
    answers:
      - En la página de layouts
      - En el archivo nuxt.config.js
      - No tienes que hacerlo, se importa automáticamente.
    correctAnswer: En el archivo nuxt.config.js
  - question: ¿Algunos plugins funcionan solo en los navegadores?
    answers:
      - cierto
      - falso
    correctAnswer: cierto
  - question: ¿Cuál extensión puedes aplicar si quieres que tu plugin se ejecute sólo del lado del servidor?
    answers:
      - .serverside.js
      - .ssr.js
      - .server.js
    correctAnswer: .server.js
  - question: ¿Cuáles son los dos modos que puedes usar para los plugins?
    answers:
      - server y cliente
      - ssr y cliente
      - lado del servidor y lado del cliente
    correctAnswer: server y cliente
  - question: ¿Qué hay que hacer para poder usar funciones o variables globalmente en tu app?
    answers:
      - Crear un plugin
      - Usar el método de `inject`
      - Crear un módulo
    correctAnswer: Usar el método de `inject`
  - question: ¿Que prefijo debes ponerle a las funciones de inyección?
    answers:
      - $
      - _
      - ':'
    correctAnswer: $
  - question: ¿Qué propiedad puedes usar para cambiar el orden de tus plugins?
    answers:
      - orderPlugins
      - extendPlugins
      - plugins
    correctAnswer: extendPlugins
---

<app-modal :src="img" :alt="imgAlt"></app-modal>

El directorio de `plugins` contiene todos los plugins de Javascript que necesites ejecutar antes de comenzar tu aplicación de Vue.js. En este directorio puedes añadir plugins para insertar funciones o constantes. Cada vez que usas `Vue.use()` debes crear un archivo dentro de `plugins/` y añadir la ruta del archivo a `plugins` en el `nuxt.config.js`.

## Paquetes Externos

Tal vez necesites usar un paquete externo (`packages/modules`) dentro de tu aplicación (un buen ejemplo seria [axios](https://axios.nuxtjs.org/)) para hacer solicitudes HTTP para el servidor y el cliente.

Primero, instálalo via npm o Yarn.

<code-group>
  <code-block label="Yarn" active>

````bash
yarn add @nuxtjs/axios
**```**

  </code-block>
  <code-block label="npm">

```bash
npm install @nuxtjs/axios
````

  </code-block>
</code-group>

Puedes configurar por ejemplo, los interceptores de axios para reaccionar a errores que vengan de la llamada del API en la aplicación. En este ejemplo estamor redirigiendo al usuario a una página de error customizada, llamada `sorry` cuando obtenemos un error de estado 500 del API.

```js{}[plugins/axios.js]
export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
```

Finalmente, añadimos el módulo y el nuevo plugin que creamos, a la configuración de la aplicación.

```js{}[nuxt.config.js]
module.exports = {
  modules: ['@nuxtjs/axios'],
  plugins: ['~/plugins/axios.js']
}
```

Luego podemos usarlo directamente en los componentes de página:

```js{}[pages/index.vue]
<template>
  <h1>{{ post.title }}</h1>
</template>

<script>
export default {
 async asyncData ({ $axios, params }) {
     const  post  = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
     return { post }
   }
}
</script>
```

Otra manera de usar `axios` sin el modulo es importando `axios` directamente en la etiqueta `<script>`.

```js{}[pages/index.vue]
<script>
import axios from 'axios'

export default {
	async asyncData ({ params }) {
	  const { data: post }  = await axios.get(`https://api.nuxtjs.dev/posts/${params.id}`)
	  return { post }
	}
}
</script>
```

<base-alert type="info">

Si obtienes un error de _Cannot use import statement outside a module_, usted debe agregar tu paquete en la opcion `build` > `transpile` en `nuxt.config.js` para que el loader de webpack haga tu plugin disponible.

</base-alert>

```js{}[nuxt.config.js]
build: {
  // You can extend webpack config here
  transpile: ['npm-package-name'],
},
```

<app-modal>
  <code-sandbox :src="csb_link_plugins_external"></code-sandbox>
</app-modal>

## Plugins de Vue

Si quieremos usar plugins de Vue como [v-tooltip](https://akryum.github.io/v-tooltip), para mostrar tooltips en tu aplicación, tenemos que configurarlo antes de lanzar el app.

Primero tenemos que instalarlo.

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

Luego creamos el archivo `plugins/vue-tooltip.js`

```js{}[plugins/vue-tooltip.js]
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
```

<app-modal>
  <code-sandbox  :src="csb_link_plugins_vue"></code-sandbox>
</app-modal>

## La Propiedad de plugins

Luego añadimos la ruta del archivo dentro de la propiedad de `plugins` de nuestro `nuxt.config.js`. Esta propiedad te permite añadir fácilmente plugins de vue.js dentro de tu aplicación. Todas las rutas definidas en la propiedad de `plugins` van a ser importadas antes de inicializar la aplicación principal.

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/vue-tooltip.js']
}
```

### Plugins de ES6

Si el plugin está localizado dentro de los exports de `node_modules` tendrás que añadirlo en la opción de `transpile`:

```js{}[nuxt.config.js]
module.exports = {
  build: {
    transpile: ['vue-tooltip']
  }
}
```

Puedes referirte a los documentos de [configuration build](/docs/2.x/configuration-glossary/configuration-build#transpile) para más opciones.

## Lado del cliente o server

Algunos plugins pueden funcionar sólo en el navegador porque no tienen soporte para SSR (Server side rendering).

### Nombre de plugin convencional

Si se puede asumir que el plugin solo debe correr en el lado del cliente o del servidor, puedes aplicar  `.client.js`  or `.server.js` como extensión del archivo del plugin. El archivo será incluido automáticamente al lado respectivo.

```js{}[nuxt.config.js]
export default {
  plugins: [
    '~/plugins/foo.client.js', // Sólo del lado del cliente
    '~/plugins/bar.server.js', // Sólo del lado del servidor
    '~/plugins/baz.js' // Ambos lados, cliente & servidor
  ]
}
```

### Sintáxis del objeto

También puedes usar el sintáxis de objeto con la propiedad de `mode` (`'client'` ó `'server'`) dentro de `plugins`.

```js{}[nuxt.config.js]
export default {
  plugins: [
    { src: '~/plugins/both-sides.js' },
    { src: '~/plugins/client-only.js', mode: 'client' }, // Sólo del lado del cliente
    { src: '~/plugins/server-only.js', mode: 'server' } // Sólo del lado del servidor
  ]
}
```

<app-modal>
  <code-sandbox  :src="csb_link_plugins_client"></code-sandbox>
</app-modal>

## Añadiendo dentro de `$root` & context

Aveces necesitas hacer funciones o variables disponibles en todo el app. Puedes insertar estas variables dentro de las instancias de Vue (lado del cliente), context (lado del servidor) y también en el Vuex store. Asegúrate de ponerle un prefijo de `$` a estos valores.

Nuxt.js también nos provee un método de `inject(key, value)` para hacer esto. Inject, se le provee como un segundo parámetro cuando exporta una función. El prefijo `$` será añadido automáticamente al valor.

<base-alert type="info">

Es importante que sepas que en cualquier [ciclo de vida, de la instancia de](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram) Vue, sólo los métodos `beforeCreate` y `created` se ejecutan desde el lado del cliente y desde el lado del servidor. Todos los métodos adicionales se llaman sólo desde el lado del cliente.

</base-alert>

```js{}[plugins/hello.js]
export default ({ app }, inject) => {
  // Insertando $hello(msg) en Vue, context y store.
  inject('hello', msg => console.log(`Hello ${msg}!`))
}
```

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/hello.js']
}
```

Ahora el servicio de `$hello` se puede accesar desde `context` y `this` en páginas, componentes, plugins y acciones del store.

```js{}[example-component.vue]
export default {
  mounted() {
    this.$hello('mounted')
    // mostrará 'Hello mounted' en la consola
  },
  asyncData({ app, $hello }) {
    $hello('asyncData')
    // Si usas Nuxt <= 2.12, usa esto 👇
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
    this.$hello('store action')
    const newValue = 'hola'
    commit('changeSomeValue', newValue)
  }
}
```

<base-alert>
No uses `Vue.use()`, `Vue.component()`, o globalmente, no añadas nada en Vue dentro de esta función, dedicada solo a inyectar código en Nuxt.
Esto causaría pérdida de memoria en el lado del servidor.
</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link_plugins_custom"></code-sandbox>
</app-modal>

## La propiedad de extendPlugins

Puedes extender los plugins on incluso cambiar el orden en el que los plugins se crean en Nuxt.js. Esta función recibe un arreglo de objetos de [plugin](/docs/2.x/configuration-glossary/configuration-plugins) y debe retornar un arreglo de objetos de plugins.

Ejemplo de cómo se cambia el orden de plugins:

```js{}[nuxt.config.js]
export default {
  extendPlugins(plugins) {
    const pluginIndex = plugins.findIndex(
      ({ src }) => src === '~/plugins/debeSerPrimero.js'
    )
    const shouldBeFirstPlugin = plugins[pluginIndex]

    plugins.splice(pluginIndex, 1)
    plugins.unshift(shouldBeFirstPlugin)

    return plugins
  }
}
```

### Mixins Globales

Puedes añadir fácilmente mixins globales con Nuxt plugins, pero puedes causar algún problema de pérdida de memoria si no los manejas correctamente. Cuando añades un mixin global a tu aplicación debes usar un identificador para prevenir registrarlo varias veces:

```js{}[plugins/my-mixin-plugin.js]
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin({ ... }) // Configura tu mixin
}
```

<quiz :questions="questions"></quiz>
