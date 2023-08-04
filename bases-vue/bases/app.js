const app = Vue.createApp({
  template: `
    <h1>{{ quote }}</h1>
    <p>{{ author }}</p>

    <button @click="changeQuote">Click</button>
    <button v-on:click="capitalize">Click</button>

    `,
  data() {
    return {
      quote: "Batman",
      author: "Bruce Wayne",
    };
  },

  methods: {
    changeQuote() {
      this.quote = "Superman";
      this.author = "Clark Kent";
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    },
  },
}).mount("#app");
