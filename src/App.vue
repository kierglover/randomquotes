<template>
  <div id="app">
    <app-quotes></app-quotes>
  </div>
</template>

<script>
import Quotes from './components/Quotes.vue'

export default {
  name: 'app',
  components: {
    "app-quotes": Quotes
  }
}
</script>
