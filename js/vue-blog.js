Vue.component('tab-posts', {
    data: function () {
        return {
            posts: [{
                    id: 1,
                    title: 'Cat Ipsum',
                    content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                },
                {
                    id: 2,
                    title: 'Hipster Ipsum',
                    content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
                },
                {
                    id: 3,
                    title: 'Cupcake Ipsum',
                    content: '<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>'
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
                v-bind:class="{selected: post === selectedPost}" 
                v-on:click="selectedPost = post">
                    {{ post.title }}
                </li>
            </ul>
            <div class="selected-post-container">
           <div v-if="selectedPost" class="selected-post-container">
                <h3>{{selectedPost.title}}</h3>
                <div v-html="selectedPost.content"></div>
            </div>
            <strong v-else>Click on a blog title to the left to view it.</strong>
            </div>
        </div>`
});

Vue.component('tab-archive', {
    template: '<div>Archive component</div>'
});

new Vue({
    el: '#dynamic-component-demo',
    data: {
        tabs: ['Posts', 'Archive'],
        currentTab: 'Posts'
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase();
        }
    }
});