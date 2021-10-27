new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance',
  },
  methods: {},
  computed: {},
  watch: {},
  beforeCreate() {
    console.log('beforeCreate()');
  },
  create() {
    console.log('create()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeDestroy() {
    console.log('beforeDestroy()');
  },
  destroyed() {
    console.log('destroyed()');
  },
});
