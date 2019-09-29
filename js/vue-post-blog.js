Vue.component('post-blog', {
	props: ['post'],
	template: `
		<div class="post-blog">
			<h3>{{post.title}}</h3>
			<button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
			<button v-on:click="$emit('ensmall-text', 0.1)">ensmall text</button>
			<div v-html="post.content"></div>				
		</div>
	`
})

new Vue({
	el: '#post-blog-demo',
	data: {
		posts: [{
				id: 1,
				title: 'My journey with Vue',
				content: `
					<label>label1</label>
					<label>label2</label>
					<p>content...</p>
				`
			},
			{
				id: 2,
				title: 'Blogging with Vue',
				content: `
					<label>label1</label>
					<label>label2</label>
					<p>content...</p>
				`
			},
			{
				id: 3,
				title: 'Why Vue is so fun',
				content: `
					<label>label1</label>
					<label>label2</label>
					<p>content...</p>
				`
			}
		],
		postFontSize: 1
	},
	methods: {
		onEnlargeText: function(e) {
			this.postFontSize += e
		},
		onEnsmallText: function(e) {
			this.postFontSize -= e
		}
	}
})

Vue.component('custom-input', {
	props: ['value'],
	template: `
		<input v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
	`
})

new Vue({
	el: '#input-demo',
	data: {
		message: 'hello there.'
	}
})

Vue.component('alert-box', {
	template: `
		<div class="demo-alert-box">
			<strong>Error!</strong>
			<slot></slot>
		</div>
	`
})

new Vue({
	el: '#demo-alert-box'
})

Vue.component('base-checkbox', {
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		checked: Boolean
	},
	template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})

new Vue({
	el: "#base-check",
	data: {
		lovingVue: false
	}
})

Vue.component('archive', {
	template: `
		<div>
			<p>Archive component</p>
		</div>
	`
})

// post-blog-demo
Vue.component('posts-tab', {
	data: function() {
		return {
			posts: [{
					id: 1,
					title: 'Cat Ipsum',
					content: `
						<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>
						`
				},
				{
					id: 2,
					title: 'Hipster Ipsum',
					content: `
						<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>
						`
				},
				{
					id: 3,
					title: 'Cupcake Ipsum',
					content: `
						<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>
						</div>
						`
				}
			],
			selectedPost: null
		}
	},
	template: `
		<div class="posts-tab">
			<ul class="posts-sidebar">
				<li v-for="post in posts" v-bind:key="post.id" v-bind:class="{selected: post === selectedPost}" v-on:click="selectedPost = post">
					{{post.title}}
				</li>
			</ul>
			<div class="selected-post-container">
				<div v-if="selectedPost" class="selected-post">
					<h3>{{selectedPost.title}}</h3>
					<div v-html="selectedPost.content"></div>
				</div>
				<strong v-else>
				<p>Click on a blog title to the left to view it.</p>
			</strong>
			</div>
		</div>
	`
})

Vue.component('archive-tab', {
	template: `
		<div class="tab-archive">
			<p>Archive component</p>
		</div>
	`
})

new Vue({
	el: '#dynamic-component-demo',
	data: {
		currentTab: 'Posts',
		tabs: ['Posts', 'Archive']
	},
	computed: {
		currentTabComponent: function() {
			return this.currentTab.toLowerCase() + '-tab'
		}
	}
})

