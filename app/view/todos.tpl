<!doctype html>
<html data-framework="vue">
	<head>
		<meta charset="utf-8">
		<title>Vue.js • TodoMVC</title>
		<link rel="stylesheet" href="<%= pathPrefix %>node_modules/todomvc-common/base.css">
		<link rel="stylesheet" href="<%= pathPrefix %>node_modules/todomvc-app-css/index.css">
		<style> [v-cloak] { display: none; } </style>
	</head>
	<body>
		<section class="todoapp" v-cloak>
			<header class="header">
				<h1>todos</h1>
				<input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keydown.enter="addTodo">
			</header>
			<section class="main" v-show="todos.length">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed, editing: todo == editedTodo}">
						<div class="view">
							<input class="toggle" type="checkbox" v-model="todo.completed">
							<label @dblclick="editTodo(todo)">{{todo.title}}</label>
							<button class="destroy" @click="removeTodo(todo)"></button>
						</div>
						<input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keydown.enter="doneEdit(todo)" @keydown.esc="cancelEdit(todo)">
					</li>
				</ul>
			</section>
			<footer class="footer" v-show="todos.length">
				<span class="todo-count">
					<strong v-text="remaining"></strong> {{pluralize('item', remaining)}} left
				</span>
				<ul class="filters">
					<li><a href="#/all" :class="{selected: visibility == 'all'}">All</a></li>
					<li><a href="#/active" :class="{selected: visibility == 'active'}">Active</a></li>
					<li><a href="#/completed" :class="{selected: visibility == 'completed'}">Completed</a></li>
				</ul>
				<button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
					Clear completed
				</button>
			</footer>
		</section>
		<footer class="info">
			<p>Double-click to edit a todo</p>
			<p>Written by <a href="http://evanyou.me">Evan You</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
		
		<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js"></script>
		<script src="https://cdn.bootcdn.net/ajax/libs/js-cookie/latest/js.cookie.min.js"></script>
		<script src="<%= pathPrefix %>node_modules/todomvc-common/base.js"></script>
		<script src="<%= pathPrefix %>node_modules/director/build/director.js"></script>
		<script src="<%= pathPrefix %>node_modules/vue/dist/vue.js"></script>
		<script src="<%= pathPrefix %>js/store.js"></script>
		<script src="<%= pathPrefix %>js/app.js"></script>
		<script src="<%= pathPrefix %>js/routes.js"></script>
	</body>
</html>
