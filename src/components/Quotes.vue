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
                     <a class="button is-primary is-medium fade-in" value="Refresh Page" onClick="window.location.reload()">New Quote</a>
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
          width: 100wh;
          height: 100vh;
          background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
     	background-size: 400% 400%;
     	-webkit-animation: Gradient 15s ease infinite;
     	-moz-animation: Gradient 15s ease infinite;
     	animation: Gradient 15s ease infinite;
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

     .button {
          align-self: center;
          width: 50%;
     }

//TRANSITIONS//
.fade-in {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 1.5s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

     @-webkit-keyframes Gradient {
     	0% {
     		background-position: 0% 50%
     	}
     	50% {
     		background-position: 100% 50%
     	}
     	100% {
     		background-position: 0% 50%
     	}
     }

     @-moz-keyframes Gradient {
     	0% {
     		background-position: 0% 50%
     	}
     	50% {
     		background-position: 100% 50%
     	}
     	100% {
     		background-position: 0% 50%
     	}
     }

     @keyframes Gradient {
     	0% {
     		background-position: 0% 50%
     	}
     	50% {
     		background-position: 100% 50%
     	}
     	100% {
     		background-position: 0% 50%
     	}
     }
</style>
