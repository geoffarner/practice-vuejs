/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Geoff's JS",
      dogs: ["Boone", "MacGregor", "Wallace"],
      showInfo: true,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa...";
    },
    addNewDog: function () {
      this.dogs.push(this.newDog);
      this.newDog = "";
    },
  },
};

Vue.createApp(App).mount("#app");
