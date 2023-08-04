const quotes = [
  {
    quote:
      "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "I believe what doesn’t kill you simply makes you, stranger.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote:
      "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me",
    author: "Henri Ducard, Batman Begins",
  },
  {
    quote:
      "You either die a hero or live long enough to see yourself become the villain.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "If you’re good at something, never do it for free.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote: "Yes, father. I shall become a bat.",
    author: "Bruce Wayne/Batman, Batman: Year One",
  },
];
const app = Vue.createApp({
  template: `
    <h1>Batman Quotes</h1>
    <input type="text" placeholder="Write a quote" v-model="newQuote" @keypress.enter="addQuote">
    <input type="text" placeholder="Write an Author">
    <hr>
    <ul>
      <li v-for="( {quote, author} , index) of quotes" :key="index">
        <span>{{index + 1}}. - {{quote}} - </span>
        <!-- <strong v-if="author">{{author}}</strong> -->
        <strong v-show="author">{{author}}</strong>
      </li>
    </ul>
  `,
  data() {
    return {
      quotes,
      newQuote: "",
    };
  },
  methods: {
    addQuote() {
      const newQuote = this.newQuote.trim();
      this.quotes.push({
        quote: newQuote,
      });
    },
  },
}).mount("#app");
