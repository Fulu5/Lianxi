var app = new Vue({
	el: '#app-1',
	data: {
		message: 'Hello Vue!'
	}
});

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: '页面加载于 ' + new Date().toLocaleString()
	}
});

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [{
				text: '第一个text'
			},
			{
				text: '第二个text'
			},
			{
				text: '第三个text'
			}
		]
	}
});

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		// 这里声明了一个计算属性 reversedMessage
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('');
		}
	}
});

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'input 绑定 model！'
	}
});

// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
	// "prop"，类似于一个自定义属性。
	// 这个 prop 名为 todo。
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [{
				id: 0,
				text: '蔬菜'
			},
			{
				id: 1,
				text: '奶酪'
			},
			{
				id: 2,
				text: '随便其它什么人吃的东西'
			}
		]
	}
});

var obj = {
	foo: 'bar'
};
//Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
Object.freeze(obj);

var app8 = new Vue({
	el: '#app-8',
	data: obj
});

var app9 = new Vue({
	el: '#app-9',
	data: {
		firstName: 'Foo',
		lastName: 'Bar',
	},
	//	计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter
	computed: {
		fullName: {
			// getter
			get: function() {
				return this.firstName + ' ' + this.lastName;
			},
			// setter
			set: function(newValue) {
				var names = newValue.split(' ');
				this.firstName = names[0];
				this.lastName = names[1];
			}
		}
	}
});

var app10 = new Vue({
	el: '#app-10',
	data: {
		parentMessage: 'Parent',
		items: [{
				message: 'Foo'
			},
			{
				message: 'Bar'
			}
		]
	}
});

var app11 = new Vue({
	el: '#app-11',
	data: {
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	}
});

Vue.component('todo-item', {
	//	$emit(\'remove\') 这里的‘’需要转义才能识别
	template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">Remove</button></li>',
	props: ['title']
});

new Vue({
	el: '#todo-list-example',
	data: {
		newTodoText: '',
		todos: [{
				id: 1,
				title: 'Do the dishes',
			},
			{
				id: 2,
				title: 'Take out the trash',
			},
			{
				id: 3,
				title: 'Mow the lawn',
			},
		],
		nextTodoId: 4
	},
	methods: {
		addNewTodo: function() {
			if(this.newTodoText == "") {
				return;
			}
			this.todos.push({
				id: this.nextTodoId,
				title: this.newTodoText
			});
			this.newTodoText = '';
		}
	}
});

var app12 = new Vue({
	el: "#app-12",
	data: {
		counter: 0
	}
});

var app13 = new Vue({
	el: "#app-13",
	data: {
		checkedNames: []
	}
});

var app14 = new Vue({
	el: "#app-14",
	data: {
		picked: 'none'
	}
});

var app15 = new Vue({
	el: "#app-15",
	data: {
		selected: ''
	}
});

var app16 = new Vue({
	el: '#app-16',
	data: {
		selected: []
	}
});

var app17 = new Vue({
	el: "#app-17",
	data: {
		selected: 'A',
		options: [{
				text: 'one',
				value: 'A'
			},
			{
				text: 'two',
				value: 'B'
			},
			{
				text: 'three',
				value: 'C'
			}
		]
	}
});

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
	data: function() {
		return {
			count: 0
		};
	},
	template: '<button v-on:click="count++">you clicked me {{ count }} times</button>'
});

var app18 = new Vue({
	el: "#app-18"
});

Vue.component('blog-post', {
	props: ['post'],
	template: `
		<div class="blog-post">
			<h3>{{ post.title }}</h3>
			<button v-on:click="$emit(\'enlarge-text\', 0.1)">Enlarge text</button>
			<div v-html="post.content"></div>
		</div>
		`
});

var app19 = new Vue({
	el: '#blog-post-demo',
	data: {
		posts: [{
				id: 1,
				title: 'My journey with Vue',
				content: '...content...'
			},
			{
				id: 2,
				title: 'Blogging with Vue',
				content: '...content...'
			},
			{
				id: 3,
				title: 'Why Vue is so fun',
				content: '...content...'
			}
		],
		postFontSize: 1
	},
	methods: {
		onEnlargeText: function(enlargeAmount) {
			this.postFontSize += enlargeAmount;
		}
	}
});

Vue.component('custom-input', {
	props: ['value'],
	template: `
		<input v-bind:value="value" v-on:input="$emit(\'input\', $event.target.value)">`
});

var app20 = new Vue({
	el: '#app-20',
	data: {
		searchText: 'custom-input with v-model'
	}
});

Vue.component('alert-box', {
	template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});

var app21 = new Vue({
	el: '#app-21',
});

Vue.component('tab-posts', {
	data: function() {
		return {
			posts: [{
					id: 1,
					title: 'Cat Ipsum',
					content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
				},
				{
					id: 2,
					title: 'Hipster Ipsum',
					content: '<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>'
				},
				{
					id: 3,
					title: 'Cupcake Ipsum',
					content: '<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>'
				}
			],
			selectedPost: null
		};
	},
	template: `
  	<div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
		  v-on:click="selectedPost = post">
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div v-if="selectedPost" class="selected-post">
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
          Click on a blog title to the left to view it.
        </strong>
      </div>
    </div>
  `
});

Vue.component('tab-archive', {
	template: '<div>Archive component</div>'
});

Vue.component('tab-test', {
	template: '<div>Test</br>Test</div>'
});

new Vue({
	el: '#dynamic-component-demo',
	data: {
		currentTab: 'Posts',
		tabs: ['Posts', 'Archive', 'Test']
	},
	computed: {
		currentTabComponent: function() {
			return 'tab-' + this.currentTab.toLowerCase();
		}
	}
});

new Vue({
  el: '#app-22',
  data: {
    show: true
  }
});