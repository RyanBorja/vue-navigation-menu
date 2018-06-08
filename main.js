var demo = new Vue({

	el: '#main',

	data: {
		active: 'default'
	},

	methods: {
		makeActive: function(item) {
			this.active = item;
		}
	}

});