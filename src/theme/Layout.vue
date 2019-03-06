<template>
    <div>
        <nav class="nav has-shadow">
          <div class="container">
            <a href="/">
              <img src="http://bit.ly/vue-img" alt="Vue SPA" />
            </a>
          </div>
        </nav>
        <section class="main-section section">
            <div class="container content">
                <div class="columns">
                    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
                        <div class="card">
                            <div class="card-content">
                                <h3>{{ post.title }}</h3>
                                {{ post.content }}
                            </div>
                            <footer class="card-footer">
                                <a class="card-footer-item" :href="post.link" target="_blank">Read More</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
          <div class="container">
            <div class="content has-text-centered">
              Follow us on
              <a href="https://twitter.com/bstavroulakis"
              target="_blank">Twitter</a>
            </div>
          </div>
        </footer>
    </div>
</template>

<script>
export default {
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

<style lang="scss">
    $primary: #287ab1;
    @import '~bulma';

    .columns {
        flex-wrap: wrap
    }
</style>

