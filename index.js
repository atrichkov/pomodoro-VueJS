Vue.use(VueMaterial.default)

var rand = Math.floor(Math.random() * 5) + 1;

var data = {
  name: 'Vue js',
  buttonText: 'Start',
  styleObject: {
    background: 'url(\'images/img' + rand + '.jpg\') no-repeat center center fixed',
    fontSize: '13px',
  },
  amount: 0
 };

var vm = new Vue({
  el: '#app',
  data: function () {
    return data
  },
  methods: {
    start: function(event) {
      counter = 0;
      this.buttonText = 'Stop';
      var x = setInterval( ()=>{
        this.amount = (counter / 1500 ) * 100
        counter++;

        if (counter > 1500) {
          clearInterval(x);
        }

      }, 1000);
    }
  }
});
