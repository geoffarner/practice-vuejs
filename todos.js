/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      todos: [],
    };
  },
  methods: {
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        this.todos = response.data;
        console.log(response.data);
      });
    },
    createTodo: function () {
      var params = { userId: 1, title: "this is a title", completed: false };
    },
  },
};
Vue.createApp(App).mount("#app");
