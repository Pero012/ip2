/* __placeholder__ */
//import HelloWorld from '../components/HelloWorld'
export default (await import('vue')).defineComponent({
name: 'HomeView',

data() {
return {
djela: [],
};
},
created() {
console.log('created');
this.getData;
},

methods: {
getData() {
let api = "https://api.artic.edu/api/v1/artworks";

this.axios.get(api).then((response) => {
console.log(response.data);
this.djela = response.data.data;
});
}
},
//components: {
//HelloWorld,
//},
});
