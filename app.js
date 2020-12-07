Vue.component("owt",{
    template : "<p>this is called template</p>"
})


new Vue({
  el: "#app",
  data: {
    message: "Wel Come Vue Js 2!",
    name: "Hello, Shahu Amit Kumar",
    job: "Web-Developer",
    urlLink: "www.google.com",
    count: 0,
    textValue: "",
    kiloMeterValue: "",
    isActive: true,
    firstname:"",
    lastname:""
  },
  methods: {
    getVariable() {
      return this.job;
    },
    welcome(name) {
      return "Hello " + name;
    },
    increment() {
      return this.count++;
    },
    toggleClass() {
      this.isActive = !this.isActive;
    }  
  },
  computed: {
    convertTokilometer() {
      return this.kiloMeterValue * 1000;
    },
    fullName(){
      return this.firstname + " " + this.lastname
    }
  },
});
