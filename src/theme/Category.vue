<template>
    <div class="columns">
        <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
            <app-post :post="post"></app-post>
        </div>
    </div>
</template>

<script>
    import Post from './Post.vue'

    export default {
        components: {
            'app-post': Post
        },
        data () {
            return {
                posts: [
                    { id: 1, title: 'PWA Stats', content: 'A community-driven list of stats and news related to ...' },
                    { id: 2, title: 'A Comprehensive Guide to HTTP/2 Server Push', content: 'No longer is HTTP/2 ...' },
                    { id: 3, title: 'So whats this GraphQL thing I keep hearing about?', content: 'Why now is the ...' },
                    { id: 4, title: 'State of The Mobile Gap Between Native and Web', content: 'Clearly PhoneGap ...' },
                    { id: 5, title: 'Learning Javascript Design Patterns', content: 'Design patterns are reusable ...' },
                    { id: 6, title: 'The Power of Custom Directives in Vue', content: 'The beautiful thing about ...' }
                ]
            }
        }
    }
</script>
