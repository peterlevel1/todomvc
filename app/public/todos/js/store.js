/*jshint unused:false */

(function (exports) {

	'use strict';

	const xhr = axios.create({
		headers: {
			'x-csrf-token': Cookies.get('csrfToken')
		}
	});

	exports.xhr = xhr;

	var STORAGE_KEY = 'todos-vuejs';

	exports.todoStorage = {
		fetch: function () {
			return exports.xhr.get('/api/todos');
			// return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		save: function (todos) {
			// localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
			return exports.xhr.post('/api/todos/save', todos);
		}
	};

})(window);
