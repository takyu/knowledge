import { createApp, nextTick } from './vue.esm-browser.js';

createApp({
	template: '#tmpl',
	data: function () {
		return {
			num: 0
		}
	},
	methods: {
		increment() {
			this.num++;
			const val = this.$el.querySelector('#val');
			console.log(val.innerHTML == 1);
			nextTick(() => {
				console.log(val.innerHTML == 1);
			})
		}
	}
}).mount('#app');