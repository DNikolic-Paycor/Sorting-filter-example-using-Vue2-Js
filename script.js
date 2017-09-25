//creating components
//simple head componet with passing props from root Vue instance
Vue.component('app-header', {
  template: '<div><h1>{{text.toUpperCase()}}</h1></div>',
  props: {
    text: {
      type: String


    }


  }

})//end of head component

//component that display a list of IdList object and that object properties (price, name etc)
Vue.component('app-list', {
  template: '<div><ul v-for="i in idList"><li><h3>{{i.Name.toUpperCase()}}</h3>ID NUMBER:{{i.idNum}} <br>PRICE:{{i.Price}}$ <br>POSTED ON:{{i.Posted}}</li></ul></div>',
  props: {
    idList: {
      type: Array,
    }
  }

})//end of list component



new Vue({
  el: '#app',
  data: {
    text: "Sorting objects values example",
    //array of strings for select options that corespond to sorting methods
    filters: ["Price Up", "Price Down", "Sort Alphabeticly A-Z", "Sort Alphabeticly Z-A", "By Date(Newest)", "By Date(Oldest)", "By ID"],
    filter: "",
    idList: [{
        Name: "Nintendo 64",
        idNum: 1,
        Price: 23,
        Posted: "11/11/2017"

      },
      {
        Name: "Amiga 1200",
        idNum: 2,
        Price: 43,
        Posted: "02/05/2017"

      },
      {
        Name: "Sega genesis",
        idNum: 3,
        Price: 42,
        Posted: "01/03/2017"
      }
    ]


  },

  methods: {
//change function is used in <select> with v-model, option value call a sort method
    change: function(par) {
      switch (par) {
        case "Price Up":
          return this.sortByPriceUp();
          break;
        case "Price Down":
          return this.sortByPriceDown();
          break;
        case "Sort Alphabeticly A-Z":
          return this.sortAlpha();
          break;
        case "Sort Alphabeticly Z-A":
          return this.sortAlphaZ();
          break;
        case "By Date(Newest)":
          return this.sortByDateNew();
          break;
        case "By Date(Oldest)":
          return this.sortByDateOld();
          break;
        case "By ID":
          return this.sortByid();
          break;
      }
    },
//just a sort() functions combined
    sortByPriceUp: function() {
      this.idList.sort(function(a, b) {
        return a.Price - b.Price;
      })
    },
    sortByPriceDown: function() {
      this.idList.sort(function(a, b) {
        return b.Price - a.Price;
      })
    },
    sortByid: function() {
      this.idList.sort(function(a, b) {
        return a.idNum - b.idNum;
      })
    },
    sortAlpha: function() {
      this.idList.sort(function(a, b) {
        var x = a.Name.toLowerCase();
        var y = b.Name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    },
    sortAlphaZ: function() {
      this.idList.sort(function(a, b) {
        var x = a.Name.toLowerCase();
        var y = b.Name.toLowerCase();
        if (y < x) {
          return -1;
        }
        if (y > x) {
          return 1;
        }
        return 0;
      });
    },
    sortByDateNew: function() {
      this.idList.sort(function(a, b) {
        return new Date(b.Posted) - new Date(a.Posted);
      });
    },
    sortByDateOld: function() {
      this.idList.sort(function(a, b) {
        return new Date(a.Posted) - new Date(b.Posted);
      });
    }
  }


})
