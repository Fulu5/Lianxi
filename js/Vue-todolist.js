// todolist
Vue.component('todo-item', {
    template: '\
<li>\
  {{ title }}\
  <button v-on:click="$emit(\'remove\')">Remove</button>\
</li>\
',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [{
            id: 1,
            title: 'Do the dishes',
        }, {
            id: 2,
            title: 'Take out the trash',
        }, {
            id: 3,
            title: 'Mow the lawn'
        }],
        nextTodoId: 4,
        msg: ''
    },
    methods: {
        addNewTodo: function() {
            if (!this.newTodoText) {
                return;
            }
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = '';
        }
    }
})

// prop传值
Vue.component('prop-demo', {
    props: ['post'],
    template: `
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button @click="$emit('enlarge-text', 0.1)">
            Enlarge text
        </button>
        <div v-html="post.content"></div>
    </div>
    `
})

new Vue({
    el: '#prop_demo_id',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function(enlargeAmount) {
            this.postFontSize += enlargeAmount;
        }
    }
})

// v-model应用在自定义组件
Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
})

new Vue({
    el: '#customer-v-model',
    data: {
        searchText: ''
    }
})