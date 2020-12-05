new Vue({
    el: "#app",
    data: {
      message: "Wel Come Vue Js 2!",
      name: "Hello, Shahu Amit Kumar",
      job: "Web-Developer",
      urlLink:"www.google.com",
      count: 0,
      textValue: "",
      meterValue:""
    },
    methods: {
        getVariable() {
            return this.job;
        },
        welcome(name) {
            return "Hello "+name;
        },
        increment() {
            return this.count++
        }
    }
    // camputed():{

    // }
  });