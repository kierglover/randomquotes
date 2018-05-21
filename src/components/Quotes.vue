<template>
     <section class="hero is-primary">
          <div class="hero-body has-text-centered">
              <div class="row fade-in" v-bind="quote in quotes">
                   <h1 class="title">Quote of the Day</h1>
                   <p id="quote">{{quotes.quote}}</p>
                   <br>
                   <p><strong>{{quotes.author}}</strong></p>
             </div>
        </div>
     </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'quotes',
     data () {
          return {
               // msg: 'Quote goes here'
               quotes: []
          }
     },
     mounted() {
          axios.get("http://quotes.stormconsultancy.co.uk/random.json")
          .then(response => {this.quotes = response.data})
     }
}
</script>

<style lang="sass" scoped>

@mixin gradient-bg {
     background: #24C6DC;
     background: -webkit-linear-gradient(to right, #514A9D, #24C6DC);
     background: linear-gradient(to right, #514A9D, #24C6DC);
}
     .hero {
          height: 100vh;
          padding: 100px 100px 100px 100px;
          @include gradient-bg;
     }

     .hero-body {
          display: flex;
          align-items: center;
          justify-content: center;
     }

//TRANSITIONS//
.fade-in {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 2s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
