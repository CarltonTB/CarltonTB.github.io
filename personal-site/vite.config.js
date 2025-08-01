export default {
    base: '/',
    build: {
        outDir: '../docs',
        rollupOptions: {
            input: {
                main: 'index.html',
                posts: 'blog/posts.html'
            }
        }
    },
    publicDir: 'public'
}
